import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Prices from "@/components/Prices";
import Faq from "@/components/Faq";
import MobileBar from "@/components/MobileBar";
import { ads, hero, packages, site } from "@/lib/content";

// Landing page for paid ads: no site menu, a photo instead of the video so it loads fast on phones
export const metadata: Metadata = {
  title: "Book a mobile car wash in Melbourne - MatePro",
  description: `Hand wash, interior and full details in your driveway, Melbourne-wide. Packages from $${Math.min(...packages.map((p) => p.prices.small))}. Book online in a minute.`,
  robots: { index: false, follow: true },
};

const from = Math.min(...packages.map((p) => p.prices.small));

export default function BookPage() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div className="nav-glass mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 rounded-full pl-5 pr-2">
          <Link href="/mobile-wash" aria-label="MatePro home">
            <Image src="/brand/matepro-horizontal-on-dark.svg" alt="MatePro" width={126} height={36} priority />
          </Link>
          <div className="flex items-center gap-1.5">
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phone}`}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-off/10 px-4 text-sm font-semibold text-off transition hover:bg-off/15"
            >
              <Icon name="phone" className="h-4 w-4" />
              <span className="hidden sm:inline">{site.phone}</span>
            </a>
            <a
              href="#prices"
              className="inline-flex h-11 items-center whitespace-nowrap rounded-full bg-lime px-5 text-sm font-semibold text-night transition hover:brightness-95"
            >
              Book
            </a>
          </div>
        </div>
      </header>

      <main className="overflow-x-clip">
        <section id="top" className="relative flex min-h-[min(100svh,820px)] items-center overflow-hidden">
          <Image
            src="/video/hero-poster.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_center] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/80 to-night/40 lg:bg-gradient-to-r lg:from-night/95 lg:via-night/70 lg:to-night/30" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
            <span className="rise inline-flex items-center gap-2 rounded-full border border-off/10 bg-charcoal/70 py-1.5 pl-1.5 pr-4 text-sm text-off">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-night">
                <Icon name="pin" className="h-4 w-4" />
              </span>
              {ads.badge}
            </span>
            <h1 className="rise rise-2 mt-6 text-[clamp(2.4rem,11vw,3rem)] font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
              <span className="block">{hero.title[0]}</span>
              <span className="block">{hero.title[1]}</span>
              <span className="block">
                <span className="underline-lime">{hero.title[2]}</span>
              </span>
            </h1>
            <p className="rise rise-2 mt-5 max-w-lg text-base text-off sm:text-xl">{ads.text}</p>
            <p className="rise rise-2 mt-6 inline-flex items-baseline gap-2 rounded-2xl bg-lime px-5 py-3 text-night">
              <span className="font-semibold">Packages from</span>
              <span className="text-3xl font-extrabold tracking-tight">${from}</span>
            </p>
            <ul className="rise rise-3 mt-6 grid max-w-xl gap-2.5 sm:grid-cols-2">
              {ads.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-off">
                  <Icon name="tick" className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#prices"
                className="inline-flex h-14 items-center justify-center rounded-full bg-lime px-8 text-base font-semibold text-night transition hover:brightness-95"
              >
                Choose your package
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-off/20 px-8 text-base font-semibold text-off transition hover:bg-off/10"
              >
                <Icon name="phone" className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{ads.steps.title}</h2>
          </Reveal>
          <ol className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
            {ads.steps.items.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80} className="rounded-[28px] border border-off/10 bg-charcoal/60 p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-xl font-extrabold text-night">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-2xl font-extrabold">{step.title}</h3>
                <p className="mt-2 text-off">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        <Prices />

        <Faq />

        <section id="book" className="px-4 pb-16 sm:px-6 sm:pb-24">
          <Reveal className="mx-auto max-w-6xl rounded-[28px] bg-lime px-5 py-12 text-center text-night sm:rounded-[40px] sm:px-12 sm:py-20">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">{ads.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-night">{ads.cta.text}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#prices"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-night px-8 text-base font-semibold text-off transition hover:bg-black sm:w-auto"
              >
                Choose your package
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-night/25 px-8 text-base font-semibold text-night transition hover:bg-night/[0.06] sm:w-auto"
              >
                <Icon name="phone" className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-off/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-off sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>&copy; 2026 MatePro. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-lime">Terms</Link>
            <Link href="/privacy" className="hover:text-lime">Privacy</Link>
          </div>
        </div>
      </footer>

      <MobileBar />
    </>
  );
}
