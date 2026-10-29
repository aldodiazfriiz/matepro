import Image from "next/image";
import Nav from "@/components/Nav";
import BgVideo from "@/components/BgVideo";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Ticker from "@/components/Ticker";
import Prices from "@/components/Prices";
import Book from "@/components/Book";
import Faq from "@/components/Faq";
import MobileBar from "@/components/MobileBar";
import { hero, packages, site, why } from "@/lib/content";

const from = Math.min(...packages.map((p) => p.prices.small));

export default function Page() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <section id="top" className="relative flex min-h-[min(100svh,880px)] items-center overflow-hidden">
          <BgVideo
            webm="/video/hero.webm"
            mp4="/video/hero.mp4"
            poster="/video/hero-poster.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/75 to-night/40 lg:bg-gradient-to-r lg:from-night/90 lg:via-night/60 lg:to-night/30" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-40 lg:pb-28">
            <div>
              <span className="rise inline-flex items-center gap-2 rounded-full border border-off/10 bg-charcoal/70 py-1.5 pl-1.5 pr-4 text-sm text-off">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-night">
                  <Icon name="pin" className="h-4 w-4" />
                </span>
                {hero.badge}
              </span>
              <h1 className="rise rise-2 mt-6 text-[clamp(2.4rem,11vw,3rem)] font-extrabold leading-[1.02] tracking-tight sm:mt-7 sm:text-7xl xl:text-8xl">
                <span className="block">{hero.title[0]}</span>
                <span className="block">{hero.title[1]}</span>
                <span className="block">
                  <span className="underline-lime">{hero.title[2]}</span>
                </span>
              </h1>
              <p className="rise rise-2 mt-5 max-w-lg text-base text-off sm:mt-6 sm:text-xl">{hero.text}</p>
              <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
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
          </div>
        </section>

        <Ticker />

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-32">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{why.title}</h2>
            <p className="mt-4 text-lg text-off">{why.text}</p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:grid-rows-2">
            <Reveal className="group relative min-h-[380px] overflow-hidden rounded-[28px] sm:col-span-2 sm:min-h-[460px] sm:rounded-[32px] lg:row-span-2 lg:min-h-[620px]">
              <Image
                src="/photos/ute-door.jpg"
                alt="MatePro ute with the logo on the door, outside a client's home"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-night">
                  <Icon name="pin" className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">{why.home.title}</h3>
                <p className="mt-2 max-w-md text-lg text-off">{why.home.text}</p>
              </div>
            </Reveal>
            <Reveal delay={90} className="rounded-[28px] sm:rounded-[32px]">
              <a
                href="#prices"
                aria-label={`Packages from $${from}. See prices`}
                className="shine group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-lime p-7 text-night transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(203,231,51,0.28)] active:scale-[0.98] sm:rounded-[32px] sm:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">Packages from</p>
                    <p className="mt-1 origin-left text-6xl font-extrabold tracking-tight transition-transform duration-300 group-hover:scale-105 sm:text-7xl">
                      ${from}
                    </p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-night text-lime transition duration-300 group-hover:-rotate-45 group-hover:scale-110">
                    <Icon name="arrow" className="h-5 w-5" />
                  </span>
                </div>
                <div className="mt-8 sm:mt-10">
                  <h3 className="text-2xl font-extrabold">{why.prices.title}</h3>
                  <p className="mt-2">{why.prices.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold">
                    See prices
                    <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
            <Reveal delay={180} className="group relative min-h-[300px] overflow-hidden rounded-[28px] sm:rounded-[32px]">
              <Image
                src="/photos/drone-foam.jpg"
                alt="A supercar covered in snow foam in a Melbourne driveway"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <h3 className="text-2xl font-extrabold">{why.hand.title}</h3>
                <p className="mt-2 text-off">{why.hand.text}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <Prices />

        <Faq />

        <Book />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
