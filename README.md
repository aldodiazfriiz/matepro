# MatePro landing page

Landing page for MatePro mobile pressure washing (trucks, buses, machinery, concrete). Next.js 16, Tailwind 4, TypeScript.

```bash
npm install
npm run dev
```

Opens at http://localhost:3000.

All copy, services and prices are in `src/lib/content.ts`.

Quote requests post to `src/app/api/quote/route.ts`. It only validates and logs for now; connect it to email or a database before launch.

The hero video is cut from the clips in `landing-page/video-source/hero-v2` and `hero-v3` (outside this repo) with `hero-v3/cut.py`.
