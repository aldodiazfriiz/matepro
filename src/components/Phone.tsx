// A plain phone frame for app screens
export default function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19] w-full max-w-[300px] rounded-[44px] border border-off/15 bg-black p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-night">
        <div className="absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}
