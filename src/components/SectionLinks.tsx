"use client";

import { useEffect } from "react";

// Section links (href="#book" or "/#book" on the home page) scroll to their section without putting the hash in the URL.
export default function SectionLinks() {
  useEffect(() => {
    // The forms handle their own result hashes (#book-sent, #interest-error etc.) and clear them
    if (location.hash && !/^#(book|interest|notify|opening)-/.test(location.hash)) {
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
      const link = (e.target as Element).closest?.('a[href^="#"], a[href^="/#"]');
      if (!link) return;
      const href = link.getAttribute("href")!;
      // "/#book" from another page is a normal link back to the home page
      if (href.startsWith("/") && location.pathname !== "/") return;
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
