# MatePro landing page

Landing page for MatePro, a mobile truck wash in Melbourne. Next.js 16, Tailwind 4, TypeScript.

```bash
npm install
npm run dev
```

Opens at http://localhost:3000.

All copy, services and prices are in `src/lib/content.ts`.

Two pages: the truck wash (`/`) and the app coming-soon page (`/app`). Quote requests (`src/app/api/quote`) and app waitlist sign-ups (`src/app/api/waitlist`) are emailed through Resend, with a confirmation to the person. Set these in `.env.local` (and in your host's environment settings):

```
RESEND_API_KEY=re_...
QUOTE_TO_EMAIL=hello@matepro.com.au
QUOTE_FROM_EMAIL=MatePro Quotes <quotes@matepro.com.au>
```

`QUOTE_TO_EMAIL` can be a comma-separated list. `QUOTE_FROM_EMAIL` must use a domain verified in Resend; leave it out to send from `onboarding@resend.dev`, which only delivers to the email on your Resend account.

The hero video is cut from the clips in `landing-page/video-source/hero-v2` and `hero-v3` (outside this repo) with `hero-v3/cut.py`.
