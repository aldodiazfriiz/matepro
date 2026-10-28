// Not live in the stores yet, so these aren't links
export default function StoreBadges({ dark = false }: { dark?: boolean }) {
  const stores = [
    {
      name: "App Store",
      path: "M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8s-1.8-.8-3-.8C7 7.3 5.5 8.2 4.7 9.6c-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.7 2.4 3 2.4 1.2 0 1.6-.8 3.1-.8s1.8.8 3.1.8c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7 0 0-2.8-1-2.9-4ZM14 5.8c.6-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2.1-.5 2.7-1.3Z",
    },
    {
      name: "Google Play",
      path: "M4.6 2.4c-.3.3-.4.7-.4 1.3v16.6c0 .5.2 1 .4 1.3l9.3-9.6-9.3-9.6Zm10.4 10.7-2.4 2.5-7.2 7.4c.4.2 1 .2 1.6-.1l10.2-5.9-2.2-3.9Zm3.4-1.9-2.6-1.5-2.6 2.7 2.6 2.7 2.6-1.5c1.3-.8 1.3-1.6 0-2.4ZM6.4 1.5c-.6-.3-1.2-.3-1.6-.1l7.8 8 2.4-2.5L6.4 1.5Z",
    },
  ];
  return (
    <div className="flex flex-wrap gap-2.5 sm:gap-3">
      {stores.map((s) => (
        <div
          key={s.name}
          className={`flex h-12 items-center gap-2.5 rounded-2xl border px-3 sm:h-14 sm:gap-3 sm:px-4 ${
            dark ? "border-night/15 bg-night text-off" : "border-off/15 bg-black text-off"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" aria-hidden="true">
            <path d={s.path} />
          </svg>
          <div className="leading-tight">
            <div className="text-[10px] font-medium uppercase tracking-wide text-off">Coming soon on</div>
            <div className="text-sm font-semibold sm:text-base">{s.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
