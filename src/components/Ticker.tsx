import { ticker as items } from "@/lib/content";

export default function Ticker() {
  return (
    <div className="ticker border-y border-off/10 py-5" aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`flex items-center gap-8 pr-8 text-lg font-semibold sm:text-xl ${item.lime ? "text-lime" : "text-off/55"}`}
          >
            {item.text}
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          </span>
        ))}
      </div>
    </div>
  );
}
