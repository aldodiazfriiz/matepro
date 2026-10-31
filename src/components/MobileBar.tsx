"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { site } from "@/lib/content";

// Phones only: call and book buttons that stay in reach once the hero is gone, hidden while the booking form is on screen
export default function MobileBar() {
  const [pastHero, setPastHero] = useState(false);
  const [atBook, setAtBook] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const book = document.getElementById("book");
    if (!hero || !book) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) setPastHero(!e.isIntersecting);
        else setAtBook(e.isIntersecting);
      }
    });
    io.observe(hero);
    io.observe(book);
    return () => io.disconnect();
  }, []);

  const shown = pastHero && !atBook;

  return (
    <div
      className={`dark-zone nav-glass fixed inset-x-4 bottom-4 z-40 flex gap-2 rounded-full p-1.5 transition duration-300 sm:hidden ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <a
        href={site.phoneHref}
        aria-label={`Call ${site.phone}`}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-off/10 text-off"
      >
        <Icon name="phone" className="h-5 w-5" />
      </a>
      <a
        href="#prices"
        className="flex h-12 flex-1 items-center justify-center rounded-full bg-lime font-semibold text-night"
      >
        Book a wash
      </a>
    </div>
  );
}
