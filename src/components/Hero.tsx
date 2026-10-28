import BgVideo from "./BgVideo";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[min(100svh,880px)] min-h-[600px] overflow-hidden"
    >
      <BgVideo
        webm="/video/hero.webm"
        mp4="/video/hero.mp4"
        poster="/photos/hero-wash-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/75 to-night/30 lg:bg-gradient-to-r lg:from-night/90 lg:via-night/65 lg:to-night/25" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-night to-transparent" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 lg:justify-center lg:pb-32">
        <h1 className="rise rise-2 max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          Mobile truck wash, done <span className="underline-lime">properly.</span>
        </h1>
        <p className="rise rise-2 mt-6 max-w-xl text-lg text-off/75 sm:text-xl">
          Hand washed at your depot overnight, {site.area}. We bring the
          water and the gear, you get clean trucks by morning.
        </p>
        <div className="rise rise-3 mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-4 text-base font-semibold text-night transition hover:brightness-95"
          >
            Get a free quote
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-full border border-off/20 px-7 py-4 text-base font-semibold text-off transition hover:border-off/50"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
