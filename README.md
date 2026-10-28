# MatePro

Site for the MatePro app, a free app for Australian truck drivers. Coming-soon page with a waitlist. Next.js 16, Tailwind 4, TypeScript.

```bash
npm install
npm run dev
```

Opens at http://localhost:3000.

All copy is in `src/lib/content.ts`. `/app` redirects to `/`.

Waitlist sign-ups (`src/app/api/waitlist`) are emailed through Resend, with a confirmation to the person. Set these in `.env.local` (and in your host's environment settings):

```
RESEND_API_KEY=re_...
QUOTE_TO_EMAIL=hello@matepro.com.au
QUOTE_FROM_EMAIL=MatePro <hello@matepro.com.au>
```

`QUOTE_TO_EMAIL` is where sign-ups go and can be a comma-separated list. `QUOTE_FROM_EMAIL` must use a domain verified in Resend; leave it out to send from `onboarding@resend.dev`, which only delivers to the email on your Resend account.
