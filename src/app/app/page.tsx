import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Notify from "@/components/Notify";
import Phone from "@/components/Phone";
import AppHome from "@/components/AppHome";
import FoamFrenzy from "@/components/FoamFrenzy";
import { app } from "@/lib/content";

export const metadata: Metadata = {
  title: "MatePro app - Book a wash and play Foam Frenzy",
  description:
    "The MatePro app is coming soon. Book a mobile car wash in a few taps, track your detailer, earn points and play Foam Frenzy.",
};

export default function AppPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <section id="top" className="relative mx-auto max-w-7xl px-5 pt-28 sm:px-8 sm:pt-40">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <span className="rise inline-flex items-center gap-2 rounded-full border border-off/10 bg-charcoal/70 py-1.5 pl-1.5 pr-4 text-sm text-off">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-night">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                {app.badge}
              </span>
              <h1 className="rise rise-2 mt-6 text-[clamp(2.4rem,11vw,3rem)] font-extrabold leading-[1.02] tracking-tight sm:mt-7 sm:text-7xl xl:text-8xl">
                <span className="block">{app.title[0]}</span>
                <span className="block">
                  <span className="underline-lime">{app.title[1]}</span>
                </span>
              </h1>
              <p className="rise rise-2 mt-5 max-w-lg text-base text-off sm:mt-6 sm:text-xl">{app.text}</p>
              <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <a
                  href="#launch"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-lime px-8 text-base font-semibold text-night transition hover:brightness-95"
                >
                  Tell me when it&rsquo;s out
                </a>
                <a
                  href="#game"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-off/20 px-8 text-base font-semibold text-off transition hover:bg-off/10"
                >
                  Play Foam Frenzy
                </a>
              </div>
            </div>
            <div className="rise rise-3 relative flex justify-center">
              <div className="absolute inset-x-10 top-10 bottom-10 rounded-full bg-lime/20 blur-3xl" aria-hidden="true" />
              <Phone className="relative">
                <AppHome />
              </Phone>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-32">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{app.features.title}</h2>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {app.features.items.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 80} className="rounded-[28px] border border-off/10 bg-charcoal/60 p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-night">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-off">{f.text}</p>
              </Reveal>
            ))}
          </ul>
        </section>

        <section id="game" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-16 sm:px-8 sm:pb-32">
          <div className="grid items-center gap-10 rounded-[28px] border border-off/10 bg-charcoal/40 p-6 sm:rounded-[40px] sm:p-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="inline-flex rounded-full bg-lime px-3 py-1 text-xs font-semibold text-night">Built into the app</span>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">{app.game.title}</h2>
              <p className="mt-4 max-w-md text-lg text-off">{app.game.text}</p>
              <p className="mt-4 max-w-md text-off">{app.game.note}</p>
            </Reveal>
            <Reveal className="flex justify-center">
              <Phone>
                <FoamFrenzy />
              </Phone>
            </Reveal>
          </div>
        </section>

        <Notify id="launch" action="/api/app" title={app.form.title} text={app.form.text} />
      </main>
      <Footer />
    </>
  );
}
