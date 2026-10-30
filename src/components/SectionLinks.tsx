"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Forms handle their own result hashes (#interest-sent, #notify-error etc.) and clear them
const formResult = /^#(interest|notify|opening|launch)-/;

// Section links (href="#prices", or "/mobile-wash#prices" while on /mobile-wash) scroll to their section,
// and a hash that arrives with a page load or navigation is scrolled to and then dropped from the URL.
export default function SectionLinks() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = location.hash;
    if (!hash || formResult.test(hash)) return;
    const go = () => document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start", behavior: "instant" });
    // Next resets the scroll after a client-side page change, so scroll again once it has
    const timers = [0, 150, 400].map((ms) => setTimeout(go, ms));
    const clear = setTimeout(() => {
      // Keep Next's history state, or the router restores the old URL
      history.replaceState(history.state, "", location.pathname + location.search);
    }, 450);
    return () => [...timers, clear].forEach(clearTimeout);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;
      const link = (e.target as Element).closest?.('a[href*="#"]');
      if (!link) return;
      const href = link.getAttribute("href")!;
      const path = href.slice(0, href.indexOf("#"));
      // "/mobile-wash#prices" from another page is a normal link to that page
      if (path && path !== location.pathname) return;
      const id = href.slice(href.indexOf("#") + 1);
      e.preventDefault();
      if (!id || id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
