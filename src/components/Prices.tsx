"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { extras, packages, priceNotes, site, sizes, type Size } from "@/lib/content";

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
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Services</h2>
        <p className="mt-4 text-lg text-off">Pick your car size. The price you see is the price you pay.</p>
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
        className="-mx-5 mt-8 flex items-start snap-x md:items-stretch snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-2 [scrollbar-width:none] sm:mt-10 md:mx-auto md:grid md:max-w-5xl md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {packages.map((p, i) => (
          // The longer Full Detail card spans two grid rows so the other cards keep their own height
          <Reveal
            as="li"
            key={p.name}
            delay={i * 80}
            className={`w-[84%] shrink-0 snap-start sm:w-[46%] md:w-auto ${p.popular ? "md:row-span-2" : ""}`}
          >
            <div
              className={`group relative flex h-full flex-col overflow-hidden rounded-[32px] border bg-gradient-to-b from-charcoal to-night p-6 transition duration-300 hover:-translate-y-1 sm:p-7 ${
                p.popular
                  ? "border-lime/60 shadow-[0_0_70px_-20px_rgba(203,231,51,0.55)]"
                  : "border-off/10 shadow-[inset_0_1px_0_rgba(250,250,250,0.06)] hover:border-lime/30"
              }`}
            >
              {p.popular && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-lime/20 blur-3xl"
                />
              )}
              <div className="relative flex h-7 items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p.popular && (
                  <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-night">Most booked</span>
                )}
              </div>
              <h3 className="relative mt-3 text-2xl font-bold tracking-tight">{p.name}</h3>
              <p className="relative mt-1.5 text-off md:min-h-12">{p.text}</p>

              <div className="relative mt-6 rounded-3xl border border-off/10 bg-night/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-off">From</p>
                <p className="mt-1 text-6xl font-extrabold tracking-tight text-lime">
                  <Price value={p.prices[size]} />
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span className="rounded-full border border-off/15 px-3 py-1 text-off">
                    {sizes.find((s) => s.id === size)?.label}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-lime px-3 py-1 text-night">
                    <Icon name="tick" className="h-3.5 w-3.5" />
                    No hidden costs
                  </span>
                </div>
              </div>

              <div className="relative mt-6 space-y-5 text-sm">
                {p.includes.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">{group.title}</h4>
                    <ul className="mt-3 space-y-2.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-off">
                          <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                            <Icon name="tick" className="h-3 w-3" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="relative mb-6 mt-6 border-t border-dashed border-off/15 pt-5 text-sm">
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">{extras.title}</h4>
                  <span className="text-xs text-off">{extras.text}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {extras.items.map((x) => (
                    <li key={x.name} className="rounded-2xl border border-off/10 bg-off/[0.03] px-4 py-3">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-semibold">{x.name}</span>
                        <span className="shrink-0 font-bold text-lime">+ {x.price.replace(/^From /, "from ")}</span>
                      </div>
                      <p className="mt-0.5 text-xs text-off">{x.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`${site.bookingUrl}/${p.squareId}`}
                className="relative mt-auto inline-flex h-13 items-center justify-center gap-2 rounded-full bg-lime font-semibold text-night transition hover:brightness-110"
              >
                Book {p.name}
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        ))}
      </ul>

      <div className="mt-5 flex justify-center gap-2 md:hidden" aria-hidden="true">
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
