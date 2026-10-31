"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { extras, packages, priceNotes, site, sizes } from "@/lib/content";

export default function Prices() {
  const [active, setActive] = useState(0);

  // On phones the cards swipe sideways; track which one is in view for the dots
  function onScroll(e: React.UIEvent<HTMLUListElement>) {
    const el = e.currentTarget;
    const card = el.firstElementChild as HTMLElement | null;
    if (card) setActive(Math.round(el.scrollLeft / (card.offsetWidth + 12)));
  }

  return (
    <section id="prices" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Our services</h2>
        <p className="mt-4 text-lg text-off">Pick a package. The price you see is the price you pay.</p>
      </Reveal>

      <ul
        onScroll={onScroll}
        className="-mx-5 mt-10 flex items-start snap-x md:items-stretch snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-2 [scrollbar-width:none] sm:mt-14 md:mx-auto md:grid md:max-w-6xl md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {packages.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 80} className="w-[86%] shrink-0 snap-start sm:w-[46%] md:w-auto">
            <div
              className={`relative flex h-full flex-col rounded-[28px] border bg-charcoal/60 p-6 sm:p-7 ${
                p.popular ? "border-lime" : "border-off/10"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-night">
                  Most booked
                </span>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold tracking-tight">{p.name}</h3>
                <p className="mt-1.5 text-off md:min-h-12">{p.text}</p>
                <p className="mt-4 text-sm font-semibold">From</p>
                <p className="text-6xl font-extrabold tracking-tight text-lime">${p.prices.small}</p>
              </div>

              <div className="mt-6 space-y-5 border-t border-off/10 pt-6 text-sm">
                {p.includes.map((group) => (
                  <div key={group.title}>
                    <h4 className="font-semibold text-lime">{group.title}</h4>
                    <ul className="mt-2.5 space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-off">
                          <Icon name="tick" className="mt-px h-4 w-4 shrink-0 text-lime" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <div className="rounded-2xl bg-night/70 p-4 text-sm">
                  <h4 className="font-semibold text-lime">Price</h4>
                  <ul className="mt-2 divide-y divide-off/10">
                    {sizes.map((s) => (
                      <li key={s.id} className="flex items-baseline justify-between gap-3 py-2">
                        <span className="text-off">{s.label}</span>
                        <span className="font-bold">${p.prices[s.id]}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 className="mt-3 font-semibold text-lime">{extras.title}</h4>
                  <ul className="mt-2 divide-y divide-off/10">
                    {extras.items.map((x) => (
                      <li key={x.name} className="flex items-baseline justify-between gap-3 py-2">
                        <span className="text-off">{x.name}</span>
                        <span className="shrink-0 font-bold">+ {x.price.replace(/^From /, "from ")}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`${site.bookingUrl}/${p.squareId}`}
                  className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-lime font-semibold text-night transition hover:brightness-110"
                >
                  Book {p.name}
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
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
