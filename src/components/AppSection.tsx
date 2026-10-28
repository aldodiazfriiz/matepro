import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import StoreButtons from "./StoreButtons";
import { freeFeatures } from "@/lib/content";

export default function AppSection() {
  return (
    <section id="app" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="max-w-2xl">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Free for every driver. No catch.
        </h2>
        <p className="mt-5 text-lg text-off/70">
          The stuff you need every day on the road, big enough to use with
          gloves on and in bad light.
        </p>
        <StoreButtons className="mt-8" />
      </Reveal>

      <Reveal delay={120} className="mt-12 sm:mt-16">
        <div className="float-card">
          <Image
            src="/photos/app-prestart.jpg"
            alt="MatePro app: scan a wheel for the pre-start, then see every check marked OK"
            width={2048}
            height={1360}
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="app-shot -mx-5 h-auto w-[calc(100%+2.5rem)] max-w-none sm:mx-auto sm:w-full sm:max-w-5xl"
          />
        </div>
      </Reveal>

      <ul className="mt-12 grid sm:mt-16 gap-px overflow-hidden rounded-3xl bg-off/10 sm:grid-cols-2 lg:grid-cols-3">
        {freeFeatures.map((f, i) => (
          <Reveal
            as="li"
            key={f.title}
            delay={(i % 3) * 90}
            className="bg-night"
          >
            <Spotlight className="group p-8">
              <Icon
                name={f.icon}
                className="relative h-7 w-7 text-lime transition-transform duration-300 group-hover:-translate-y-1"
              />
              <h3 className="relative mt-6 text-lg font-semibold">{f.title}</h3>
              <p className="relative mt-2 text-off/60">{f.text}</p>
            </Spotlight>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
