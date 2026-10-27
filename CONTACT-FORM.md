# Contact form setup

The form posts to the Vercel serverless function at `/api/contact`. The function validates the submitted fields and delivers the message through Resend; it never opens an email application.

Configure these environment variables in the Vercel project (and in `.env.local` for local development):

- `RESEND_API_KEY`: a Resend API key with permission to send email.
- `RESEND_FROM`: a verified sender address, for example `Portfolio contact <contact@your-verified-domain.com>`.

The recipient is currently `keytcristen26@gmail.com`, matching the portfolio’s existing contact address. Redeploy after adding or changing production environment variables. The API key must only be set in server-side environment variables; do not prefix it with `VITE_`.

For local development, run the project with the Vercel CLI (`vercel dev`) so `/api/contact` is available alongside Vite. A plain Vite dev server serves the frontend but does not run Vercel functions.
