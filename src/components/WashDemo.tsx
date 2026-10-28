"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { washReport } from "@/lib/content";

// One loop, in ms: dirty truck, spray pass, shine, report cards, hold, reset
const LOOP = 10500;
const SPRAY_START = 700;
const SPRAY_END = 4700;
const SHINE_END = 5600;
const CARD_AT = [5000, 6000, 7000];
const FADE_AT = 9900;

const W = 800;

// Mud splats, fixed so server and client render the same
const splats = [
  [70, 150, 14], [120, 175, 10], [180, 120, 8], [230, 165, 16], [300, 140, 9],
  [350, 178, 12], [420, 110, 7], [470, 160, 15], [520, 132, 9], [590, 172, 11],
  [640, 150, 8], [690, 176, 13], [720, 140, 7], [150, 95, 6], [380, 80, 5],
  [100, 208, 12], [150, 212, 10], [200, 206, 12], [590, 210, 11], [640, 206, 12],
  [705, 212, 10],
];

function Truck() {
  return (
    <>
      <rect x="40" y="40" width="500" height="150" rx="6" fill="#e9e9e5" />
      <rect x="40" y="150" width="500" height="6" fill="#cbe733" opacity="0.85" />
      <rect x="44" y="172" width="8" height="10" rx="2" fill="#f5a524" />
      <path
        d="M560 190V72q0-22 22-22h104q16 0 23 15l25 56q6 12 6 26v43Z"
        fill="#f4f4f1"
      />
      <path d="M640 64h46q10 0 14 9l17 37h-77Z" fill="#121212" opacity="0.9" />
      <rect x="575" y="70" width="52" height="40" rx="4" fill="#121212" opacity="0.85" />
      <rect x="40" y="190" width="700" height="10" fill="#1a1a1a" />
      {[100, 150, 200, 590, 640, 705].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="212" r="22" fill="#161616" stroke="#444" strokeWidth="2" />
          <circle cx={cx} cy="212" r="9" fill="#3a3a3a" />
        </g>
      ))}
    </>
  );
}

function TruckShape() {
  return (
    <>
      <rect x="40" y="40" width="500" height="150" rx="6" />
      <path d="M560 190V72q0-22 22-22h104q16 0 23 15l25 56q6 12 6 26v43Z" />
      <rect x="40" y="190" width="700" height="10" />
      {[100, 150, 200, 590, 640, 705].map((cx) => (
        <circle key={cx} cx={cx} cy="212" r="22" />
      ))}
    </>
  );
}

export default function WashDemo() {
  const stage = useRef<HTMLDivElement>(null);
  const grime = useRef<SVGRectElement>(null);
  const wand = useRef<SVGGElement>(null);
  const shine = useRef<SVGRectElement>(null);
  const [cards, setCards] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      grime.current?.setAttribute("x", String(W));
      wand.current?.setAttribute("opacity", "0");
      const still = requestAnimationFrame(() => setCards(washReport.length));
      return () => cancelAnimationFrame(still);
    }

    let frame = 0;
    let start = 0;
    let shown = 0;
    let faded = false;

    const tick = (now: number) => {
      if (!start) start = now;
      const t = (now - start) % LOOP;

      const sweep = Math.min(Math.max((t - SPRAY_START) / (SPRAY_END - SPRAY_START), 0), 1);
      const eased = sweep < 0.5 ? 2 * sweep * sweep : 1 - Math.pow(-2 * sweep + 2, 2) / 2;
      const x = 20 + eased * (W - 40);
      grime.current?.setAttribute("x", String(sweep > 0 ? x : 0));
      wand.current?.setAttribute("transform", `translate(${x} 0)`);
      wand.current?.setAttribute("opacity", sweep > 0 && sweep < 1 ? "1" : "0");

      const s = Math.min(Math.max((t - SPRAY_END) / (SHINE_END - SPRAY_END), 0), 1);
      shine.current?.setAttribute("x", String(-200 + s * (W + 200)));
      shine.current?.setAttribute("opacity", s > 0 && s < 1 ? "1" : "0");

      const next = CARD_AT.filter((at) => t >= at).length;
      if (next !== shown) {
        shown = next;
        setCards(next);
      }
      const fade = t >= FADE_AT;
      if (fade !== faded) {
        faded = fade;
        setFading(fade);
      }

      frame = requestAnimationFrame(tick);
    };

    // Only animate while the stage is on screen
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      if (entry.isIntersecting) frame = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const clean = cards > 0;

  return (
    <div
      ref={stage}
      className={`grid gap-6 transition-opacity duration-500 lg:grid-cols-[1.5fr_1fr] lg:items-center ${fading ? "opacity-0" : "opacity-100"}`}
    >
      <div className="relative overflow-hidden rounded-3xl border border-off/10 bg-charcoal/50 p-5 sm:p-8">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-off/60">Depot, 2:00am</span>
          <span
            className={`rounded-full px-3 py-1 font-semibold transition-colors duration-500 ${clean ? "bg-lime text-night" : "bg-off/10 text-off/70"}`}
          >
            {clean ? "After" : "Before"}
          </span>
        </div>

        <svg
          viewBox="0 0 800 250"
          className="mt-6 w-full"
          role="img"
          aria-label="A muddy prime mover and trailer being hand washed clean"
        >
          <defs>
            <clipPath id="wash-truck" clipPathUnits="userSpaceOnUse">
              <TruckShape />
            </clipPath>
            <clipPath id="wash-left" clipPathUnits="userSpaceOnUse">
              <rect ref={grime} x="0" y="0" width={W} height="250" />
            </clipPath>
            <linearGradient id="wash-mud" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8a6b40" stopOpacity="0.7" />
              <stop offset="0.7" stopColor="#6e5230" stopOpacity="0.9" />
              <stop offset="1" stopColor="#4f3a1f" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="wash-shine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#fafafa" stopOpacity="0" />
              <stop offset="0.5" stopColor="#cbe733" stopOpacity="0.55" />
              <stop offset="1" stopColor="#fafafa" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wash-mist" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0" stopColor="#cbe733" stopOpacity="0.35" />
              <stop offset="1" stopColor="#cbe733" stopOpacity="0" />
            </linearGradient>
          </defs>

          <ellipse cx="400" cy="238" rx="380" ry="8" fill="#000" opacity="0.4" />
          <Truck />

          <g clipPath="url(#wash-left)">
            <g clipPath="url(#wash-truck)">
              <rect x="0" y="0" width={W} height="250" fill="url(#wash-mud)" />
              {splats.map(([cx, cy, r]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#3d2d18" opacity="0.8" />
              ))}
            </g>
          </g>

          <g clipPath="url(#wash-truck)">
            <rect ref={shine} x="-200" y="0" width="160" height="250" fill="url(#wash-shine)" opacity="0" transform="skewX(-18)" />
          </g>

          <g ref={wand} opacity="0">
            <rect x="-34" y="30" width="34" height="200" fill="url(#wash-mist)" />
            <rect x="-2" y="18" width="5" height="214" rx="2.5" fill="#fafafa" />
            {[40, 75, 110, 145, 180, 215].map((y, i) => (
              <circle
                key={y}
                className="wash-drop"
                style={{ animationDelay: `${i * 90}ms` }}
                cx="-10"
                cy={y}
                r="3"
                fill="#cbe733"
              />
            ))}
          </g>

          {cards >= 2 && (
            <g>
              <circle cx="48" cy="177" r="10" fill="none" stroke="#cbe733" strokeWidth="2.5" className="wash-ping" />
              <circle cx="48" cy="177" r="10" fill="none" stroke="#cbe733" strokeWidth="2.5" />
            </g>
          )}
        </svg>
      </div>

      <ul className="grid gap-3" aria-live="polite">
        {washReport.map((r, i) => (
          <li
            key={r.title}
            className={`flex items-start gap-4 rounded-2xl border border-off/10 bg-night p-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${cards > i ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime text-night">
              <Icon name={r.icon} className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-off/40">
                MatePro wash report
              </p>
              <p className="mt-1 font-semibold">{r.title}</p>
              <p className="text-sm text-off/60">{r.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
