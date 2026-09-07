import { useCallback, useRef, useState } from "react";
import showcase from "@/assets/showcase-app.webp";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Deco, Sticker } from "./ui/Deco";
import { Orb } from "./ui/Orb";
import { useCanHover } from "@/hooks/useMedia";
import { cn } from "@/utils/cn";

const apps = [
  {
    name: "Campus",
    tagline: "Every event at Parul, one tap away.",
    stack: ["SwiftUI", "CloudKit", "WidgetKit"],
    stat: "4.8 ★ · 3.1k downloads",
    by: "Cohort 05",
    color: "bg-coral",
  },
  {
    name: "Mess Mate",
    tagline: "Hostel mess menus, ratings & skip-meal credits.",
    stack: ["SwiftUI", "Swift Data", "Push"],
    stat: "2.4k weekly actives",
    by: "Cohort 06",
    color: "bg-mint",
  },
  {
    name: "Pulse",
    tagline: "Attendance & timetable with Live Activities.",
    stack: ["ActivityKit", "Combine", "Charts"],
    stat: "Swift Student Challenge '25",
    by: "Cohort 04",
    color: "bg-lavender",
  },
  {
    name: "Raahi",
    tagline: "Shared auto-rickshaw rides across campus gates.",
    stack: ["MapKit", "Core Location", "StoreKit"],
    stat: "Incubated at PU IIC",
    by: "Cohort 06",
    color: "bg-lemon",
  },
];

function TiltPhone() {
  const canHover = useCanHover();
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!canHover || e.pointerType !== "mouse") return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      pos.current = { x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 };
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        const { x, y } = pos.current;
        el.style.transform = `perspective(1200px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(0)`;
      });
    },
    [canHover]
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0)";
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="gpu relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[32px] border-[3px] border-ink bg-paper shadow-[0_30px_60px_-24px_rgba(240,81,56,0.4)] transition-transform duration-700 ease-[var(--ease-out-expo)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <img
        src={showcase}
        alt="Campus app by Swift Coding Club running on iPhone"
        width={440}
        height={588}
        loading="lazy"
        decoding="async"
        className="aspect-[3/4] w-full object-cover"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(240,81,56,0.15),transparent_40%)]" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70">Featured build</p>
          <p className="mt-1 text-xl font-bold tracking-tight text-ink">Campus · v2.3</p>
        </div>
        <span className="sticker !shadow-[0_3px_0_rgba(11,11,12,0.9)]" style={{ ["--r" as string]: "3deg", background: "#fff", color: "#0b0b0c" }}>
          On App Store
        </span>
      </div>
    </div>
  );
}

export function Showcase() {
  const [active, setActive] = useState(0);
  return (
    <section id="showcase" className="cv-auto relative overflow-hidden bg-sunset py-24 text-ink sm:py-32">
      <Deco variant="sunset" />
      <div className="container-x relative">
        <SectionHeader
          index="03"
          eyebrow="Student showcase"
          title={
            <>
              Real apps. Real users. <span className="text-gradient">Built between lectures.</span>
            </>
          }
          body="Every app below was designed, built and submitted by Parul students in a single semester. Some are on the App Store. Some are used by thousands on campus every week."
        />

        <div className="mt-16 grid items-center gap-12 lg:mt-24 lg:grid-cols-12">
          <Reveal variant="scale" className="lg:col-span-5">
            <div className="relative">
              <TiltPhone />
              {/* ios orb coin, floating over the phone */}
              <div className="absolute right-0 top-6 z-10 sm:-right-2">
                <div
                  className="gpu animate-float flex items-center gap-2.5 rounded-full bg-ink py-1.5 pl-1.5 pr-4 shadow-[0_18px_40px_-18px_rgba(11,11,12,0.65)]"
                  style={{ animationDelay: "-6s" }}
                >
                  <Orb variant="ios" box={32} size="small" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">iOS 19 ready</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pl-8">
            <ul className="divide-y-[3px] divide-ink/15 border-y-[3px] border-ink/15" role="list">
              {apps.map((a, i) => {
                const isActive = active === i;
                return (
                  <Reveal as="li" key={a.name} delay={i * 80}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                      className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-5 py-6 text-left sm:gap-8"
                    >
                      <span className={cn("pt-2 font-mono text-[11px] tracking-[0.2em] transition-colors", isActive ? "text-swift" : "text-ink/30")}>
                        0{i + 1}
                      </span>
                      <span>
                        <span className="flex items-center gap-3">
                          <span className={cn("text-2xl font-bold tracking-tight transition-colors sm:text-3xl", isActive ? "text-ink" : "text-ink/70 group-hover:text-ink")}>
                            {a.name}
                          </span>
                          <span className={cn("sticker hidden !shadow-[0_2px_0_rgba(11,11,12,0.8)] sm:inline", a.color, isActive ? "text-ink" : "text-ink/70")}>
                            {a.by}
                          </span>
                        </span>
                        <span className={cn("mt-1 block text-[15px] text-ink/55 transition-colors", isActive && "text-ink/80")}>{a.tagline}</span>
                        <span
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out-expo)]",
                            isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          )}
                        >
                          <span className="overflow-hidden">
                            <span className="mt-4 flex flex-wrap items-center gap-2">
                              {a.stack.map((s) => (
                                <span key={s} className="rounded-md bg-white/85 px-2 py-1 font-mono text-[11px] text-ink/75 border border-ink/10">
                                  {s}
                                </span>
                              ))}
                              <span className="ml-1 font-mono text-[11px] text-swift-deep">{a.stat}</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span
                        className={cn(
                          "mt-1 flex h-9 w-9 items-center justify-center rounded-full border-[2px] transition-all duration-500",
                          isActive ? "rotate-0 border-swift bg-swift text-white" : "-rotate-45 border-ink/30 text-ink/50"
                        )}
                        aria-hidden
                      >
                        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </ul>
            <Reveal delay={320} className="mt-8 flex flex-wrap items-center gap-4">
              <Sticker rotate={-2} color="bg-swift text-white">Build the next one →</Sticker>
              <a href="#stories" className="link-u text-sm font-semibold text-swift-deep hover:text-ink">
                Read how they did it →
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
