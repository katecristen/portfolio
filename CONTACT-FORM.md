# Contact form setup

The form posts to the Vercel serverless function at `/api/contact`. The function validates the submitted fields and delivers messages through Resend. If delivery is unavailable, the form keeps the entered details and offers a prefilled email draft to `keytcristen26@gmail.com` as a fallback.

For server-side delivery, configure these environment variables in the Vercel project:

- `RESEND_API_KEY`: a Resend API key with permission to send email.
- `RESEND_FROM`: a sender address verified with Resend, for example `Portfolio contact <contact@your-verified-domain.com>`.

Redeploy after adding or changing production environment variables. Keep the API key in server-side environment variables; do not prefix it with `VITE_`.

For local development, use the Vercel CLI (`vercel dev`) so `/api/contact` is available. A plain Vite dev server does not run Vercel functions.
