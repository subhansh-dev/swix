import liquidDark from "@/assets/liquid-dark.webp";
import paint from "@/assets/paint.webp";
import { Reveal } from "./ui/Reveal";
import { Tilt } from "./ui/Tilt";
import { Sticker, Deco } from "./ui/Deco";
import { Orb } from "./ui/Orb";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/utils/cn";

const nums = [
  { v: 300, s: "+", l: "Students trained", sub: "across 6 faculties", color: "card-coral", accent: "bg-swift" },
  { v: 38, s: "", l: "Apps shipped", sub: "in the last 3 years", color: "card-lemon", accent: "bg-swift-deep" },
  { v: 12, s: "", l: "App Store launches", sub: "published by students", color: "card-lavender", accent: "bg-swift" },
  { v: 29, s: "", l: "Apple devices", sub: "in the training lab", color: "card-mint", accent: "bg-swift-deep" },
];

function Cell({ v, s, l, sub, color, accent, i }: { v: number; s: string; l: string; sub: string; color: string; accent: string; i: number }) {
  const { ref, value } = useCountUp(v, 1500 + i * 150);
  return (
    <Reveal delay={i * 90} className="h-full">
      <Tilt max={6} lift={18}>
        <div className={cn("relative h-full overflow-hidden rounded-[28px] border-[3px] border-ink p-6 shadow-[0_10px_0_rgba(11,11,12,0.9)] sm:p-8", color)}>
        <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/50 blur-2xl" />
        <div className={cn("h-2 w-10 rounded-full", accent)} />
        <p className="display mt-5 text-4xl sm:text-5xl">
          <span ref={ref}>{value}</span>
          {s}
        </p>
        <p className="mt-3 text-base font-bold tracking-tight">{l}</p>
        <p className="mt-0.5 text-[12.5px] text-muted">{sub}</p>
        {/* rotated corner sticker */}
        <span
          aria-hidden
          className={cn("absolute right-3 top-3 h-8 w-8 rounded-full opacity-70", accent)}
          style={{ transform: "rotate(12deg) translate(4px, -4px)" }}
        />
        </div>
      </Tilt>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section aria-label="Club numbers" className="cv-auto relative overflow-hidden bg-paper-2 py-20 sm:py-24">
      <img
        src={liquidDark}
        alt=""
        aria-hidden
        width={525}
        height={700}
        loading="lazy"
        decoding="async"
        className="gpu pointer-events-none absolute -left-20 -top-20 h-[60vh] w-[60vh] scale-110 object-cover opacity-20 blur-2xl"
      />
      <Deco variant="warm" />

      <div className="container-x relative">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <Orb variant="swift" box={44} size="small" className="mr-1" />
            <span className="h-[3px] w-10 bg-swift" />
            <p className="eyebrow">The club, by the numbers</p>
          </div>
          <Sticker rotate={4} color="bg-white text-ink">verified · 2026</Sticker>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {nums.map((n, i) => (
            <Cell key={n.l} {...n} i={i} />
          ))}
        </div>
        <Reveal delay={320} className="mt-10 flex items-center justify-center">
          <img src={paint} alt="" aria-hidden width={700} height={700} loading="lazy" decoding="async" className="h-8 w-auto opacity-70" />
        </Reveal>
      </div>
    </section>
  );
}
