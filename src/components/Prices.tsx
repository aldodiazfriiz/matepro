"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { packages, priceNotes, sizes, type Size } from "@/lib/content";

function Price({ value }: { value: number }) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);

  useEffect(() => {
    const start = from.current;
    if (start === value) return;
    const ms = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 500;
    let frame = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - t0) / ms, 1);
      const v = Math.round(start + (value - start) * (1 - Math.pow(1 - t, 3)));
      from.current = v;
      setShown(v);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <span className="tabular-nums">${shown}</span>;
}

export default function Prices() {
  const [size, setSize] = useState<Size>("small");
  const [active, setActive] = useState(0);

  // On phones the cards swipe sideways; track which one is in view for the dots
  function onScroll(e: React.UIEvent<HTMLUListElement>) {
    const el = e.currentTarget;
    const card = el.firstElementChild as HTMLElement | null;
    if (card) setActive(Math.round(el.scrollLeft / (card.offsetWidth + 12)));
  }

  return (
    <section id="prices" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Prices</h2>
        <p className="mt-4 text-lg text-off">Pick your car size. Every price includes GST.</p>
      </Reveal>

      <Reveal className="mt-10 flex justify-center">
        <div
          role="radiogroup"
          aria-label="Car size"
          className="grid w-full max-w-2xl grid-cols-3 gap-1 rounded-full border border-off/15 p-1 text-sm font-semibold"
        >
          {sizes.map((s) => (
            <button
              key={s.id}
              type="button"
              role="radio"
              aria-checked={size === s.id}
              onClick={() => setSize(s.id)}
              className={`min-h-11 rounded-full px-2 py-2.5 leading-tight transition-colors ${
                size === s.id ? "bg-lime text-night" : "text-off hover:bg-off/10"
              }`}
            >
              <span className="sm:hidden">{s.short}</span>
              <span className="hidden sm:inline">{s.label}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <ul
        onScroll={onScroll}
        className="-mx-5 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
      >
        {packages.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 80} className="w-[84%] shrink-0 snap-start sm:w-auto">
            <div
              className={`flex h-full flex-col rounded-[28px] p-7 ${
                p.popular ? "bg-lime text-night" : "border border-off/10 bg-charcoal/60"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                {p.popular && (
                  <span className="rounded-full bg-night px-3 py-1 text-xs font-semibold text-lime">Most booked</span>
                )}
              </div>
              <p className={`mt-2 ${p.popular ? "text-night" : "text-off"}`}>{p.text}</p>
              <p className={`mt-6 text-5xl font-extrabold tracking-tight ${p.popular ? "text-night" : "text-lime"}`}>
                <Price value={p.prices[size]} />
              </p>
              <ul className={`mb-8 mt-6 space-y-2.5 border-t pt-6 ${p.popular ? "border-night/15" : "border-off/10"}`}>
                {p.includes.map((item) => (
                  <li key={item} className={`flex gap-2.5 ${p.popular ? "text-night" : "text-off"}`}>
                    <Icon name="tick" className={`mt-0.5 h-5 w-5 shrink-0 ${p.popular ? "text-night" : "text-lime"}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-auto inline-flex h-12 items-center justify-center rounded-full font-semibold transition ${
                  p.popular ? "bg-night text-off hover:bg-black" : "bg-off/10 text-off hover:bg-off/15"
                }`}
              >
                Book {p.name}
              </a>
            </div>
          </Reveal>
        ))}
      </ul>

      <div className="mt-5 flex justify-center gap-2 sm:hidden" aria-hidden="true">
        {packages.map((p, i) => (
          <span
            key={p.name}
            className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-lime" : "w-2 bg-off/25"}`}
          />
        ))}
      </div>

      <ul className="mx-auto mt-8 flex max-w-3xl flex-col gap-1 text-center text-sm text-off">
        {priceNotes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </section>
  );
}
