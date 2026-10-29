"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { franchise, site } from "@/lib/content";

type Status = "idle" | "sending" | "done" | "error";

const field =
  "h-14 w-full rounded-full border border-night/20 bg-off px-6 text-base text-night placeholder:text-night/45 focus:border-night focus:outline-none";

export default function FranchiseForm() {
  const [status, setStatus] = useState<Status>("idle");

  // A submit before the page's JS loads posts natively; the API redirects back to #interest-sent or #interest-error
  useEffect(() => {
    const result = location.hash;
    if (result !== "#interest-sent" && result !== "#interest-error") return;
    const timer = setTimeout(() => {
      setStatus(result === "#interest-sent" ? "done" : "error");
      history.replaceState(history.state, "", location.pathname + location.search);
    });
    return () => clearTimeout(timer);
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const res = await fetch("/api/franchise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    }).catch(() => null);
    setStatus(res?.ok ? "done" : "error");
    if (res?.ok) form.reset();
  }

  return (
    <section id="interest" className="relative scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-32">
      <span id="interest-sent" className="absolute -top-24" />
      <span id="interest-error" className="absolute -top-24" />
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-lime px-5 py-12 text-night sm:rounded-[40px] sm:px-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">{franchise.form.title}</h2>
            <p className="mt-4 max-w-md text-lg text-night">{franchise.form.text}</p>
            <a href={site.phoneHref} className="mt-6 inline-flex min-h-11 items-center gap-2 text-2xl font-bold hover:underline">
              <Icon name="phone" className="h-6 w-6" />
              {site.phone}
            </a>
          </div>

          {status === "done" ? (
            <p className="rounded-3xl border border-night/20 bg-night/[0.06] p-6 text-xl font-semibold">
              Thanks, we&rsquo;ve got your details. We&rsquo;ll call you for a chat soon.
            </p>
          ) : (
            <form method="post" action="/api/franchise" onSubmit={submit} className="flex flex-col gap-3">
              <input name="name" required placeholder="Your name" autoComplete="name" className={field} />
              <input type="tel" name="phone" required placeholder="Phone" autoComplete="tel" className={field} />
              <input type="email" name="email" required placeholder="Email" autoComplete="email" className={field} />
              <input
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />
              <input name="suburb" required placeholder="Suburb you'd work in" autoComplete="address-level2" className={field} />
              <textarea
                name="details"
                rows={3}
                placeholder="Tell us a bit about you. Do you have a ute or van?"
                className="rounded-3xl border border-night/20 bg-off px-6 py-4 text-base text-night placeholder:text-night/45 focus:border-night focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="h-14 rounded-full bg-night px-6 text-base font-semibold text-off transition hover:bg-black disabled:opacity-60"
              >
                {status === "sending" ? "One sec..." : "Register my interest"}
              </button>
              {status === "error" && (
                <p className="text-sm font-medium">
                  That didn&rsquo;t go through. Call us on {site.phone} instead.
                </p>
              )}
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
