"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

type Status = "idle" | "sending" | "done" | "error";

// Email sign-up on the lime band. Results come back as #<id>-sent / #<id>-error after a no-JS post.
export default function Notify({
  id,
  action,
  title,
  text,
}: {
  id: string;
  action: string;
  title: string;
  text: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const result = location.hash;
    if (result !== `#${id}-sent` && result !== `#${id}-error`) return;
    const timer = setTimeout(() => {
      setStatus(result === `#${id}-sent` ? "done" : "error");
      history.replaceState(history.state, "", location.pathname + location.search);
    });
    return () => clearTimeout(timer);
  }, [id]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const res = await fetch(action, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    }).catch(() => null);
    setStatus(res?.ok ? "done" : "error");
    if (res?.ok) form.reset();
  }

  return (
    <section id={id} className="relative scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-32">
      <span id={`${id}-sent`} className="absolute -top-24" />
      <span id={`${id}-error`} className="absolute -top-24" />
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-lime px-5 py-12 text-night sm:rounded-[40px] sm:px-12 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">{title}</h2>
          <p className="mt-4 text-lg text-night">{text}</p>
          {status === "done" ? (
            <p className="mx-auto mt-9 max-w-lg rounded-3xl border border-night/20 bg-night/[0.06] p-6 text-lg font-semibold">
              You&rsquo;re on the list. We&rsquo;ll email you when it&rsquo;s ready.
            </p>
          ) : (
            <form method="post" action={action} onSubmit={submit} className="relative mx-auto mt-9 max-w-lg text-left">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  autoComplete="email"
                  className="h-14 rounded-full border border-night/20 bg-off px-6 text-base text-night placeholder:text-night/45 focus:border-night focus:outline-none sm:flex-1"
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
                  className="h-14 whitespace-nowrap rounded-full bg-night px-7 text-base font-semibold text-off transition hover:bg-black disabled:opacity-60"
                >
                  {status === "sending" ? "One sec..." : "Tell me when it's out"}
                </button>
              </div>
              {status === "error" && (
                <p className="mt-3 text-sm font-medium">That didn&rsquo;t go through. Try again in a minute.</p>
              )}
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
