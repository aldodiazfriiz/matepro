import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";
import Waitlist from "@/components/Waitlist";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import StoreBadges from "@/components/StoreBadges";
import { cta, hero, map, why } from "@/lib/content";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <section id="top" className="relative mx-auto max-w-7xl px-5 pt-32 sm:px-8 sm:pt-40 lg:pb-16">
          <div className="glow-lime glow-hero" aria-hidden="true" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.25fr] lg:gap-6">
            <div>
              <span className="rise inline-flex items-center gap-2 rounded-full border border-off/10 bg-charcoal/70 py-1.5 pl-1.5 pr-4 text-sm text-off">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-night">
                  <Icon name="truck" className="h-4 w-4" />
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
              <div id="waitlist" className="rise rise-3 mt-9 max-w-lg scroll-mt-32">
                <Waitlist />
              </div>
              <div className="rise rise-3 mt-6">
                <StoreBadges />
              </div>
            </div>

            <div className="rise rise-3 relative">
              <div className="float-card">
                <Image
                  src="/photos/app-map.jpg"
                  alt="MatePro app: set up your rig, see your route reroute around a low bridge, and the warnings on your route"
                  width={2048}
                  height={1360}
                  priority
                  sizes="(min-width: 1024px) 860px, 120vw"
                  className="app-shot -ml-[10%] h-auto w-[120%] max-w-none sm:-ml-[6%] sm:w-[112%] lg:-ml-[4%] lg:w-[118%]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="map" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{map.title}</h2>
            <p className="mt-4 text-lg text-off">{map.text}</p>
          </Reveal>
          <ul className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {map.layers.map((l, i) => (
              <Reveal as="li" key={l.title} delay={(i % 3) * 90}>
                <Spotlight className="group h-full rounded-3xl border border-off/10 bg-charcoal/60 p-8">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-night transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon name={l.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-6 text-xl font-semibold">{l.title}</h3>
                  <p className="relative mt-2 text-off">{l.text}</p>
                </Spotlight>
              </Reveal>
            ))}
          </ul>
        </section>

        <Features />

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

        <section className="px-4 pb-24 sm:px-6 sm:pb-32">
          <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-lime px-6 py-16 text-night sm:px-12 sm:py-20">
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{cta.title}</h2>
              <p className="mt-4 text-lg text-night">{cta.text}</p>
              <div className="mx-auto mt-9 max-w-lg text-left">
                <Waitlist onLime anchors={false} />
              </div>
              <div className="mt-6 flex justify-center">
                <StoreBadges dark />
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
