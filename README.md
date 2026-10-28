# MatePro landing page

Marketing site for the MatePro app and MatePro Truck Wash. Next.js 16, Tailwind 4, TypeScript.

```bash
npm install
npm run dev
```

Opens at http://localhost:3000.

All copy, plans, wash prices and store links are in `src/lib/content.ts`. Store links are `null` until the app is live, which sends the store buttons to the sign-up form.

Sign-ups post to `src/app/api/waitlist/route.ts`. It only validates and logs for now; connect it to a mailing list or database before launch.

The hero video is cut from the clips in `landing-page/video-source/hero-v2` (outside this repo) with `cut.py`.
