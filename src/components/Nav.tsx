"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6">
      <div
        className={`nav-glass relative mx-auto flex max-w-4xl items-center justify-between rounded-full py-1.5 pl-4 pr-1.5 transition-all sm:pl-5 duration-500 ${
          scrolled ? "nav-glass-scrolled" : ""
        }`}
      >
        <Link href="/#top" aria-label="MatePro home" className="relative flex h-11 items-center">
          <Image
            src="/brand/matepro-horizontal-on-dark.svg"
            alt="MatePro"
            width={126}
            height={36}
            priority
            className="w-[112px] sm:w-[126px]"
          />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 text-sm font-medium sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-off transition hover:bg-off/10 hover:text-off"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href="/#book"
          className="inline-flex h-11 items-center rounded-full bg-lime px-4 text-sm font-semibold text-night transition hover:brightness-95 sm:px-5"
        >
          Book a wash
        </Link>
      </div>
    </header>
  );
}
