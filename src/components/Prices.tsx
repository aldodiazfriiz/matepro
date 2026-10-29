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

  return (
    <section id="prices" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Prices</h2>
        <p className="mt-4 text-lg text-off">Pick your car size. Every price includes GST.</p>
      </Reveal>

      <Reveal className="mt-10 flex justify-center">
        <div
          role="radiogroup"
          aria-label="Car size"
          className="grid w-full max-w-2xl grid-cols-3 gap-1 rounded-3xl border border-off/15 p-1 text-sm font-semibold sm:rounded-full"
        >
          {sizes.map((s) => (
            <button
              key={s.id}
              type="button"
              role="radio"
              aria-checked={size === s.id}
              onClick={() => setSize(s.id)}
              className={`min-h-11 rounded-[20px] px-3 py-2.5 leading-tight transition-colors sm:rounded-full ${
                size === s.id ? "bg-lime text-night" : "text-off hover:bg-off/10"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 80}>
            <div
              className={`flex h-full flex-col rounded-3xl border p-7 ${
                p.popular ? "border-lime/60 bg-charcoal" : "border-off/10 bg-charcoal/60"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                {p.popular && (
                  <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-night">Most booked</span>
                )}
              </div>
              <p className="mt-2 text-off">{p.text}</p>
              <p className="mt-6 text-4xl font-extrabold text-lime">
                <Price value={p.prices[size]} />
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-off/10 pt-6">
                {p.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-off">
                    <Icon name="tick" className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-8 inline-flex h-12 items-center justify-center rounded-full font-semibold transition ${
                  p.popular ? "bg-lime text-night hover:brightness-95" : "bg-off/10 text-off hover:bg-off/15"
                }`}
              >
                Book {p.name}
              </a>
            </div>
          </Reveal>
        ))}
      </ul>

      <ul className="mx-auto mt-8 flex max-w-3xl flex-col gap-1 text-center text-sm text-off">
        {priceNotes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </section>
  );
}
