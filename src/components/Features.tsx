import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Tilt } from "./ui/Tilt";
import { cn } from "@/utils/cn";

type Feature = {
  n: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  span?: string;
  tag: string;
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
  },
];

function FeatureCard({ f, i }: { f: Feature; i: number }) {
  return (
    <Reveal delay={i * 90} className={cn("h-full", f.span)}>
      <Tilt max={7} lift={20} className="h-full">
        <div className="webcore-tile card-lift flex h-full flex-col overflow-hidden transition-shadow duration-500">
          <div className="win98-title flex items-center justify-between px-2 py-1">
            <span className="truncate font-mono">lab_module_{f.n}.swift</span>
            <span className="flex gap-1" aria-hidden>
              <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">_</span>
              <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">×</span>
            </span>
          </div>

          <div className="relative flex flex-1 flex-col justify-between p-7 sm:p-9">
            <div className="flex items-start justify-between">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-sm border border-[#F05138]/50 bg-[#F05138]/10 text-[#F05138]"
                style={{ boxShadow: "0 0 20px -8px rgba(240,81,56,0.4)" }}
              >
                {f.icon}
              </div>
              <span className="font-mono text-[11px] tracking-[0.2em] text-[#F05138]/50">{f.n}</span>
            </div>
            <div className="mt-14">
              <span className="inline-flex items-center rounded-none border border-[#F05138]/40 bg-[#F05138]/10 px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#F05138]">
                {f.tag}
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-[1.7rem]">{f.title}</h3>
              <p className="mt-3 max-w-md text-pretty font-mono text-[13.5px] leading-relaxed text-muted">{f.body}</p>
            </div>
          </div>

          <div className="win98-out flex items-center justify-between bg-paper-2 px-3 py-1 font-mono text-[9px] text-ink">
            <span>module {f.n} loaded</span>
            <span>ready</span>
          </div>
        </div>
      </Tilt>
    </Reveal>
  );
}

export function Features() {
  return (
    <section id="program" className="webcore-section cv-auto relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="webcore-stars pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 45% at 15% 0%, rgba(240,81,56,0.06), transparent 60%)" }}
      />

      <div className="container-x relative">
        <SectionHeader
          index="01"
          eyebrow="The program"
          title={
            <span className="text-ink">
              Built like a studio, <span className="text-[#F05138]">not a lecture hall.</span>
            </span>
          }
          body={
            <span className="text-muted">
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
