"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import Phone from "@/components/Phone";
import Reveal from "@/components/Reveal";
import { features } from "@/lib/content";

type Id = (typeof features)[number]["id"];

export default function Features() {
  const [active, setActive] = useState<Id>(features[0].id);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const list = useRef<HTMLUListElement>(null);

  // The phone follows the card in the middle of the screen on wide screens, and the swiped-to card on phones
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.id as Id);
        }
      },
      wide ? { rootMargin: "-45% 0px -45% 0px" } : { root: list.current, threshold: 0.6 },
    );
    cards.current.forEach((c) => c && io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section id="features" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">What&rsquo;s in MatePro?</h2>
        <p className="mt-4 text-lg text-off">Everything you reach for on a run, in one app.</p>
      </Reveal>

      <div className="mt-14 grid items-start gap-10 sm:mt-20 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-[230px] sm:max-w-[300px] lg:sticky lg:top-28 lg:max-w-[340px]">
          <div className="glow-lime" aria-hidden="true" />
          <Phone screen={active} />
        </div>

        <ul
          ref={list}
          className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:block lg:space-y-4 lg:overflow-visible lg:px-0"
        >
          {features.map((f, i) => {
            const on = f.id === active;
            return (
              <li key={f.id} className="w-[82%] shrink-0 snap-center sm:w-[60%] lg:w-auto">
                <button
                  type="button"
                  ref={(el) => {
                    cards.current[i] = el;
                  }}
                  data-id={f.id}
                  onClick={() => setActive(f.id)}
                  aria-pressed={on}
                  className={`h-full w-full rounded-3xl border p-6 text-left transition duration-300 sm:p-8 lg:min-h-[220px] ${
                    on
                      ? "border-lime/40 bg-charcoal shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                      : "border-off/10 bg-charcoal/40 hover:bg-charcoal/70"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl transition ${
                      on ? "bg-lime text-night" : "bg-off/10 text-lime"
                    }`}
                  >
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-off">{f.text}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
