import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";
import Prices from "@/components/Prices";
import Book from "@/components/Book";
import Faq from "@/components/Faq";
import { hero, packages, site, steps, why } from "@/lib/content";

const from = Math.min(...packages.map((p) => p.prices.small));

export default function Page() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <section id="top" className="relative mx-auto max-w-7xl px-5 pt-32 sm:px-8 sm:pt-40 lg:pb-16">
          <div className="glow-lime glow-hero" aria-hidden="true" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <span className="rise inline-flex items-center gap-2 rounded-full border border-off/10 bg-charcoal/70 py-1.5 pl-1.5 pr-4 text-sm text-off">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-night">
                  <Icon name="pin" className="h-4 w-4" />
                </span>
                {hero.badge}
              </span>
              <h1 className="rise rise-2 mt-7 text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl xl:text-7xl">
                <span className="block">{hero.title[0]}</span>
                <span className="block">{hero.title[1]}</span>
                <span className="block">
                  <span className="underline-lime">{hero.title[2]}</span>
                </span>
              </h1>
              <p className="rise rise-2 mt-6 max-w-lg text-lg text-off sm:text-xl">{hero.text}</p>
              <div className="rise rise-3 mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#book"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-lime px-8 text-base font-semibold text-night transition hover:brightness-95"
                >
                  Book a wash
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

            <div className="rise rise-3 relative">
              <div className="float-card rounded-[32px] border border-off/10 bg-charcoal p-7 shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:p-9">
                <p className="font-semibold text-lime">Packages from</p>
                <p className="mt-1 text-6xl font-extrabold tracking-tight">${from}</p>
                <ul className="mt-7 divide-y divide-off/10 border-y border-off/10">
                  {packages.map((p) => (
                    <li key={p.name} className="flex items-center justify-between gap-4 py-4">
                      <span className="flex items-center gap-3 font-medium">
                        <Icon name="car" className="h-5 w-5 text-lime" />
                        {p.name}
                      </span>
                      <span className="font-bold">${p.prices.small}</span>
                    </li>
                  ))}
                </ul>
                <a href="#prices" className="mt-6 inline-flex min-h-11 items-center font-semibold text-lime hover:underline">
                  See all prices and what&rsquo;s included
                </a>
              </div>
            </div>
          </div>
        </section>

        <Prices />

        <section id="how" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">How it works</h2>
            <p className="mt-4 text-lg text-off">Three steps and your car&rsquo;s clean. You don&rsquo;t leave home.</p>
          </Reveal>
          <ol className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90}>
                <Spotlight className="group h-full rounded-3xl border border-off/10 bg-charcoal/60 p-8">
                  <span className="relative flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-night transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-semibold text-lime">0{i + 1}</span>
                  </span>
                  <h3 className="relative mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="relative mt-2 text-off">{s.text}</p>
                </Spotlight>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{why.title}</h2>
            <p className="mt-4 text-lg text-off">{why.text}</p>
          </Reveal>
          <ul className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-3">
            {why.items.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 90}>
                <Spotlight className="group h-full rounded-3xl border border-off/10 bg-charcoal/60 p-8">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-night transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-6 text-xl font-semibold">{w.title}</h3>
                  <p className="relative mt-2 text-off">{w.text}</p>
                </Spotlight>
              </Reveal>
            ))}
          </ul>
        </section>

        <Faq />

        <Book />
      </main>
      <Footer />
    </>
  );
}
