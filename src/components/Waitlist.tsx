"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "done" | "error";

export default function Waitlist() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setStatus("done");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section
      id="waitlist"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <div className="rounded-3xl bg-lime px-5 py-10 text-night sm:px-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                Be first in the cab.
              </h2>
              <p className="mt-4 max-w-md text-lg text-night/70">
                Leave your email and we&rsquo;ll let you know the day the app
                hits the App Store and Google Play. No spam, no junk.
              </p>
            </div>

            {status === "done" ? (
              <p className="text-2xl font-semibold">
                You&rsquo;re on the list. See you on the road.
              </p>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  autoComplete="email"
                  className="h-14 rounded-full border border-night/15 bg-off px-6 text-base text-night placeholder:text-night/40 focus:border-night focus:outline-none"
                />
                <div className="relative">
                  <select
                    name="role"
                    defaultValue="driver"
                    className="h-14 w-full appearance-none rounded-full border border-night/15 bg-off px-6 pr-12 text-base text-night focus:border-night focus:outline-none"
                  >
                    <option value="driver">I drive for someone</option>
                    <option value="owner-driver">
                      I&rsquo;m an owner-driver
                    </option>
                    <option value="fleet">I run a fleet</option>
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
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="h-14 rounded-full bg-night px-6 text-base font-semibold text-off transition hover:bg-charcoal disabled:opacity-60"
                >
                  {status === "sending" ? "One sec..." : "Get the app"}
                </button>
                {status === "error" && (
                  <p className="text-sm font-medium">
                    That didn&rsquo;t go through. Try again in a minute.
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
