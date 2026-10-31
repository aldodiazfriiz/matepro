import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import FranchiseForm from "@/components/FranchiseForm";
import { franchise } from "@/lib/content";

export const metadata: Metadata = {
  title: "MatePro franchise - Run your own mobile car wash in Melbourne",
  description:
    "Run your own MatePro mobile car wash in Melbourne. Brand, bookings, set prices and payments sorted. Register your interest.",
};

export default function FranchisePage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <section id="top" className="dark-zone relative flex min-h-[min(88svh,760px)] items-center overflow-hidden">
          <Image
            src="/photos/ute-street.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/75 to-night/40 lg:bg-gradient-to-r lg:from-night/90 lg:via-night/60 lg:to-night/30" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-40">
            <span className="rise inline-flex items-center gap-2 rounded-full border border-off/10 bg-charcoal/70 py-1.5 pl-1.5 pr-4 text-sm text-off">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-night">
                <Icon name="tag" className="h-4 w-4" />
              </span>
              {franchise.badge}
            </span>
            <h1 className="rise rise-2 mt-6 text-[clamp(2.4rem,11vw,3rem)] font-extrabold leading-[1.02] tracking-tight sm:mt-7 sm:text-7xl xl:text-8xl">
              <span className="block">{franchise.title[0]}</span>
              <span className="block">
                <span className="underline-lime">{franchise.title[1]}</span>
              </span>
            </h1>
            <p className="rise rise-2 mt-5 max-w-lg text-base text-off sm:mt-6 sm:text-xl">{franchise.text}</p>
            <div className="rise rise-3 mt-8 sm:mt-9">
              <a
                href="#interest"
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-lime px-8 text-base font-semibold text-night transition hover:brightness-95 sm:w-auto"
              >
                Register your interest
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-32">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{franchise.offer.title}</h2>
            <p className="mt-4 text-lg text-off">{franchise.offer.text}</p>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {franchise.offer.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 3) * 90}
                className="rounded-[28px] border border-off/10 bg-charcoal/60 p-7 sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-night">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-off">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal className="relative aspect-[16/10] overflow-hidden rounded-[28px] sm:rounded-[32px]">
              <Image
                src="/photos/drone-foam.jpg"
                alt="A MatePro ute outside a client's home while a car is washed in the driveway"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{franchise.who.title}</h2>
              <ul className="mt-8 space-y-4">
                {franchise.who.items.map((item) => (
                  <li key={item} className="flex gap-3 text-lg">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime text-night">
                      <Icon name="tick" className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <Faq data={franchise.faq} />

        <FranchiseForm />
      </main>
      <Footer />
    </>
  );
}
