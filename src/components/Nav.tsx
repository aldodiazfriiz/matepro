"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const home = usePathname() === "/";

  // On the home page these scroll in place; from other pages they go home first
  const washHref = home ? "#top" : nav.wash.href;
  const quoteHref = home ? "#quote" : "/#quote";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
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

  const link = (active: boolean) =>
    `rounded-full px-4 py-2 transition hover:bg-off/10 hover:text-off ${active ? "text-off" : "text-off/70"}`;

  const links = [
    { ...nav.app, href: nav.app.href, active: !home },
    { ...nav.wash, href: washHref, active: home },
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6">
      <div
        className={`nav-glass relative mx-auto flex max-w-4xl items-center justify-between rounded-full py-1.5 pl-4 pr-1.5 transition-all sm:pl-5 duration-500 ${
          scrolled ? "nav-glass-scrolled" : ""
        }`}
      >
        <div className="relative flex items-center gap-2 text-sm font-medium">
          <a
            href={home ? "#top" : "/"}
            aria-label="MatePro home"
            className="flex h-11 items-center"
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
          <a href={nav.app.href} className={`hidden md:block ${link(!home)}`}>
            {nav.app.label}
          </a>
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 text-sm font-medium md:block">
          <a href={washHref} className={link(home)}>
            {nav.wash.label}
          </a>
        </nav>

        <div className="relative flex items-center gap-1">
          <a
            href={quoteHref}
            onClick={() => setOpen(false)}
            className="inline-flex h-11 items-center rounded-full bg-lime px-4 text-sm font-semibold text-night transition hover:brightness-95 sm:px-5"
          >
            Free quote
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
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex h-14 items-center rounded-2xl px-4 text-lg font-semibold transition hover:bg-off/10 ${item.active ? "text-lime" : "text-off"}`}
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
