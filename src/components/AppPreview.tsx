"use client";

import { useEffect, useState } from "react";
import CountUp from "./CountUp";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { useInView } from "./useInView";

const checks = [
  "Lights and indicators",
  "Tyres and wheel nuts",
  "Brakes and air",
  "Coupling",
  "Fluids and leaks",
];

const stops = [
  { name: "Hume Fwy", meta: "Truck stop · Diesel · Showers", km: "12 km" },
  { name: "Western Hwy", meta: "Rest area · Parking · Toilets", km: "28 km" },
  { name: "Calder Fwy", meta: "Truck stop · Diesel · Food", km: "41 km" },
];

const amenities = [
  { icon: "fuel", label: "Diesel" },
  { icon: "food", label: "Food" },
  { icon: "shower", label: "Showers" },
  { icon: "parking", label: "Parking" },
];

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function PrestartCard() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [done, setDone] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(
      () => {
        setDone((d) => {
          if (d + 1 >= checks.length) clearInterval(id);
          return Math.min(d + 1, checks.length);
        });
      },
      reducedMotion() ? 0 : 450,
    );
    return () => clearInterval(id);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="flex h-full flex-col rounded-[2rem] bg-lime p-7 text-night transition duration-500 hover:-translate-y-1.5 hover:rotate-[-0.6deg] sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-night/60">
            Today&rsquo;s pre-start
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
            Prime mover
            <br />
            check
          </h3>
        </div>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-night text-lime">
          <Icon name="check" className="h-6 w-6" />
        </span>
      </div>

      <p className="mt-4 flex gap-5 text-sm font-medium text-night/70">
        <span>{checks.length} checks</span>
        <span>About 3 min</span>
      </p>

      <ul className="mt-7 space-y-3">
        {checks.map((c, i) => {
          const ticked = i < done;
          return (
            <li key={c} className="flex items-center gap-3 font-medium">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-night transition duration-300 ${
                  ticked
                    ? "scale-100 bg-night text-lime"
                    : "scale-90 bg-transparent text-transparent"
                }`}
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-3.5 w-3.5"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10.5l4 4 8-9"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span
                className={`transition duration-300 ${ticked ? "opacity-100" : "opacity-55"}`}
              >
                {c}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-7 h-2 overflow-hidden rounded-full bg-night/15">
        <div
          className="h-full rounded-full bg-night transition-[width] duration-500 ease-out"
          style={{ width: `${(done / checks.length) * 100}%` }}
        />
      </div>

      <a
        href="#waitlist"
        className="group mt-auto flex h-14 items-center justify-between rounded-full bg-night pl-6 pr-2 font-semibold text-off transition hover:bg-charcoal"
        style={{ marginTop: "2rem" }}
      >
        Start pre-start
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime text-night transition-transform group-hover:translate-x-0.5">
          <Icon name="arrow" className="h-5 w-5" />
        </span>
      </a>
    </div>
  );
}

function DieselCard() {
  return (
    <div className="flex h-full flex-col rounded-[2rem] bg-lime p-7 text-night transition duration-500 hover:-translate-y-1.5 hover:rotate-[0.6deg] sm:p-8">
      <p className="text-sm font-medium text-night/60">
        Cheapest diesel near you
      </p>
      <p className="mt-2 text-5xl font-extrabold tracking-tight sm:text-6xl">
        <CountUp from={2.15} to={1.89} decimals={2} prefix="$" />
        <span className="ml-1 text-2xl font-bold text-night/60">/L</span>
      </p>
      <p className="mt-2 text-sm font-medium text-night/70">
        Truck stop, 12 km ahead
      </p>
      <div className="mt-auto flex gap-3 pt-8">
        {amenities.map((a) => (
          <span
            key={a.icon}
            title={a.label}
            aria-label={a.label}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-night text-lime transition duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <Icon name={a.icon} className="h-6 w-6" />
          </span>
        ))}
      </div>
    </div>
  );
}

function StopsCard() {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="flex h-full flex-col rounded-[2rem] border border-off/10 bg-charcoal p-7 transition duration-500 hover:-translate-y-1.5 hover:border-off/20 sm:p-8"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Truck stops near you</h3>
        <span className="flex items-center gap-2 text-sm font-medium text-lime">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
          </span>
          Live
        </span>
      </div>

      <ul className="mt-6 space-y-3">
        {stops.map((s, i) => (
          <li
            key={s.name}
            className={`flex items-center gap-4 rounded-2xl bg-night p-4 transition duration-700 ease-out motion-reduce:transition-none ${
              inView ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
            }`}
            style={{ transitionDelay: `${200 + i * 160}ms` }}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime/10 text-lime">
              <Icon name="pin" className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-semibold">{s.name}</span>
              <span className="block text-sm text-off/55">
                {s.meta}
              </span>
            </span>
            <span className="shrink-0 font-semibold text-lime">{s.km}</span>
          </li>
        ))}
      </ul>

      <a
        href="#waitlist"
        className="mt-auto flex h-12 items-center justify-center rounded-full border border-off/15 font-semibold transition hover:border-off/40"
        style={{ marginTop: "1.75rem" }}
      >
        Open the map
      </a>
    </div>
  );
}

function WashCard() {
  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-off/10 bg-charcoal p-7 transition duration-500 hover:-translate-y-1.5 hover:border-off/20 sm:p-8">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-off/60">Next truck wash</p>
        <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold text-night">
          Booked
        </span>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime/10 text-lime">
          <Icon name="calendar" className="h-6 w-6" />
        </span>
        <div>
          <p className="text-2xl font-bold">Thu, 6:00 am</p>
          <p className="text-sm text-off/55">
            At your depot · Prime mover + trailer
          </p>
        </div>
      </div>
      <a
        href="#wash"
        className="mt-auto flex h-12 items-center justify-center rounded-full border border-off/15 font-semibold transition hover:border-off/40"
        style={{ marginTop: "1.75rem" }}
      >
        See the wash
      </a>
    </div>
  );
}

export default function AppPreview() {
  return (
    <section
      id="preview"
      className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32"
    >
      <Reveal className="max-w-2xl">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Built for the cab.
        </h2>
        <p className="mt-5 text-lg text-off/70">
          Big text, big buttons. Works with gloves on, at 3am, at a truck stop
          with one bar.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
        <Reveal className="lg:row-span-2">
          <div className="float-card h-full" style={{ animationDelay: "0s" }}>
            <PrestartCard />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div
            className="float-card h-full"
            style={{ animationDelay: "-2.2s" }}
          >
            <DieselCard />
          </div>
        </Reveal>
        <Reveal
          delay={240}
          className="md:row-span-2 lg:col-start-3 lg:row-start-1"
        >
          <div
            className="float-card h-full"
            style={{ animationDelay: "-4.1s" }}
          >
            <StopsCard />
          </div>
        </Reveal>
        <Reveal delay={360} className="lg:col-start-2">
          <div
            className="float-card h-full"
            style={{ animationDelay: "-1.3s" }}
          >
            <WashCard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
