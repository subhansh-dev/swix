import { useCallback, useRef, useState } from "react";
import showcase from "@/assets/showcase-app.webp";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Orb } from "./ui/Orb";
import { useCanHover } from "@/hooks/useMedia";
import { cn } from "@/utils/cn";

const apps = [
  {
    name: "Campus",
    tagline: "Every event at Parul, one tap away.",
    stack: ["SwiftUI", "CloudKit", "WidgetKit"],
    stat: "4.8 ★ · 3.1k downloads",
    by: "Club · 2025",
  },
  {
    name: "Mess Mate",
    tagline: "Hostel mess menus, ratings & skip-meal credits.",
    stack: ["SwiftUI", "Swift Data", "Push"],
    stat: "2.4k weekly actives",
    by: "Club · 2026",
  },
  {
    name: "Pulse",
    tagline: "Attendance & timetable with Live Activities.",
    stack: ["ActivityKit", "Combine", "Charts"],
    stat: "Swift Student Challenge '25",
    by: "Club · 2024",
  },
  {
    name: "Raahi",
    tagline: "Shared auto-rickshaw rides across campus gates.",
    stack: ["MapKit", "Core Location", "StoreKit"],
    stat: "Incubated at PU IIC",
    by: "Club · 2026",
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
      className="webcore-tile gpu relative mx-auto w-full max-w-[420px] overflow-hidden !rounded-sm"
    >
      {/* titlebar */}
      <div className="win98-title flex items-center justify-between px-2 py-1">
        <span className="font-mono">campus_v2.3.app — preview</span>
        <span className="flex gap-1" aria-hidden>
          <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">_</span>
          <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">□</span>
          <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">×</span>
        </span>
      </div>
      <img
        src={showcase}
        alt="Campus app by Swift Coding Club running on iPhone"
        width={440}
        height={588}
        loading="lazy"
        decoding="async"
        className="aspect-[3/4] w-full object-cover"
      />
      {/* scanline gloss */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full"
        style={{ background: "repeating-linear-gradient(180deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px)" }}
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#060607]/90 to-transparent p-6 pt-10">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00ffaa]">Featured build</p>
          <p className="mt-1 text-xl font-bold tracking-tight text-[#e6e6e2]">Campus · v2.3</p>
        </div>
        <span className="win98-btn">On App Store</span>
      </div>
    </div>
  );
}

export function Showcase() {
  const [active, setActive] = useState(0);
  return (
    <section id="showcase" className="webcore-section cv-auto relative overflow-hidden py-24 sm:py-32">
      {/* starfield backdrop */}
      <div aria-hidden className="webcore-stars pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 45% at 85% 0%, rgba(0,255,170,0.06), transparent 60%)" }}
      />

      <div className="container-x relative">
        <SectionHeader
          index="03"
          eyebrow="Student showcase"
          dark
          title={
            <span className="text-[#e6e6e2]">
              Real apps. Real users. <span className="text-[#00ffaa]">Built between lectures.</span>
            </span>
          }
          body={
            <span className="text-white/60">
              Every app below was designed, built and submitted by Parul students in a single semester. Some are on
              the App Store. Some are used by thousands on campus every week.
            </span>
          }
        />

        <div className="mt-16 grid items-center gap-12 lg:mt-24 lg:grid-cols-12">
          <Reveal variant="scale" className="lg:col-span-5">
            <div className="relative">
              <TiltPhone />
              {/* ios orb coin, floating over the phone */}
              <div className="absolute right-0 top-6 z-10 sm:-right-2">
                <div className="webcore-tile gpu animate-float flex items-center gap-2.5 !rounded-sm py-1.5 pl-1.5 pr-4" style={{ animationDelay: "-6s" }}>
                  <Orb variant="ios" box={32} size="small" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">iOS 19 ready</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pl-8">
            {/* directory header */}
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#00ffaa]/70">
              C:\\club\\showcase&gt; dir *.app /b
            </p>
            <ul className="divide-y divide-[#2a2a2e] border-y border-[#2a2a2e]" role="list">
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
                      <span className={cn("pt-2 font-mono text-[11px] tracking-[0.2em] transition-colors", isActive ? "text-[#00ffaa]" : "text-white/30")}>
                        0{i + 1}
                      </span>
                      <span>
                        <span className="flex items-center gap-3">
                          <span
                            className={cn(
                              "text-2xl font-bold tracking-tight transition-colors sm:text-3xl",
                              isActive ? "text-[#00ffaa]" : "text-[#e6e6e2]/80 group-hover:text-[#e6e6e2]"
                            )}
                          >
                            {a.name}
                          </span>
                          <span className="win98-btn hidden !text-[9px] !font-normal sm:inline-block">{a.by}</span>
                        </span>
                        <span className={cn("mt-1 block text-[15px] text-white/50 transition-colors", isActive && "text-white/70")}>{a.tagline}</span>
                        <span
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out-expo)]",
                            isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          )}
                        >
                          <span className="overflow-hidden">
                            <span className="mt-4 flex flex-wrap items-center gap-2">
                              {a.stack.map((s) => (
                                <span key={s} className="rounded-none border border-[#2a2a2e] bg-[#101014] px-2 py-1 font-mono text-[10.5px] text-[#00ffaa]/90">
                                  {s}
                                </span>
                              ))}
                              <span className="ml-1 font-mono text-[11px] font-semibold text-[#00ffaa]">{a.stat}</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span
                        className={cn(
                          "mt-1 flex h-9 w-9 items-center justify-center rounded-sm border transition-all duration-500",
                          isActive ? "border-[#00ffaa] bg-[#00ffaa]/15 text-[#00ffaa]" : "border-[#2a2a2e] text-white/40"
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
              <a
                href="#stories"
                className="inline-flex items-center gap-2 rounded-sm border border-[#00ffaa]/60 bg-[#00ffaa]/10 px-5 py-2.5 font-mono text-sm font-bold text-[#00ffaa] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00ffaa]/20"
                style={{ boxShadow: "0 0 22px -8px rgba(0,255,170,0.6)" }}
              >
                Build the next one →
              </a>
              <a href="#stories" className="link-u font-mono text-sm font-semibold text-white/60 hover:text-[#00ffaa]">
                Read how they did it →
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
