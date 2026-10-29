"use client";

import { useEffect, useRef, useState } from "react";

type Bubble = { id: number; x: number; y: number; size: number; born: number };

const ROUND = 20;
const LIFE = 1800;

// Pop the foam bubbles before they dry. A 20-second round inside the phone frame.
export default function FoamFrenzy() {
  const [state, setState] = useState<"ready" | "playing" | "done">("ready");
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [score, setScore] = useState(0);
  const [left, setLeft] = useState(ROUND);
  const [best, setBest] = useState(0);
  const next = useRef(0);
  const scoreRef = useRef(0);

  useEffect(() => {
    if (state !== "playing") return;
    const started = Date.now();
    const spawn = setInterval(() => {
      const now = Date.now();
      setBubbles((bs) => [
        ...bs.filter((b) => now - b.born < LIFE),
        { id: next.current++, x: 8 + Math.random() * 72, y: 14 + Math.random() * 64, size: 44 + Math.random() * 28, born: now },
      ]);
    }, 520);
    const tick = setInterval(() => {
      const remaining = ROUND - Math.floor((Date.now() - started) / 1000);
      setLeft(Math.max(remaining, 0));
      setBubbles((bs) => bs.filter((b) => Date.now() - b.born < LIFE));
      if (remaining <= 0) {
        setBest((b) => Math.max(b, scoreRef.current));
        setState("done");
      }
    }, 200);
    return () => {
      clearInterval(spawn);
      clearInterval(tick);
    };
  }, [state]);

  function start() {
    setScore(0);
    scoreRef.current = 0;
    setLeft(ROUND);
    setBubbles([]);
    setState("playing");
  }

  function pop(id: number) {
    setBubbles((bs) => bs.filter((b) => b.id !== id));
    scoreRef.current += 1;
    setScore(scoreRef.current);
  }

  return (
    <div className="relative flex h-full flex-col bg-night pt-12 text-off">
      <div className="flex items-center justify-between px-4">
        <div>
          <p className="text-[11px] font-semibold text-lime">Foam Frenzy</p>
          <p className="text-2xl font-extrabold tabular-nums">{score}</p>
        </div>
        <div className="text-right">
          <p className="text-[11px]">Time</p>
          <p className="text-2xl font-extrabold tabular-nums">{left}s</p>
        </div>
      </div>

      <div className="relative mx-3 mb-3 mt-3 flex-1 overflow-hidden rounded-3xl bg-charcoal">
        {bubbles.map((b) => (
          <button
            key={b.id}
            type="button"
            aria-label="Pop bubble"
            onPointerDown={() => pop(b.id)}
            className="foam-bubble absolute rounded-full"
            style={{ left: `${b.x}%`, top: `${b.y}%`, width: b.size, height: b.size }}
          />
        ))}

        {state !== "playing" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-night/80 p-5 text-center">
            {state === "done" ? (
              <>
                <p className="text-sm font-semibold text-lime">Time&rsquo;s up</p>
                <p className="text-4xl font-extrabold tabular-nums">{score}</p>
                <p className="text-[12px]">bubbles popped &middot; best {best}</p>
              </>
            ) : (
              <>
                <p className="text-xl font-extrabold">Pop the foam</p>
                <p className="text-[12px]">Tap the bubbles before they dry. You&rsquo;ve got 20 seconds.</p>
              </>
            )}
            <button
              type="button"
              onClick={start}
              className="mt-1 rounded-full bg-lime px-6 py-2.5 text-sm font-bold text-night transition hover:brightness-95"
            >
              {state === "done" ? "Play again" : "Play"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
