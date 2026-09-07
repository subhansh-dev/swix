import { useEffect, useState } from "react";
import heroVisual from "@/assets/hero-visual.webp";
import { Reveal } from "./ui/Reveal";
import { LiquidBlobs } from "./ui/LiquidBlobs";
import { Magnetic } from "./ui/Magnetic";
import { Sticker, Squiggle, Deco } from "./ui/Deco";
import { useReducedMotion } from "@/hooks/useMedia";
import { useParallax } from "@/hooks/useParallax";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/utils/cn";

const codeLines = [
  { t: "import", cls: "code-token-k", rest: " SwiftUI" },
  { t: "", cls: "", rest: "" },
  { t: "struct", cls: "code-token-k", rest: " ClubApp: App {" },
  { t: "  var", cls: "code-token-k", rest: " body: some Scene {" },
  { t: "    WindowGroup", cls: "code-token-t", rest: " {" },
  { t: "      ShipIt", cls: "code-token-t", rest: "(campus: \"Parul\")" },
  { t: "    }", cls: "", rest: "" },
  { t: "  }", cls: "", rest: "" },
  { t: "}", cls: "", rest: "" },
];

function CodeCard() {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? codeLines.length : 0);
  useEffect(() => {
    if (reduce) return setShown(codeLines.length);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= codeLines.length) clearInterval(id);
    }, 190);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="liquid-dark grain gpu relative w-full rounded-[20px] p-4 font-mono text-[11.5px] leading-[1.65] text-white/90 sm:text-[12.5px] sm:leading-6">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2.5 text-[10px] text-white/40">ClubApp.swift</span>
        <span className="ml-auto rounded-md bg-swift/25 px-2 py-0.5 text-[9px] font-medium tracking-wide text-swift-soft">
          Build Succeeded
        </span>
      </div>
      <pre className="overflow-hidden whitespace-pre">
        {codeLines.slice(0, shown).map((l, i) => (
          <div key={i} className="flex">
            <span className="mr-3.5 w-3.5 select-none text-right text-white/25">{i + 1}</span>
            <span>
              <span className={l.cls}>{l.t}</span>
              <span>{l.rest}</span>
            </span>
          </div>
        ))}
        {shown < codeLines.length && <span className="ml-7 inline-block h-3.5 w-[6px] translate-y-0.5 bg-swift animate-blink" />}
      </pre>
    </div>
  );
}

function Stat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div className="py-4 pl-4 first:pl-0">
      <div className="text-2xl font-bold tracking-tight sm:text-3xl">
        <span ref={ref}>{v}</span>
        {suffix}
      </div>
      <div className="mt-1 text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted">{label}</div>
    </div>
  );
}

const chips = [
  {
    label: "SwiftUI",
    bg: "rgba(255,255,255,0.72)",
    fg: "text-ink",
    cls: "left-2 top-14 sm:-left-6 sm:top-16",
    d: "translateZ(90px)",
    delay: "0s",
  },
  {
    label: "TestFlight ✓",
    bg: "linear-gradient(135deg,#F05138,#D63F27)",
    fg: "text-white",
    cls: "right-2 top-6 sm:-right-5 sm:top-8",
    d: "translateZ(70px)",
    delay: "-2s",
  },
  {
    label: "App Store",
    bg: "rgba(11,11,12,0.92)",
    fg: "text-white",
    cls: "left-4 bottom-44 sm:-left-7 sm:bottom-52",
    d: "translateZ(110px)",
    delay: "-4s",
  },
];

function HeroScene() {
  return (
    <div className="scene-3d relative mx-auto w-full max-w-[520px]">
      {/* depth layers — outer div owns positioning + Z, inner div owns the
          animation so keyframe transforms never overwrite each other */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[118%] w-[118%]"
        style={{ transform: "translate(-50%, -50%) translateZ(-120px)" }}
      >
        <div className="gpu animate-spin-slow absolute inset-0 rounded-full border border-ink/10" style={{ animationDuration: "30s" }}>
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-swift shadow-[0_0_28px_8px_rgba(240,81,56,0.4)]" />
        </div>
      </div>
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[78%] w-[78%]"
        style={{ transform: "translate(-50%, -50%) translateZ(-60px)" }}
      >
        <div className="gpu animate-drift absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(240,81,56,0.35),transparent)] blur-3xl" />
      </div>

      {/* main glass plate */}
      <div
        className="relative overflow-hidden rounded-[30px] p-2.5"
        style={{ transform: "translateZ(0)" }}
      >
        <div className="liquid grain relative overflow-hidden rounded-[24px]">
          <img
            src={heroVisual}
            alt="Abstract glass sculpture in Swift orange"
            width={620}
            height={620}
            fetchPriority="high"
            decoding="async"
            className="gpu animate-float-slow aspect-square w-full object-cover"
          />
          <div aria-hidden className="pointer-events-none absolute inset-5 border border-ink/10" />
          <span className="absolute left-6 top-6 font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink/55">fig. 01 — swift</span>
          <span className="absolute bottom-6 right-6 font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink/55">22.30°N 73.36°E</span>
        </div>
      </div>

      {/* floating liquid chips, each on its own Z layer */}
      {chips.map((c) => (
        <div
          key={c.label}
          className={c.cls}
          style={{ transform: c.d, position: "absolute" }}
        >
          <div
            className={cn("gpu animate-float rounded-full px-4 py-2 text-[12.5px] font-semibold backdrop-blur-xl shadow-[0_18px_40px_-18px_rgba(11,11,12,0.45)]", c.fg)}
            style={{ animationDelay: c.delay, background: c.bg }}
          >
            {c.label}
          </div>
        </div>
      ))}

      {/* code card overlapping bottom */}
      <div className="relative -mt-16 ml-[14%] w-[86%] sm:absolute sm:-bottom-16 sm:-left-8 sm:mt-0 sm:ml-0 sm:w-[76%]"
        style={{ transform: "translateZ(130px)" }}>
        <div className="gpu animate-float" style={{ animationDelay: "-3s" }}>
          <CodeCard />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const parallax = useParallax<HTMLDivElement>(34);
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 lg:pt-44 lg:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_72%)] opacity-50" />
        <LiquidBlobs />
        <Deco variant="warm" />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6">
            <Reveal className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/60 py-1.5 pl-1.5 pr-4 text-[12.5px] font-medium text-ink/80 backdrop-blur-xl">
              <span className="relative inline-flex h-6 items-center rounded-full bg-swift px-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white">
                <span className="absolute -left-1 -top-1 h-2.5 w-2.5 rounded-full bg-swift/60 animate-ping-ring" />
                New
              </span>
              Cohort 07 applications open · Spring 2026
            </Reveal>

            <h1 className="display relative text-balance text-[3.1rem] sm:text-6xl lg:text-[5.2rem] xl:text-[5.8rem]">
              <Reveal as="span" className="block" delay={60}>Learn Swift.</Reveal>
              <Reveal as="span" className="block" delay={140}>
                Ship real apps.
                <span className="absolute -right-6 top-2 hidden sm:inline"><Sticker rotate={12} color="bg-lemon text-ink">Free</Sticker></span>
              </Reveal>
              <Reveal as="span" className="block text-gradient" delay={220}>From Parul to the App&nbsp;Store.</Reveal>
            </h1>
            <Reveal delay={300} className="mt-4 flex flex-wrap items-center gap-3">
              <Sticker rotate={-3} color="bg-peach text-ink">Apple Authorized</Sticker>
              <Sticker rotate={2} color="bg-lavender text-ink">Swift Certified</Sticker>
              <Sticker rotate={-6} color="bg-mint text-ink">No Mac needed</Sticker>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-8 max-w-xl text-pretty text-[17px] leading-relaxed text-muted sm:text-lg">
                The student-run iOS studio at Parul University. Weekly hands-on labs, senior mentorship,
                and one goal per semester: a polished app with your name on it — free for every student.
              </p>
            </Reveal>

            <Reveal delay={400} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Magnetic>
                <a href="#join" className="btn btn-accent group">
                  Apply for Cohort 07
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </Magnetic>
              <Magnetic strength={0.22}>
                <a href="#showcase" className="btn btn-ghost">
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M5 3.5v9l7-4.5-7-4.5z" fill="currentColor" />
                  </svg>
                  See student apps
                </a>
              </Magnetic>
            </Reveal>

            <Reveal delay={480} className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-line border-y-[3px] border-ink/80 bg-white/60 backdrop-blur">
              <Stat value={300} suffix="+" label="Students trained" />
              <Stat value={38} label="Apps shipped" />
              <Stat value={12} label="App Store launches" />
            </Reveal>
            <Reveal delay={560} className="mt-6 flex items-center gap-3">
              <Squiggle color="#F05138" className="w-32" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Cohort 07 · Spring 2026</span>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div ref={parallax} style={{ transform: "translate3d(0, var(--py, 0px), 0)" }}>
              <Reveal variant="scale" delay={200}>
                <HeroScene />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
