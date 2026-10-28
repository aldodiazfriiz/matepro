import { fleet } from "@/lib/content";
import Reveal from "./Reveal";

function Tick() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-1 h-4 w-4 shrink-0 text-lime"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10.5l4 4 8-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Fleet() {
  return (
    <section id="fleet" className="bg-charcoal/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <article className="grid gap-10 rounded-3xl border border-off/10 bg-night p-8 transition duration-300 hover:border-off/25 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Run a tight fleet.
              </h2>
              <p className="mt-5 max-w-md text-lg text-off/70">
                {fleet.price} {fleet.per}. Everything your drivers log in the
                free app, on one dashboard.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full border border-off/20 px-6 py-3.5 font-semibold transition hover:border-off/50"
              >
                Talk to us
              </a>
            </div>
            <ul className="space-y-4 text-lg text-off/85">
              {fleet.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <Tick />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
