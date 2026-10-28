"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { quoteTypes, site } from "@/lib/content";

type Status = "idle" | "sending" | "done" | "error";

const field =
  "h-14 w-full rounded-full border border-night/15 bg-off px-6 text-base text-night placeholder:text-night/40 focus:border-night focus:outline-none";

export default function Quote() {
  const [status, setStatus] = useState<Status>("idle");

  // A submit before the page's JS loads posts the form natively; the API redirects back to #quote-sent or #quote-error
  useEffect(() => {
    const result = location.hash;
    if (result !== "#quote-sent" && result !== "#quote-error") return;
    const timer = setTimeout(() => {
      setStatus(result === "#quote-sent" ? "done" : "error");
      history.replaceState(history.state, "", location.pathname + location.search);
    });
    return () => clearTimeout(timer);
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => null);
    if (res?.ok) {
      setStatus("done");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      {/* Scroll targets for the redirect after a native form post */}
      <span id="quote-sent" className="absolute top-0" />
      <span id="quote-error" className="absolute top-0" />
      <Reveal>
        <div className="rounded-3xl bg-lime px-5 py-10 text-night sm:px-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                Get a free quote.
              </h2>
              <p className="mt-4 max-w-md text-lg text-night/70">
                Tell us about your trucks and where they park. We&rsquo;ll get
                back to you the same day, usually within the hour.
              </p>
              <a
                href={site.phoneHref}
                className="mt-6 inline-flex items-center gap-2 text-2xl font-bold hover:underline"
              >
                <Icon name="phone" className="h-6 w-6" />
                {site.phone}
              </a>
            </div>

            {status === "done" ? (
              <p className="text-2xl font-semibold">
                Thanks, we&rsquo;ve got it. We&rsquo;ll be in touch shortly.
              </p>
            ) : (
              <form method="post" action="/api/quote" onSubmit={submit} className="flex flex-col gap-3">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  autoComplete="name"
                  className={field}
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone"
                  autoComplete="tel"
                  className={field}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  autoComplete="email"
                  className={field}
                />
                <input
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />
                <input
                  name="suburb"
                  required
                  placeholder="Depot suburb"
                  autoComplete="address-level2"
                  className={field}
                />
                <div className="relative">
                  <select
                    name="service"
                    defaultValue={quoteTypes[0]}
                    className={`${field} appearance-none pr-12`}
                  >
                    {quoteTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                  <svg
                    viewBox="0 0 20 20"
                    className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-night/60"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 7.5l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <textarea
                  name="details"
                  rows={3}
                  placeholder="How many trucks, and how often? Anything we should know?"
                  className="rounded-3xl border border-night/15 bg-off px-6 py-4 text-base text-night placeholder:text-night/40 focus:border-night focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="h-14 rounded-full bg-night px-6 text-base font-semibold text-off transition hover:bg-charcoal disabled:opacity-60"
                >
                  {status === "sending" ? "One sec..." : "Send my quote request"}
                </button>
                {status === "error" && (
                  <p className="text-sm font-medium">
                    That didn&rsquo;t go through. Call us on {site.phone} instead.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
