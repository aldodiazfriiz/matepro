"use client";

import { useEffect } from "react";

// Section links (href="#wash" etc.) scroll to their section without putting the hash in the URL.
export default function SectionLinks() {
  useEffect(() => {
    // Quote handles its own #quote-sent / #quote-error and clears it
    if (location.hash && !location.hash.startsWith("#quote-")) {
      // Keep Next's history state, or the router restores the old URL
      history.replaceState(
        history.state,
        "",
        location.pathname + location.search,
      );
    }

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
      const link = (e.target as Element).closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href")!.slice(1);
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
