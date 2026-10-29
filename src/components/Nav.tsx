"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { nav } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6">
      <div
        className={`nav-glass relative mx-auto flex max-w-5xl items-center justify-between rounded-full py-1.5 pl-4 pr-1.5 transition-all sm:pl-5 duration-500 ${
          scrolled || open ? "nav-glass-scrolled" : ""
        }`}
      >
        <Link
          href="/mobile-wash"
          aria-label="MatePro home"
          onClick={(e) => {
            setOpen(false);
            // Already home: just glide back to the top
            if (pathname === "/mobile-wash") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="relative flex h-11 items-center"
        >
          <Image
            src="/brand/matepro-horizontal-on-dark.svg"
            alt="MatePro"
            width={126}
            height={36}
            priority
            className="w-[112px] sm:w-[126px]"
          />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 text-sm font-medium lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-4 py-2 text-off transition hover:bg-off/10 hover:text-off"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href="/mobile-wash#book"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 items-center whitespace-nowrap rounded-full bg-lime px-4 text-sm font-semibold text-night transition hover:brightness-95 sm:px-5"
          >
            Book<span className="max-[379px]:hidden">&nbsp;a wash</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-off/10 text-off transition hover:bg-off/15 lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <nav
        id="site-menu"
        className={`mx-auto mt-2 max-w-5xl overflow-hidden rounded-[28px] border border-off/10 bg-night p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition duration-300 lg:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="flex min-h-12 items-center justify-between rounded-2xl px-4 text-lg font-semibold text-off transition hover:bg-off/10"
          >
            {item.label}
            <Icon name="arrow" className="h-5 w-5 text-lime" />
          </a>
        ))}
      </nav>
    </header>
  );
}
