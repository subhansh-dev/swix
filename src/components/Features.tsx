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
  tint: string;
  accent: string;
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
    tint: "card-coral",
    accent: "bg-swift",
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
    tint: "card-lavender",
    accent: "bg-swift-deep",
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
    tint: "card-mint",
    accent: "bg-swift",
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
    tint: "card-lemon",
    accent: "bg-swift-deep",
  },
];

function FeatureCard({ f, i }: { f: Feature; i: number }) {
  const { onPointerMove } = useSpotlight<HTMLDivElement>();
  return (
    <Reveal delay={i * 90} className={cn("h-full", f.span)}>
      <Tilt max={7} lift={20} className="h-full">
        <div
          onPointerMove={onPointerMove}
          className={cn("sheen spotlight card-lift grain group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border-[3px] border-ink p-7 shadow-[0_10px_0_rgba(11,11,12,0.9)] sm:p-9", f.tint)}
        >
          {/* colorful corner shape */}
          <div aria-hidden className={cn("pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-60 blur-3xl", f.accent)} />
          <div className="relative flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-[2px] border-ink bg-white text-ink">
              {f.icon}
            </div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-ink/60">{f.n}</span>
          </div>
        <div className="mt-14">
          <span className="eyebrow !text-swift">{f.tag}</span>
          <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-[1.7rem]">{f.title}</h3>
          <p className="mt-3 max-w-md text-pretty text-[15px] leading-relaxed text-muted">{f.body}</p>
        </div>
        </div>
      </Tilt>
    </Reveal>
  );
}

export function Features() {
  return (
    <section id="program" className="cv-auto py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader
          index="01"
          eyebrow="The program"
          title={
            <>
              Built like a studio, <span className="text-muted">not a lecture hall.</span>
            </>
          }
          body="Everything is structured around a single question: can you ship? Four pillars, one semester, and a portfolio that speaks before you do."
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
