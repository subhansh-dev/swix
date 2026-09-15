import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { useSpotlight } from "@/hooks/useSpotlight";
import { Tilt } from "./ui/Tilt";
import { cn } from "@/utils/cn";

type Feature = {
  n: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  span?: string;
  tag: string;
  glow: string;
  hover: string;
};

const stroke = { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };

const features: Feature[] = [
  {
    n: "01",
    tag: "Weekly · Thu 5pm",
    title: "Hands-on Swift labs",
    body: "No slideware. Every session you open Xcode, write Swift, and leave with something that runs. From optionals to async/await to SwiftUI layout.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </svg>
    ),
    span: "lg:col-span-7",
    glow: "rgba(226,255,46,0.5)",
    hover: "rgba(226,255,46,0.85)",
  },
  {
    n: "02",
    tag: "1:1 · Senior devs",
    title: "Mentorship that ships",
    body: "Paired with a senior who has already shipped. Code reviews, architecture help, and honest feedback before your TestFlight build.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20a6.5 6.5 0 0113 0M16 4a3.5 3.5 0 010 7M21.5 20a6.5 6.5 0 00-5-6.3" />
      </svg>
    ),
    span: "lg:col-span-5",
    glow: "rgba(139,123,255,0.5)",
    hover: "rgba(139,123,255,0.85)",
  },
  {
    n: "03",
    tag: "Semester · Capstone",
    title: "One app, start to store",
    body: "Ideation, Figma, SwiftUI, Core Data, CloudKit, App Review. You'll go through the full lifecycle once — so you can do it forever.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    ),
    span: "lg:col-span-5",
    glow: "rgba(255,61,242,0.4)",
    hover: "rgba(255,61,242,0.8)",
  },
  {
    n: "04",
    tag: "Hackathons · Swift Student Challenge",
    title: "Compete, then get hired",
    body: "We prep teams for the Apple Swift Student Challenge and national hackathons, and run mock interviews with iOS engineers from top studios.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <path d="M8 21h8M12 17v4M6 4h12v4a6 6 0 01-12 0V4zM6 6H3.5a2.5 2.5 0 002.5 4M18 6h2.5A2.5 2.5 0 0118 10" />
      </svg>
    ),
    span: "lg:col-span-7",
    glow: "rgba(0,255,170,0.4)",
    hover: "rgba(0,255,170,0.8)",
  },
];

function FeatureCard({ f, i }: { f: Feature; i: number }) {
  const { onPointerMove } = useSpotlight<HTMLDivElement>();
  return (
    <Reveal delay={i * 90} className={cn("h-full", f.span)}>
      <Tilt max={7} lift={20} className="h-full">
        <div
          onPointerMove={onPointerMove}
          className="acid-card acid-grid card-lift group relative flex h-full flex-col justify-between overflow-hidden p-7 transition-shadow duration-500 sm:p-9"
          style={{ boxShadow: `0 0 0 1px rgba(0,0,0,0.6), 0 0 34px -14px ${f.glow}` }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 0 1px rgba(0,0,0,0.6), 0 0 52px -10px ${f.hover}`; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 0 1px rgba(0,0,0,0.6), 0 0 34px -14px ${f.glow}`; }}
        >
          {/* wireframe corner brackets */}
          <span aria-hidden className="pointer-events-none absolute right-3 top-3 font-mono text-lg text-[#e2ff2e]/40">+</span>
          <span aria-hidden className="pointer-events-none absolute bottom-3 left-3 font-mono text-lg text-[#e2ff2e]/40">+</span>

          <div className="relative flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[#e2ff2e]/60 bg-[#e2ff2e]/10 text-[#e2ff2e] shadow-[0_0_20px_-6px_rgba(226,255,46,0.6)]">
              {f.icon}
            </div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#e2ff2e]/50">{f.n}</span>
          </div>
          <div className="mt-14">
            <span className="acid-chip">{f.tag}</span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#f2f2f0] sm:text-[1.7rem]">{f.title}</h3>
            <p className="mt-3 max-w-md text-pretty text-[15px] leading-relaxed text-white/60">{f.body}</p>
          </div>
        </div>
      </Tilt>
    </Reveal>
  );
}

export function Features() {
  return (
    <section id="program" className="acid-section cv-auto relative overflow-hidden py-24 sm:py-32">
      {/* acid backdrops: warped checker + wireframe grid */}
      <div aria-hidden className="acid-checker pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_80%_0%,black,transparent_60%)]" />
      <div aria-hidden className="acid-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_10%_100%,black,transparent_65%)]" />
      {/* flickering wireframe orb */}
      <div
        aria-hidden
        className="gpu animate-acid-flicker pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full border border-[#e2ff2e]/25"
        style={{ boxShadow: "0 0 80px -30px rgba(226,255,46,0.4) inset" }}
      />

      <div className="container-x relative">
        <SectionHeader
          index="01"
          eyebrow="The program"
          dark
          title={
            <span className="text-[#f2f2f0]">
              Built like a studio, <span className="acid-lime">not a lecture hall.</span>
            </span>
          }
          body={
            <span className="text-white/60">
              Everything is structured around a single question: can you ship? Four pillars, one semester, and a
              portfolio that speaks before you do.
            </span>
          }
        />
        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-12">
          {features.map((f, i) => (
            <FeatureCard key={f.n} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
