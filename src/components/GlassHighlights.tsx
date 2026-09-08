import { Reveal } from "./ui/Reveal";
import { Tilt } from "./ui/Tilt";
import { SectionHeader } from "./ui/SectionHeader";
import { Squiggle, Sticker } from "./ui/Deco";
import { useScrollScrub } from "@/hooks/useScrollScrub";

const items = [
  {
    n: "01",
    href: "#apple-lab",
    link: "Meet the lab",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
    ),
    chip: "linear-gradient(135deg,#F05138,#FF7A5C)",
    tint: "rgba(240,81,56,0.12)",
    label: "Apple Authorized",
    sub: "Training Center on campus",
    detail: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A5C]" />
        ACT · Umang Panchal
      </span>
    ),
  },
  {
    n: "02",
    href: "#stories",
    link: "Hear their stories",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 8l9-4 9 4-9 4-9-4z" />
        <path d="M3 8v6c0 2 4 4 9 4s9-2 9-4V8" />
      </svg>
    ),
    chip: "linear-gradient(135deg,#E84830,#FFD3BC)",
    tint: "rgba(232,72,48,0.10)",
    label: "300+",
    sub: "Students trained since 2020",
    detail: (
      <span className="flex items-center gap-2">
        <span className="flex -space-x-1.5">
          {["#F05138", "#E84830", "#FF7A5C", "#3B3530"].map((c) => (
            <span key={c} className="h-5 w-5 rounded-full border-2 border-white" style={{ background: c }} />
          ))}
        </span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink/55">+12 this month</span>
      </span>
    ),
  },
  {
    n: "03",
    href: "#showcase",
    link: "Browse the apps",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    ),
    chip: "linear-gradient(135deg,#C2B8A3,#FFD3BC)",
    tint: "rgba(194,184,163,0.12)",
    label: "12",
    sub: "Student apps on the App Store",
    detail: (
      <svg viewBox="0 0 120 32" className="h-8 w-28" fill="none" aria-hidden>
        <defs>
          <linearGradient id="hl-spark" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F05138" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F05138" />
          </linearGradient>
        </defs>
        <path d="M2 26 L18 24 L34 25 L50 18 L66 19 L82 10 L98 12 L118 3" stroke="url(#hl-spark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="118" cy="3" r="3" fill="#F05138" />
      </svg>
    ),
  },
  {
    n: "04",
    href: "#join",
    link: "Claim your seat",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 21s-7-4.35-9.5-8.5C.7 9 2 5.5 5.5 4.7 8 4.1 10 5.4 12 8c2-2.6 4-3.9 6.5-3.3C22 5.5 23.3 9 21.5 12.5 19 16.65 12 21 12 21z" />
      </svg>
    ),
    chip: "linear-gradient(135deg,#8A7E6B,#C2B8A3)",
    tint: "rgba(138,126,107,0.12)",
    label: "₹0",
    sub: "Free for every student, forever",
    detail: (
      <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/55">
        <span className="rounded-md bg-[#FFD3BC] px-2 py-1 font-bold text-ink">No fee</span>
        No Mac needed
      </span>
    ),
  },
];

const ticker = [
  "Free forever",
  "No Mac needed",
  "Thursday labs · 5 PM",
  "Beginners welcome",
  "Ship real apps",
  "Mentored by seniors",
  "Est. 2020 · Parul University",
];

const watermarkWords = ["Swift", "Coding", "Club", "Swift", "Coding", "Club"];

/* twinkling sparkles scattered over the mesh — ember tones only */
const sparkles = [
  { left: "6%", top: "18%", d: "0s", c: "#F05138" },
  { left: "22%", top: "8%", d: "1.2s", c: "#FF7A5C" },
  { left: "48%", top: "14%", d: "2.1s", c: "#FFD3BC" },
  { left: "74%", top: "10%", d: "0.6s", c: "#E84830" },
  { left: "90%", top: "24%", d: "1.7s", c: "#C2B8A3" },
  { left: "12%", top: "66%", d: "2.6s", c: "#F05138" },
  { left: "60%", top: "60%", d: "0.9s", c: "#FF7A5C" },
  { left: "84%", top: "58%", d: "2.9s", c: "#E84830" },
];

/**
 * The "proof panel" — liquid-glass cards floating over a living gradient
 * mesh, scrubbed by scroll: the watermark strip slides, the mesh
 * hue-shifts, cards bob gently on their own rhythm, and a progress bar fills
 * as you travel through. Each card is a real link into the site, tinted in
 * its own color and gently bobbing on its own rhythm.
 */
export function GlassHighlights() {
  const scrub = useScrollScrub<HTMLDivElement>();
  return (
    <section aria-label="Club highlights" className="cv-auto relative -mt-8 pb-24 sm:-mt-14">
      <div className="container-x">
        <div className="relative">
          <SectionHeader
            index="02"
            eyebrow="Why Swift Coding Club"
            title={
              <>
                Glass outside. <span className="text-gradient">Substance inside.</span>
              </>
            }
            body="An Apple Authorized Training Center run entirely by students — real curriculum, real Macs, real apps on the App Store. And it costs nothing."
          />
          {/* trust line + sticker */}
          <Reveal delay={220} className="mt-6 flex flex-wrap items-center gap-4">
            <Squiggle color="#F05138" className="w-28" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Funded by the university · run by volunteers
            </span>
            <Sticker rotate={-4} color="bg-[#FFD3BC] text-ink">Audited every sem</Sticker>
          </Reveal>
          {/* floating deco sticker */}
          <div aria-hidden className="absolute -top-4 right-0 hidden rotate-6 lg:block">
            <div className="gpu animate-float rounded-2xl border-[2.5px] border-ink bg-[#FFD3BC] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] shadow-[0_5px_0_rgba(11,11,12,0.9)]">
              ★ rated by members
            </div>
          </div>
        </div>

        <Reveal variant="scale" delay={120} className="mt-12">
          <div ref={scrub} className="scrub relative overflow-hidden rounded-[36px] border-[3px] border-ink bg-paper shadow-[0_20px_0_rgba(11,11,12,0.9)]">
            {/* scroll progress bar with traveling shine */}
            <div aria-hidden className="absolute inset-x-0 top-0 z-20 h-1.5 bg-ink/10">
              <div className="gpu relative h-full w-full origin-left overflow-hidden bg-gradient-to-r from-[#F05138] via-[#FF7A5C] to-[#FFD3BC]" style={{ transform: "scaleX(var(--scrub, 0))" }}>
                <span className="sweep absolute inset-0" />
              </div>
            </div>

            {/* ---- living gradient mesh (hue scrubs with scroll) ---- */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              {/* slow-spinning conic wash, oversized so edges never show */}
              <div className="absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2">
                <div
                  className="gpu animate-spin-slow absolute inset-0"
                  style={{
                    animationDuration: "46s",
                    background: "conic-gradient(from 200deg at 50% 50%, #FFB59A, #FFD3BC, #F05138, #C2B8A3, #FF7A5C, #E84830, #FFB59A)",
                    filter: "hue-rotate(calc(var(--scrub, 0) * 40deg)) saturate(1.1)",
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-white/30" />
              {/* warm vignette for depth */}
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 120%, rgba(240,81,56,0.16), transparent 55%), radial-gradient(ellipse at 50% -20%, rgba(255,255,255,0.5), transparent 50%)" }} />
              {/* drifting color orbs */}
              <div className="gpu animate-morph absolute -left-16 -top-20 h-72 w-72 rounded-full bg-[#F05138]/20 blur-3xl" />
              <div className="gpu animate-morph absolute -bottom-24 right-[8%] h-80 w-80 rounded-full bg-[#FFD3BC]/40 blur-3xl" style={{ animationDelay: "-8s" }} />
              <div className="gpu animate-drift absolute left-[42%] top-[10%] h-44 w-44 rounded-full bg-[#E84830]/20 blur-3xl" />
              {/* big sun + concentric rings */}
              <div className="absolute -left-24 bottom-[16%] h-64 w-64 rounded-full bg-[#FFD3BC]/50 blur-2xl" />
              <div className="gpu animate-spin-slow absolute -left-24 bottom-[16%] h-64 w-64 rounded-full border-2 border-ink/10" style={{ animationDuration: "48s" }}>
                <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#F05138]" />
              </div>
              {/* twinkling sparkles */}
              {sparkles.map((s) => (
                <span
                  key={`${s.left}-${s.top}`}
                  className="gpu animate-pulse-soft absolute font-mono text-sm"
                  style={{ left: s.left, top: s.top, color: s.c, animationDelay: s.d }}
                >
                  +
                </span>
              ))}
              {/* dot grid */}
              <div className="absolute inset-0 dot-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
              {/* scroll-driven watermark strip */}
              <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                <div
                  className="gpu flex w-max items-center whitespace-nowrap will-change-transform"
                  style={{ transform: "translateX(calc((0.5 - var(--scrub, 0)) * 26vw))" }}
                >
                  {watermarkWords.map((w, i) => (
                    <span key={i} className="flex items-center">
                      <span className="display px-6 font-mono text-[7rem] font-bold uppercase leading-none tracking-tight text-stroke opacity-60">
                        {w}
                      </span>
                      <span className="font-mono text-5xl text-[#F05138]/40">·</span>
                    </span>
                  ))}
                </div>
              </div>
              {/* rotating dashed ring */}
              <div className="gpu animate-spin-slow absolute -right-24 -top-24 h-72 w-72 rounded-full border-2 border-dashed border-ink/15" style={{ animationDuration: "40s" }} />
              <div className="gpu animate-spin-slow absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-ink/10" style={{ animationDuration: "55s", animationDirection: "reverse" }} />
            </div>

            {/* blueprint corner ticks */}
            <span aria-hidden className="absolute left-5 top-4 z-10 font-mono text-lg text-ink/30">+</span>
            <span aria-hidden className="absolute right-5 top-4 z-10 font-mono text-lg text-ink/30">+</span>
            <span aria-hidden className="absolute bottom-14 left-5 z-10 font-mono text-lg text-ink/30">+</span>
            <span aria-hidden className="absolute bottom-14 right-5 z-10 font-mono text-lg text-ink/30">+</span>

            {/* ---- cards (alternating scroll parallax + gentle float) ---- */}
            <div className="relative grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6 lg:grid-cols-4">
              {items.map((it, i) => (
                <Reveal key={it.n} delay={i * 90} className="h-full">
                  <Tilt max={9} lift={18} className="h-full">
                      <a
                        href={it.href}
                        data-cursor="hot"
                        aria-label={`${it.label} — ${it.link}`}
                        className="liquid grain sweep spotlight group relative flex h-full flex-col justify-between gap-5 overflow-hidden rounded-3xl p-5 sm:p-6"
                        style={{ animation: `float ${8 + i * 1.3}s ease-in-out ${-i * 1.7}s infinite` }}
                      >
                        {/* per-card color tint */}
                        <span aria-hidden className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(circle at 18% 0%, ${it.tint}, transparent 62%)` }} />
                        <span className="flex items-start justify-between">
                          <span
                            className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-[0_10px_24px_-10px_rgba(11,11,12,0.5)] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-rotate-6 group-hover:scale-110"
                            style={{ background: it.chip }}
                          >
                            {it.icon}
                          </span>
                          <span className="font-mono text-[11px] tracking-[0.2em] text-ink/30">/{it.n}</span>
                        </span>
                        <span>
                          <span className="display block text-4xl tracking-tight text-ink sm:text-[2.6rem]">{it.label}</span>
                          <span className="mt-1 block text-[12.5px] font-medium text-ink/60">{it.sub}</span>
                          <span className="mt-4 block">{it.detail}</span>
                          <span className="mt-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F05138] opacity-0 transition-all duration-500 group-hover:opacity-100">
                            {it.link}
                            <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 12 12" fill="none" aria-hidden>
                              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </Tilt>
                </Reveal>
              ))}
            </div>

            {/* ---- ticker ---- */}
            <div className="marquee-mask relative border-t-[3px] border-ink/90 bg-ink py-3">
              <div className="marquee-track gpu animate-marquee flex w-max items-center gap-10 pr-10">
                {[...ticker, ...ticker].map((t, i) => (
                  <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-white/75">{t}</span>
                    <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-[#F05138]" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
