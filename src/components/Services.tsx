import Icon from "./Icon";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import { promises, services, site } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="max-w-2xl">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Heavy-duty clean. We come to you.
        </h2>
        <p className="mt-5 text-lg text-off/70">
          Commercial pressure washing for trucks, buses, machinery and
          concrete, {site.area}. Fully mobile, so nothing leaves your yard.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-off/10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal as="li" key={s.title} delay={(i % 4) * 90} className="bg-night">
            <Spotlight className="group flex h-full flex-col p-7">
              <Icon
                name={s.icon}
                className="relative h-7 w-7 text-lime transition-transform duration-300 group-hover:-translate-y-1"
              />
              <h3 className="relative mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="relative mt-2 flex-1 text-off/60">{s.text}</p>
              <p className="relative mt-6 text-sm text-off/50">
                {s.from ? (
                  <>
                    From <span className="text-xl font-bold text-lime">${s.from}</span>
                    {s.unit && ` ${s.unit}`}
                  </>
                ) : (
                  <span className="text-xl font-bold text-lime">Free quote</span>
                )}
              </p>
            </Spotlight>
          </Reveal>
        ))}
      </ul>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {promises.map((item, i) => (
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
      <p className="mt-4 text-sm text-off/50">
        Prices include GST. Final price confirmed after a quick look or a few photos.
      </p>
    </section>
  );
}
