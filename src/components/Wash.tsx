import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { site, washServices, washSteps } from "@/lib/content";

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
        {/* Fleet section above is charcoal/40 over night, which composites to #181818 */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#181818] via-[#181818]/60 to-transparent sm:h-56" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 py-24 sm:px-8">
          <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Clean trucks. Clean records.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-off/75">
            MatePro Truck Wash. Mobile washing for prime movers, trailers and
            whole depots, {site.area}. We come to you, day or night.
          </p>
          <a
            href={site.phoneHref}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-lime px-7 py-4 font-semibold text-night transition hover:brightness-95"
          >
            <Icon name="phone" className="h-5 w-5" />
            Call {site.phone}
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

        <ul className="mt-14 divide-y sm:mt-20 divide-off/10 border-y border-off/10">
          {washServices.map((w, i) => (
            <Reveal
              as="li"
              key={w.name}
              delay={i * 80}
              className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-off/[0.03]"
            >
              <div>
                <h3 className="text-xl font-semibold">{w.name}</h3>
                <p className="mt-1 text-off/60">{w.detail}</p>
              </div>
              <span className="shrink-0 text-lg font-semibold text-lime transition-transform group-hover:translate-x-[-4px]">
                {w.price ?? "Get a quote"}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
