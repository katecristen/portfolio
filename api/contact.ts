type VercelRequest = {
  method?: string;
  body?: unknown;
};

type VercelResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): VercelResponse;
  json(body: Record<string, string>): void;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { name, email, message } = (req.body ?? {}) as Record<string, unknown>;
  if (
    typeof name !== 'string' || !name.trim() || name.length > 100 ||
    typeof email !== 'string' || email.length > 254 || !emailPattern.test(email.trim()) ||
    typeof message !== 'string' || !message.trim() || message.length > 5000
  ) {
    return res.status(400).json({ error: 'Please enter your name, a valid email, and a message.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  if (!apiKey || !from) {
    console.error('Contact form is missing RESEND_API_KEY or RESEND_FROM.');
    return res.status(503).json({ error: 'The contact form is temporarily unavailable. Please try again later.' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: ['keytcristen26@gmail.com'],
        reply_to: email.trim(),
        subject: `Portfolio inquiry from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
      }),
    });
    if (!response.ok) {
      console.error('Resend rejected contact message:', response.status, await response.text());
      return res.status(502).json({ error: 'We could not send your message right now. Please try again.' });
    }
    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact message delivery failed:', error);
    return res.status(502).json({ error: 'We could not send your message right now. Please try again.' });
  }
}
