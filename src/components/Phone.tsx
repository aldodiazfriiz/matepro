import Icon from "@/components/Icon";

// Mock app screens for the features section. Ids match features in content.ts.

type Screen = "map" | "stops" | "diesel" | "prestart" | "expenses" | "community";

const titles: Record<Screen, string> = {
  map: "Your route",
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
  return <span className="rounded-full bg-off/10 px-2 py-0.5 text-[10px] font-medium text-off">{children}</span>;
}

function RouteMap() {
  return (
    <div className="space-y-2.5">
      <div className="flex gap-1.5">
        <Tag>4.3 m high</Tag>
        <Tag>42.5 t</Tag>
        <Tag>B-double</Tag>
      </div>
      <div className="relative h-56 overflow-hidden rounded-2xl bg-charcoal">
        <svg viewBox="0 0 200 224" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
          <g stroke="#FAFAFA" strokeOpacity="0.08" strokeWidth="6" strokeLinecap="round">
            <path d="M-10 60h220M-10 150h220M50-10v240M150-10v240M-10 210 210 20" />
          </g>
          <path d="M100 236V170c0-20-50-20-50-40V90c0-25 50-25 50-50V-10" stroke="#FAFAFA" strokeOpacity="0.25" strokeWidth="5" strokeDasharray="2 8" strokeLinecap="round" />
          <path d="M100 236V170c0-20 50-20 50-40V90c0-25-50-25-50-50V-10" stroke="#CBE733" strokeWidth="5" strokeLinecap="round" />
          <circle cx="100" cy="196" r="7" fill="#121212" stroke="#CBE733" strokeWidth="3" />
        </svg>
        <span className="absolute left-[25%] top-[48%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-night px-2 py-1 text-[10px] font-bold text-off ring-2 ring-off/60">
          4.1 m
        </span>
        <span className="absolute left-[75%] top-[30%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-lime px-2 py-1 text-[10px] font-bold text-night">
          B-double OK
        </span>
      </div>
      <Row lime>
        <div>
          <div className="text-sm font-semibold">Low bridge in 2.3 km</div>
          <div className="text-xs text-night">4.1 m, your rig is 4.3 m. Rerouted.</div>
        </div>
        <Icon name="bridge" className="h-6 w-6 shrink-0" />
      </Row>
    </div>
  );
}

function Stops() {
  const stops = [
    { name: "Truck stop", km: "12 km", tags: ["Showers", "Food 24/7", "Bays"] },
    { name: "Rest area", km: "38 km", tags: ["Toilets", "Bays"] },
    { name: "Roadhouse", km: "64 km", tags: ["Showers", "Diesel", "Food"] },
  ];
  return (
    <div className="space-y-2.5">
      <div className="rounded-2xl border border-off/10 px-3.5 py-2.5 text-xs text-off">Hume Hwy, northbound</div>
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
            <div className={`text-xs ${p.best ? "text-night" : "text-off"}`}>{p.km}</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold leading-none">{p.price}</div>
            <div className={`mt-1 text-[10px] ${p.best ? "text-night" : "text-off"}`}>
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
      <div className="rounded-2xl border border-dashed border-off/20 px-3.5 py-3 text-center text-xs text-off">
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
        <div className="text-xs font-medium text-night">Spent this week</div>
        <div className="mt-1 text-2xl font-extrabold">$474.30</div>
      </div>
      {items.map((e) => (
        <Row key={e.name + e.note}>
          <div>
            <div className="text-sm font-semibold">{e.name}</div>
            <div className="text-xs text-off">{e.note}</div>
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
          <div className="flex items-center gap-2 text-[11px] text-off">
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
  map: RouteMap,
  stops: Stops,
  diesel: Diesel,
  prestart: Prestart,
  expenses: Expenses,
  community: Community,
};

const tabs = [
  { screen: "map", icon: "route" },
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
              className={`h-5 w-5 ${t.screen === screen ? "text-lime" : "text-off"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export type { Screen };
