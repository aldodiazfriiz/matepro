"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export default function Waitlist() {
  const [status, setStatus] = useState<Status>("idle");

  // A submit before the page's JS loads posts natively; the API redirects back to #waitlist-done or #waitlist-error
  useEffect(() => {
    const result = location.hash;
    if (result !== "#waitlist-done" && result !== "#waitlist-error") return;
    const timer = setTimeout(() => {
      setStatus(result === "#waitlist-done" ? "done" : "error");
      history.replaceState(history.state, "", location.pathname + location.search);
    });
    return () => clearTimeout(timer);
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    }).catch(() => null);
    setStatus(res?.ok ? "done" : "error");
    if (res?.ok) form.reset();
  }

  if (status === "done") {
    return (
      <p className="rounded-3xl border border-lime/40 bg-lime/[0.06] p-6 text-lg font-semibold">
        You&rsquo;re on the list. We&rsquo;ll email you the day it&rsquo;s out.
      </p>
    );
  }

  return (
    <form method="post" action="/api/waitlist" onSubmit={submit} className="relative">
      <span id="waitlist-done" className="absolute -top-32" />
      <span id="waitlist-error" className="absolute -top-32" />
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          autoComplete="email"
          className="h-14 flex-1 rounded-full border border-off/15 bg-charcoal px-6 text-base text-off placeholder:text-off/40 focus:border-lime focus:outline-none"
        />
        <input
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="h-14 rounded-full bg-lime px-7 text-base font-semibold text-night transition hover:brightness-95 disabled:opacity-60"
        >
          {status === "sending" ? "One sec..." : "Tell me when it's out"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-sm text-off/70">
          That didn&rsquo;t go through. Try again in a minute.
        </p>
      )}
    </form>
  );
}
