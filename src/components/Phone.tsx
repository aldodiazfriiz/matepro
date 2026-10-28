import Icon from "@/components/Icon";

// Mock app screens for the features section. Ids match features in content.ts.

type Screen = "stops" | "diesel" | "prestart" | "expenses" | "community";

const titles: Record<Screen, string> = {
  stops: "Stops near you",
  diesel: "Diesel up the road",
  prestart: "Pre-start",
  expenses: "This week",
  community: "On the road",
};

function Row({ children, lime = false }: { children: React.ReactNode; lime?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-2xl px-3.5 py-3 ${
        lime ? "bg-lime text-night" : "bg-charcoal"
      }`}
    >
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-off/10 px-2 py-0.5 text-[10px] font-medium text-off/70">{children}</span>;
}

function Stops() {
  const stops = [
    { name: "Truck stop", km: "12 km", tags: ["Showers", "Food 24/7", "Bays"] },
    { name: "Rest area", km: "38 km", tags: ["Toilets", "Bays"] },
    { name: "Roadhouse", km: "64 km", tags: ["Showers", "Diesel", "Food"] },
  ];
  return (
    <div className="space-y-2.5">
      <div className="rounded-2xl border border-off/10 px-3.5 py-2.5 text-xs text-off/50">Hume Hwy, northbound</div>
      {stops.map((s) => (
        <div key={s.name} className="rounded-2xl bg-charcoal px-3.5 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">{s.name}</span>
            <span className="text-xs font-semibold text-lime">{s.km}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {s.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Diesel() {
  const prices = [
    { name: "Truck stop", km: "12 km", price: "189.9", best: true },
    { name: "Servo", km: "27 km", price: "194.5" },
    { name: "Roadhouse", km: "64 km", price: "199.7" },
    { name: "Servo", km: "81 km", price: "201.3" },
  ];
  return (
    <div className="space-y-2.5">
      {prices.map((p, i) => (
        <Row key={i} lime={p.best}>
          <div>
            <div className="text-sm font-semibold">{p.name}</div>
            <div className={`text-xs ${p.best ? "text-night/70" : "text-off/50"}`}>{p.km}</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold leading-none">{p.price}</div>
            <div className={`mt-1 text-[10px] ${p.best ? "text-night/70" : "text-off/50"}`}>
              {p.best ? "Cheapest" : "c/L"}
            </div>
          </div>
        </Row>
      ))}
    </div>
  );
}

function Prestart() {
  const checks = ["Tyres and wheels", "Lights and indicators", "Brakes and air", "Mirrors and glass", "Load restraint"];
  return (
    <div className="space-y-2.5">
      {checks.map((c, i) => (
        <Row key={c}>
          <span className="text-sm">{c}</span>
          {i < 4 ? (
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime text-night">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </span>
          ) : (
            <span className="h-6 w-6 rounded-full border-2 border-off/20" />
          )}
        </Row>
      ))}
      <div className="rounded-2xl border border-dashed border-off/20 px-3.5 py-3 text-center text-xs text-off/50">
        + Add a photo
      </div>
    </div>
  );
}

function Expenses() {
  const items = [
    { name: "Diesel", note: "Mon", amount: "$412.60" },
    { name: "Tolls", note: "Tue", amount: "$38.20" },
    { name: "Feed", note: "Tue", amount: "$18.50" },
    { name: "Shower", note: "Wed", amount: "$5.00" },
  ];
  return (
    <div className="space-y-2.5">
      <div className="rounded-2xl bg-lime px-4 py-3.5 text-night">
        <div className="text-xs font-medium text-night/70">Spent this week</div>
        <div className="mt-1 text-2xl font-extrabold">$474.30</div>
      </div>
      {items.map((e) => (
        <Row key={e.name + e.note}>
          <div>
            <div className="text-sm font-semibold">{e.name}</div>
            <div className="text-xs text-off/50">{e.note}</div>
          </div>
          <span className="text-sm font-semibold">{e.amount}</span>
        </Row>
      ))}
    </div>
  );
}

function Community() {
  const posts = [
    { who: "Driver, 12 min ago", text: "Roadworks northbound, one lane. Allow 20 minutes." },
    { who: "Driver, 40 min ago", text: "Bays all full at the rest area, try the next one." },
    { who: "Driver, 1 hr ago", text: "Showers are clean and hot at the truck stop tonight." },
  ];
  return (
    <div className="space-y-2.5">
      {posts.map((p) => (
        <div key={p.who} className="rounded-2xl bg-charcoal px-3.5 py-3">
          <div className="flex items-center gap-2 text-[11px] text-off/50">
            <span className="h-5 w-5 rounded-full bg-off/15" />
            {p.who}
          </div>
          <p className="mt-2 text-sm leading-snug">{p.text}</p>
        </div>
      ))}
    </div>
  );
}

const screens: Record<Screen, () => React.ReactNode> = {
  stops: Stops,
  diesel: Diesel,
  prestart: Prestart,
  expenses: Expenses,
  community: Community,
};

const tabs = [
  { screen: "stops", icon: "pin" },
  { screen: "diesel", icon: "fuel" },
  { screen: "prestart", icon: "check" },
  { screen: "expenses", icon: "note" },
  { screen: "community", icon: "users" },
] as const;

export default function Phone({ screen, className = "" }: { screen: Screen; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19] w-full rounded-[48px] border border-off/15 bg-night p-2.5 shadow-[0_40px_120px_rgba(0,0,0,0.6),0_0_0_6px_#1a1a1a] ${className}`}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[38px] bg-night">
        <div className="flex items-center justify-between px-7 pt-3.5 text-[11px] font-semibold">
          <span>5:42</span>
          <span className="h-6 w-20 rounded-full bg-black" />
          <span className="flex gap-1">
            <span className="h-2.5 w-4 rounded-sm bg-off/80" />
          </span>
        </div>
        <div className="flex items-center gap-2.5 px-5 pt-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/matepro-mark-lime.svg" alt="" className="h-6 w-6" />
          <span className="text-base font-bold">{titles[screen]}</span>
        </div>
        <div key={screen} className="screen-in flex-1 overflow-hidden px-4 pt-4">
          {screens[screen]()}
        </div>
        <div className="flex justify-around border-t border-off/10 px-4 pb-5 pt-3">
          {tabs.map((t) => (
            <Icon
              key={t.screen}
              name={t.icon}
              className={`h-5 w-5 ${t.screen === screen ? "text-lime" : "text-off/35"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export type { Screen };
