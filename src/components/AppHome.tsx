import Image from "next/image";
import Icon from "@/components/Icon";

// Mock community feed screen of the MatePro app
export default function AppHome() {
  return (
    <div className="flex h-full flex-col px-3.5 pb-3 pt-11 text-off">
      <div className="flex items-center justify-between">
        <Image src="/brand/matepro-horizontal-on-dark.svg" alt="MatePro" width={92} height={26} />
        <span className="rounded-full bg-lime px-2.5 py-1 text-[11px] font-bold text-night">240 pts</span>
      </div>

      <div className="mt-3 overflow-hidden rounded-2xl bg-charcoal">
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime text-[10px] font-bold text-night">JR</span>
          <div className="leading-tight">
            <p className="text-[11px] font-semibold">jakes_golf</p>
            <p className="text-[9px]">Brighton &middot; 2h</p>
          </div>
        </div>
        <div className="relative aspect-[16/10]">
          <Image src="/carwash/bay.jpg" alt="" fill sizes="280px" className="object-cover" />
        </div>
        <div className="flex items-center justify-between px-3 py-2 text-[10px]">
          <span>Fresh foam bath before the meet</span>
          <span className="font-semibold text-lime">&hearts; 128</span>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2.5 rounded-2xl bg-charcoal p-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime text-night">
          <Icon name="pin" className="h-4 w-4" />
        </span>
        <div className="flex-1 leading-tight">
          <p className="text-[11px] font-semibold">Sunday cars and coffee</p>
          <p className="text-[9px]">Dandenong &middot; 34 going</p>
        </div>
        <span className="rounded-full bg-off/10 px-2 py-1 text-[9px] font-semibold">Join</span>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2">
        <div className="rounded-2xl bg-charcoal p-2.5 leading-tight">
          <p className="text-[9px] text-lime">Next wash</p>
          <p className="text-[11px] font-semibold">Full Detail</p>
          <p className="text-[9px]">Sat 9:00am</p>
        </div>
        <div className="rounded-2xl border border-lime/40 bg-charcoal p-2.5 leading-tight">
          <p className="text-[9px] text-lime">Play</p>
          <p className="text-[11px] font-semibold">Foam Frenzy</p>
          <p className="text-[9px]">Best 42</p>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-4 gap-1 border-t border-off/10 pt-2.5 text-center text-[10px]">
        {["Feed", "Meets", "Book", "Game"].map((t, i) => (
          <span key={t} className={i === 0 ? "font-semibold text-lime" : ""}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
