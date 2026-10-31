import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Notify from "@/components/Notify";
import { carWash } from "@/lib/content";

export const metadata: Metadata = {
  title: "MatePro Car Wash - Hand-wash bays and touchless automatic, Melbourne",
  description:
    "MatePro Car Wash is opening soon in Melbourne. Self-serve hand-wash bays and a touchless automatic bay. Leave your email to hear when it opens.",
};

export default function CarWashPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <section id="top" className="dark-zone relative flex min-h-[min(88svh,760px)] items-center overflow-hidden">
          <Image src="/carwash/site.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/75 to-night/40 lg:bg-gradient-to-r lg:from-night/90 lg:via-night/60 lg:to-night/20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-40">
            <span className="rise inline-flex items-center gap-2 rounded-full border border-off/10 bg-charcoal/70 py-1.5 pl-1.5 pr-4 text-sm text-off">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-night">
                <Icon name="pin" className="h-4 w-4" />
              </span>
              {carWash.badge}
            </span>
            <h1 className="rise rise-2 mt-6 text-[clamp(2.4rem,11vw,3rem)] font-extrabold leading-[1.02] tracking-tight sm:mt-7 sm:text-7xl xl:text-8xl">
              <span className="block">{carWash.title[0]}</span>
              <span className="block">
                <span className="underline-lime">{carWash.title[1]}</span>
              </span>
            </h1>
            <p className="rise rise-2 mt-5 max-w-lg text-base text-off sm:mt-6 sm:text-xl">{carWash.text}</p>
            <div className="rise rise-3 mt-8 sm:mt-9">
              <a
                href="#opening"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-lime px-8 text-base font-semibold text-night transition hover:brightness-95 sm:w-auto"
              >
                Tell me when it opens
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-32">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{carWash.ways.title}</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2">
            {carWash.ways.items.map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 90}
                className="overflow-hidden rounded-[28px] border border-off/10 bg-charcoal/60 sm:rounded-[32px]"
              >
                <div className="relative aspect-[16/9]">
                  <Image src={w.image} alt={w.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-7 sm:p-9">
                  <h3 className="text-2xl font-extrabold sm:text-3xl">{w.title}</h3>
                  <p className="mt-2 text-lg text-off">{w.text}</p>
                  <ul className="mt-6 space-y-2.5">
                    {w.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-off">
                        <Icon name="tick" className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{carWash.menu.title}</h2>
            <p className="mt-4 text-lg text-off">{carWash.menu.text}</p>
          </Reveal>
          <ul className="mx-auto mt-10 grid max-w-5xl gap-4 sm:mt-14 md:grid-cols-3">
            {carWash.menu.items.map((m, i) => (
              <Reveal
                as="li"
                key={m.name}
                delay={i * 90}
                className={`flex flex-col rounded-[28px] p-7 sm:p-8 ${
                  m.popular ? "bg-lime text-night" : "border border-off/10 bg-charcoal/60"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-extrabold">{m.name}</h3>
                  {m.popular && (
                    <span className="rounded-full bg-night px-3 py-1 text-xs font-semibold text-lime">Most popular</span>
                  )}
                </div>
                <p className={`mt-4 text-sm font-semibold ${m.popular ? "text-night" : "text-lime"}`}>Price on opening</p>
                <ul className={`mt-5 space-y-2.5 border-t pt-5 ${m.popular ? "border-night/15" : "border-off/10"}`}>
                  {m.includes.map((inc) => (
                    <li key={inc} className={`flex gap-2.5 ${m.popular ? "text-night" : "text-off"}`}>
                      <Icon name="tick" className={`mt-0.5 h-5 w-5 shrink-0 ${m.popular ? "text-night" : "text-lime"}`} />
                      {inc}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </section>

        <Notify id="opening" action="/api/car-wash" title={carWash.form.title} text={carWash.form.text} />
      </main>
      <Footer />
    </>
  );
}
