"use client";

import { useEffect, useRef, useState } from "react";
import { washServices } from "@/lib/content";

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

export default function WashPrices() {
  const [fleet, setFleet] = useState(false);

  return (
    <div id="prices" className="scroll-mt-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pay per wash. No lock-in.
          </h3>
          <p className="mt-2 text-off/60">Per truck, GST included.</p>
        </div>
        <div
          role="radiogroup"
          aria-label="Trucks per visit"
          className="relative grid grid-cols-2 rounded-full border border-off/15 p-1 text-sm font-semibold"
        >
          <span
            aria-hidden="true"
            className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-lime transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${fleet ? "translate-x-full" : ""}`}
          />
          {[false, true].map((f) => (
            <button
              key={String(f)}
              type="button"
              role="radio"
              aria-checked={fleet === f}
              onClick={() => setFleet(f)}
              className={`relative rounded-full px-5 py-2.5 transition-colors ${fleet === f ? "text-night" : "text-off/70 hover:text-off"}`}
            >
              {f ? "3+ trucks" : "1–2 trucks"}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-8 divide-y divide-off/10 border-y border-off/10">
        {washServices.map((w) => (
          <li
            key={w.name}
            className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-off/[0.03]"
          >
            <div>
              <h4 className="text-xl font-semibold">{w.name}</h4>
              <p className="mt-1 text-off/60">{w.detail}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3 text-right">
              <span
                className={`rounded-full bg-lime/15 px-2.5 py-1 text-xs font-semibold text-lime transition duration-300 ${fleet ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
              >
                Save ${w.price - w.fleetPrice}
              </span>
              <span className="text-2xl font-bold text-lime">
                <Price value={fleet ? w.fleetPrice : w.price} />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
