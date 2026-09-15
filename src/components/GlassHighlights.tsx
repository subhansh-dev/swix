import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { useScrollScrub } from "@/hooks/useScrollScrub";

/* ------------------------------------------------------------------ */
/*  Neo Y2K tokens                                                     */
/* ------------------------------------------------------------------ */

const holo = "linear-gradient(135deg,#7ad9ff,#9a8cff 30%,#ff7ad1 55%,#ffb35c 78%,#67e0a8)";

const items = [
  {
    n: "01",
    href: "#apple-lab",
    link: "Meet the lab",
    orb: (
      <span
        className="y2k-orb grid h-12 w-12 place-items-center"
        style={{ boxShadow: "0 14px 30px -12px rgba(120,110,255,0.55), 0 -10px 18px -8px rgba(60,70,130,0.45) inset, 0 1px 1px rgba(255,255,255,0.95) inset" }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white drop-shadow-[0_1px_1px_rgba(0,0,30,0.4)]">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
      </span>
    ),
    label: "Apple Certified",
    sub: "Training Center on campus",
    detail: (
      <span className="y2k-pill">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: holo }} />
        ACT · Umang Panchal
      </span>
    ),
  },
  {
    n: "02",
    href: "#stories",
    link: "Hear their stories",
    orb: (
      <span
        className="y2k-orb grid h-12 w-12 place-items-center"
        style={{ background: "radial-gradient(circle at 32% 26%, #fff 0%, #ffd9f2 30%, #ff9ade 62%, #b86bd9 100%)", boxShadow: "0 14px 30px -12px rgba(255,122,209,0.55), 0 -10px 18px -8px rgba(130,50,110,0.4) inset, 0 1px 1px rgba(255,255,255,0.95) inset" }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white drop-shadow-[0_1px_1px_rgba(0,0,30,0.4)]" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8l9-4 9 4-9 4-9-4z" />
          <path d="M3 8v6c0 2 4 4 9 4s9-2 9-4V8" />
        </svg>
      </span>
    ),
    label: "300+",
    sub: "Students trained since 2020",
    detail: (
      <span className="flex items-center gap-2">
        <span className="flex -space-x-1.5">
          {["#7ad9ff", "#9a8cff", "#ff7ad1", "#67e0a8"].map((c) => (
            <span key={c} className="h-5 w-5 rounded-full border-2 border-white shadow-sm" style={{ background: `radial-gradient(circle at 32% 28%, #fff, ${c})` }} />
          ))}
        </span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[#6f6a9e]">+12 this month</span>
      </span>
    ),
  },
  {
    n: "03",
    href: "#showcase",
    link: "Browse the apps",
    orb: (
      <span
        className="y2k-orb grid h-12 w-12 place-items-center"
        style={{ background: "radial-gradient(circle at 32% 26%, #fff 0%, #d7ffe9 30%, #7fe6b4 62%, #3aa57c 100%)", boxShadow: "0 14px 30px -12px rgba(80,200,150,0.55), 0 -10px 18px -8px rgba(30,90,70,0.4) inset, 0 1px 1px rgba(255,255,255,0.95) inset" }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
          <path d="M11 18h2" />
        </svg>
      </span>
    ),
    label: "12",
    sub: "Student apps on the App Store",
    detail: (
      <svg viewBox="0 0 120 32" className="h-8 w-28" fill="none" aria-hidden>
        <defs>
          <linearGradient id="hl-spark" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9a8cff" stopOpacity="0.3" />
            <stop offset="55%" stopColor="#ff7ad1" />
            <stop offset="100%" stopColor="#ffb35c" />
          </linearGradient>
        </defs>
        <path d="M2 26 L18 24 L34 25 L50 18 L66 19 L82 10 L98 12 L118 3" stroke="url(#hl-spark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="118" cy="3" r="3" fill="#ffb35c" style={{ filter: "drop-shadow(0 0 6px rgba(255,179,92,0.9))" }} />
      </svg>
    ),
  },
  {
    n: "04",
    href: "#join",
    link: "Claim your seat",
    orb: (
      <span
        className="y2k-orb grid h-12 w-12 place-items-center"
        style={{ background: "radial-gradient(circle at 32% 26%, #fff 0%, #fff3c4 30%, #ffd166 62%, #d98f2b 100%)", boxShadow: "0 14px 30px -12px rgba(255,190,80,0.55), 0 -10px 18px -8px rgba(140,90,20,0.4) inset, 0 1px 1px rgba(255,255,255,0.95) inset" }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 21s-7-4.35-9.5-8.5C.7 9 2 5.5 5.5 4.7 8 4.1 10 5.4 12 8c2-2.6 4-3.9 6.5-3.3C22 5.5 23.3 9 21.5 12.5 19 16.65 12 21 12 21z" />
        </svg>
      </span>
    ),
    label: "₹0",
    sub: "Free for every student, forever",
    detail: (
      <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#6f6a9e]">
        <span className="y2k-pill !py-1" style={{ background: "linear-gradient(180deg,#fff,#ffe9f6)" }}>No fee</span>
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

/* floating y2k sparkle stars */
const stars = [
  { left: "5%", top: "16%", size: 22, d: "0s" },
  { left: "24%", top: "7%", size: 14, d: "1.2s" },
  { left: "48%", top: "12%", size: 18, d: "2.1s" },
  { left: "72%", top: "8%", size: 12, d: "0.6s" },
  { left: "90%", top: "22%", size: 20, d: "1.7s" },
  { left: "12%", top: "62%", size: 14, d: "2.6s" },
  { left: "62%", top: "56%", size: 16, d: "0.9s" },
  { left: "85%", top: "55%", size: 12, d: "2.9s" },
];

/**
 * The "proof panel" — Neo Y2K remix. Liquid-chrome cards float over a
 * pastel holo-grid, scrubbed by scroll: the watermark strip slides, a
 * chrome ring spins, sparkle stars twinkle, and a holo progress bar fills
 * as you travel through. Each card is a real link into the site.
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
                Chrome outside. <span className="y2k-holo-text">Substance inside.</span>
              </>
            }
            body="An Apple Authorized Training Center run entirely by students — real curriculum, real Macs, real apps on the App Store. And it costs nothing."
          />
          {/* trust line + pill */}
          <Reveal delay={220} className="mt-6 flex flex-wrap items-center gap-4">
            <span className="y2k-pill">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: holo, boxShadow: "0 0 8px rgba(255,122,209,0.8)" }} />
              Funded by the university · run by volunteers
            </span>
            <span className="y2k-pill" style={{ background: "linear-gradient(180deg,#fff,#eaf3ff)" }}>Audited every sem</span>
          </Reveal>
          {/* floating deco star */}
          <div aria-hidden className="absolute -top-4 right-0 hidden rotate-6 lg:block">
            <div className="y2k-card gpu animate-float px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#6f6a9e]">
              ★ rated by members
            </div>
          </div>
        </div>

        <Reveal variant="scale" delay={120} className="mt-12">
          <div
            ref={scrub}
            className="scrub y2k-section relative overflow-hidden rounded-[36px] border border-white/80"
            style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 30px 70px -30px rgba(120,110,255,0.55), 0 18px 44px -22px rgba(255,122,209,0.4)" }}
          >
            {/* scroll progress bar with traveling shine */}
            <div aria-hidden className="absolute inset-x-0 top-0 z-20 h-1.5 bg-white/50">
              <div
                className="gpu relative h-full w-full origin-left"
                style={{ transform: "scaleX(var(--scrub, 0))", background: holo }}
              >
                <span className="sweep absolute inset-0" />
              </div>
            </div>

            {/* ---- pastel holo field (hue scrubs with scroll) ---- */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              {/* y2k perspective grid, slowly scrolling hue */}
              <div
                className="y2k-grid absolute inset-0"
                style={{ filter: "hue-rotate(calc(var(--scrub, 0) * 60deg))", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)" }}
              />
              {/* soft aurora wash */}
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 120%, rgba(255,122,209,0.22), transparent 55%), radial-gradient(ellipse at 50% -20%, rgba(122,217,255,0.4), transparent 50%)" }} />
              {/* holo blobs */}
              <div className="gpu animate-morph absolute -left-16 -top-20 h-72 w-72 rounded-full opacity-50 blur-3xl" style={{ background: holo }} />
              <div className="gpu animate-morph absolute -bottom-24 right-[8%] h-80 w-80 rounded-full opacity-40 blur-3xl" style={{ background: "linear-gradient(135deg,#ffd166,#ff7ad1)", animationDelay: "-8s" }} />
              {/* chrome ring + orbiting bead */}
              <div className="gpu absolute -left-24 bottom-[14%] h-64 w-64" style={{ animation: "y2k-spin 48s linear infinite" }}>
                <span
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "2px solid transparent",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(154,140,255,0.45)) border-box",
                    WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    boxShadow: "0 10px 30px -14px rgba(120,110,255,0.5)",
                  }}
                />
                <span
                  className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ background: "radial-gradient(circle at 32% 28%, #fff, #9a8cff 60%, #5b4bd9)", boxShadow: "0 0 14px rgba(154,140,255,0.9)" }}
                />
              </div>
              {/* y2k sparkle stars */}
              {stars.map((s, i) => (
                <span
                  key={i}
                  className="y2k-star gpu animate-pulse-soft absolute"
                  style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.d }}
                />
              ))}
              {/* scroll-driven watermark strip */}
              <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                <div
                  className="gpu flex w-max items-center whitespace-nowrap will-change-transform"
                  style={{ transform: "translateX(calc((0.5 - var(--scrub, 0)) * 26vw))" }}
                >
                  {watermarkWords.map((w, i) => (
                    <span key={i} className="flex items-center">
                      <span className="display y2k-chrome-text px-6 font-mono text-[7rem] font-bold uppercase leading-none tracking-tight opacity-70">
                        {w}
                      </span>
                      <span className="font-mono text-5xl text-[#9a8cff]/40">·</span>
                    </span>
                  ))}
                </div>
              </div>
              {/* rotating dashed ring */}
              <div
                className="gpu absolute -right-24 -top-24 h-72 w-72 rounded-full border-2 border-dashed border-[#9a8cff]/30"
                style={{ animation: "y2k-spin 40s linear infinite" }}
              />
              <div
                className="gpu absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-[#ff7ad1]/25"
                style={{ animation: "y2k-spin 55s linear infinite reverse" }}
              />
            </div>

            {/* ---- cards (gentle float) ---- */}
            <div className="relative grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6 lg:grid-cols-4">
              {items.map((it, i) => (
                <Reveal key={it.n} delay={i * 90} className="h-full">
                  <a
                    href={it.href}
                    data-cursor="hot"
                    aria-label={`${it.label} — ${it.link}`}
                    className="y2k-card sheen group relative flex h-full flex-col justify-between gap-5 overflow-hidden !rounded-[22px] p-5 sm:p-6"
                    style={{ animation: `float ${8 + i * 1.3}s ease-in-out ${-i * 1.7}s infinite` }}
                  >
                    {/* per-card holo tint */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-[0.12]"
                      style={{ background: holo }}
                    />
                    <span className="relative flex items-start justify-between">
                      {it.orb}
                      <span className="font-mono text-[11px] tracking-[0.2em] text-[#6f6a9e]/60">/{it.n}</span>
                    </span>
                    <span className="relative">
                      <span className="display y2k-chrome-text block text-4xl tracking-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.9)] sm:text-[2.6rem]">
                        {it.label}
                      </span>
                      <span className="mt-1 block text-[12.5px] font-medium text-[#4c4a72]">{it.sub}</span>
                      <span className="mt-4 block">{it.detail}</span>
                      <span className="mt-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#9a8cff] opacity-0 transition-all duration-500 group-hover:opacity-100">
                        {it.link}
                        <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* ---- ticker ---- */}
            <div className="y2k-marquee marquee-mask relative">
              <div className="marquee-track gpu animate-marquee flex w-max items-center gap-10 py-3 pr-10">
                {[...ticker, ...ticker].map((t, i) => (
                  <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-white/90">{t}</span>
                    <span aria-hidden className="y2k-star h-3 w-3" />
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
