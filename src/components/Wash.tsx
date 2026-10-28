import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";
import WashPrices from "./WashPrices";
import {
  site,
  washBonuses,
  washIncludes,
  washOffer,
  washSteps,
} from "@/lib/content";

export default function Wash() {
  return (
    <section id="wash" className="relative">
      <div className="relative h-[min(75svh,680px)] min-h-[520px] overflow-hidden">
        <Image
          src="/photos/wash-ute.jpg"
          alt="MatePro wash ute arriving at a truck depot at night"
          fill
          sizes="100vw"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/75 to-night/30 lg:bg-gradient-to-r lg:from-night lg:via-night/70 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-night via-night/60 to-transparent sm:h-56" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 py-24 sm:px-8">
          <span className="w-fit rounded-full bg-lime px-4 py-1.5 text-sm font-semibold text-night">
            {washOffer.badge}
          </span>
          <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Clean trucks. Zero downtime.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-off/75">
            MatePro {washOffer.name}. Hand washed at your depot while it&apos;s
            parked, {site.area}. Photos of every wash, a defect check, and a
            fixed price agreed before we start.
          </p>
          <a
            href={site.phoneHref}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-lime px-7 py-4 font-semibold text-night transition hover:brightness-95"
          >
            <Icon name="phone" className="h-5 w-5" />
            Book a wash
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <ol className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          {washSteps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 110}>
              <span className="text-sm font-semibold text-lime">0{i + 1}</span>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-off/60">{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <ul className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {washIncludes.map((item, i) => (
            <Reveal
              as="li"
              key={item}
              delay={i * 60}
              className="flex items-center gap-3 rounded-2xl border border-off/10 px-4 py-3.5 text-off/85"
            >
              <Icon name="check" className="h-5 w-5 shrink-0 text-lime" />
              {item}
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-20 sm:mt-28">
          <WashPrices />
          <p className="mt-4 text-sm text-off/50">
            {washOffer.extras.join(" · ")}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="wash-guarantee relative overflow-hidden rounded-3xl border border-lime/40 bg-lime/[0.06] p-8 sm:p-10">
            <Icon name="shield" className="h-10 w-10 text-lime" />
            <h3 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {washOffer.guarantee}
            </h3>
            <p className="mt-3 text-off/70">{washOffer.late}</p>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {washBonuses.map((b, i) => (
              <Reveal
                as="li"
                key={b.title}
                delay={i * 80}
                className="rounded-3xl border border-off/10 bg-charcoal/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-off/25"
              >
                <span className="text-sm font-semibold text-lime">0{i + 1}</span>
                <h4 className="mt-2 text-lg font-semibold">{b.title}</h4>
                <p className="mt-1 text-off/60">{b.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
