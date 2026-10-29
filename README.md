# MatePro

Site for MatePro, a mobile car wash and detailing business in Melbourne. Prices, packages and a booking request form. Next.js 16, Tailwind 4, TypeScript.

```bash
npm install
npm run dev
```

Opens at http://localhost:3000.

All copy and prices are in `src/lib/content.ts`. `/app` redirects to `/`.

Booking requests (`src/app/api/book`) are emailed through Resend, with a confirmation to the customer. Set these in `.env.local` (and in your host's environment settings):

```
RESEND_API_KEY=re_...
QUOTE_TO_EMAIL=hello@matepro.com.au
QUOTE_FROM_EMAIL=MatePro <hello@matepro.com.au>
```

`QUOTE_TO_EMAIL` is where booking requests go and can be a comma-separated list. `QUOTE_FROM_EMAIL` must use a domain verified in Resend; leave it out to send from `onboarding@resend.dev`, which only delivers to the email on your Resend account.
