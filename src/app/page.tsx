import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";
import Waitlist from "@/components/Waitlist";
import { app } from "@/lib/content";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section id="top" className="mx-auto max-w-7xl px-5 pt-36 sm:px-8 sm:pt-44">
          <div className="max-w-2xl">
            <span className="rise rise-2 inline-block rounded-full bg-lime px-4 py-1.5 text-sm font-semibold text-night">
              Coming soon
            </span>
            <h1 className="rise rise-2 mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
              {app.title}
            </h1>
            <p className="rise rise-2 mt-6 max-w-xl text-lg text-off/75 sm:text-xl">
              {app.text}
            </p>
            <div id="waitlist" className="rise rise-3 mt-10 max-w-xl scroll-mt-32">
              <Waitlist />
            </div>
          </div>

          <Reveal delay={120} className="mt-16 sm:mt-24">
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
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Free for every driver. No catch.
            </h2>
            <p className="mt-5 text-lg text-off/70">
              The stuff you need every day on the road, big enough to use with
              gloves on and in bad light.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-off/10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {app.features.map((f, i) => (
              <Reveal
                as="li"
                key={f.title}
                delay={(i % 3) * 90}
                // An odd last card fills the rest of its row
                className={`bg-night ${i === app.features.length - 1 && app.features.length % 2 ? "sm:col-span-2" : ""} ${i === app.features.length - 1 && app.features.length % 3 === 2 ? "lg:col-span-2" : "lg:col-span-1"}`}
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
      </main>
      <Footer />
    </>
  );
}
