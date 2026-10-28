"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/content";

export default function Nav() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // clientWidth/Height is the padding box, which is what the absolutely positioned SVG fills
    const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    const ro = new ResizeObserver(measure);
    measure();
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const stroke = 1.5;

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6">
      <div
        ref={ref}
        className={`nav-glass relative mx-auto flex max-w-4xl items-center justify-between rounded-full py-1.5 pl-4 pr-1.5 transition-all sm:pl-5 duration-500 ${
          scrolled ? "nav-glass-scrolled" : ""
        }`}
      >
        {size.w > 0 && (
          <svg
            className={`pointer-events-none absolute inset-0 h-full w-full overflow-visible transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          >
            <rect
              x={stroke / 2}
              y={stroke / 2}
              width={size.w - stroke}
              height={size.h - stroke}
              rx={(size.h - stroke) / 2}
              pathLength={1}
              fill="none"
              stroke="var(--color-lime)"
              strokeWidth={stroke}
              strokeDasharray="1 1"
              strokeDashoffset={1 - progress}
              strokeLinecap="round"
              className="nav-line"
            />
          </svg>
        )}

        <a
          href="#top"
          aria-label="MatePro home"
          className="relative flex h-11 items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/matepro-horizontal-on-dark.svg"
            alt="MatePro"
            width={126}
            height={36}
            priority
            className="w-[112px] sm:w-[126px]"
          />
        </a>

        <nav className="relative hidden items-center gap-1 text-sm font-medium md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-off/70 transition hover:bg-off/10 hover:text-off"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative flex items-center gap-1">
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 items-center rounded-full bg-lime px-4 text-sm font-semibold text-night transition hover:brightness-95 sm:px-5"
          >
            Get the app
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full text-off transition hover:bg-off/10 md:hidden"
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`mx-auto mt-2 max-w-4xl overflow-hidden rounded-3xl border border-off/10 bg-night/95 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? "max-h-80 opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="p-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-14 items-center rounded-2xl px-4 text-lg font-semibold text-off transition hover:bg-off/10"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
