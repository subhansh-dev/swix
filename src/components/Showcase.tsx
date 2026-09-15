import { useCallback, useRef, useState } from "react";
import showcase from "@/assets/showcase-app.webp";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Orb } from "./ui/Orb";
import { useCanHover } from "@/hooks/useMedia";
import { cn } from "@/utils/cn";

const holo = "linear-gradient(135deg,#7ad9ff,#9a8cff 30%,#ff7ad1 55%,#ffb35c 78%,#67e0a8)";

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
      className="gpu relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[32px] bg-white shadow-[0_30px_70px_-24px_rgba(120,110,255,0.6),0_18px_44px_-22px_rgba(255,122,209,0.5)] transition-transform duration-700 ease-[var(--ease-out-expo)]"
      style={{
        transformStyle: "preserve-3d",
        /* chrome bezel */
        border: "3px solid transparent",
        background:
          "linear-gradient(160deg, #ffffff, #eef2ff 60%, #ffe4f4) padding-box, linear-gradient(135deg,#cfe4ff,#9a8cff 35%,#ff9ade 65%,#ffe29a) border-box",
      }}
    >
      <img
        src={showcase}
        alt="Campus app by Swift Coding Club running on iPhone"
        width={440}
        height={588}
        loading="lazy"
        decoding="async"
        className="aspect-[3/4] w-full rounded-[28px] object-cover"
      />
      {/* holo gloss */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[28px]"
        style={{ background: "linear-gradient(125deg, rgba(255,255,255,0.5), transparent 38%)", mixBlendMode: "overlay" }}
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6f6a9e]">Featured build</p>
          <p className="y2k-chrome-text mt-1 text-xl font-bold tracking-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]">
            Campus · v2.3
          </p>
        </div>
        <span className="y2k-pill" style={{ background: "linear-gradient(180deg,#fff,#ffe9f6)" }}>
          On App Store
        </span>
      </div>
    </div>
  );
}

export function Showcase() {
  const [active, setActive] = useState(0);
  return (
    <section id="showcase" className="y2k-section cv-auto relative overflow-hidden py-24 sm:py-32">
      {/* y2k backdrops */}
      <div aria-hidden className="y2k-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="gpu absolute -left-24 top-1/4 h-72 w-72 rounded-full opacity-40 blur-3xl" style={{ background: holo, animation: "y2k-spin 46s linear infinite" }} />
        <span className="gpu absolute -right-20 bottom-10 h-64 w-64 rounded-full opacity-35 blur-3xl" style={{ background: "linear-gradient(135deg,#ffd166,#ff7ad1)", animation: "y2k-spin 38s linear infinite reverse" }} />
        <span className="y2k-star absolute right-[14%] top-16 h-6 w-6 animate-pulse-soft" />
        <span className="y2k-star absolute left-[8%] bottom-24 h-4 w-4 animate-pulse-soft" style={{ animationDelay: "1.4s" }} />
      </div>

      <div className="container-x relative">
        <SectionHeader
          index="03"
          eyebrow="Student showcase"
          title={
            <span className="text-[#2a2850]">
              Real apps. Real users. <span className="y2k-holo-text">Built between lectures.</span>
            </span>
          }
          body={
            <span className="text-[#5b588a]">
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
                <div className="y2k-card gpu animate-float flex items-center gap-2.5 !rounded-full py-1.5 pl-1.5 pr-4" style={{ animationDelay: "-6s" }}>
                  <Orb variant="ios" box={32} size="small" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f6a9e]">iOS 19 ready</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pl-8">
            <ul className="divide-y divide-[#9a8cff]/25 border-y border-[#9a8cff]/25" role="list">
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
                      <span className={cn("pt-2 font-mono text-[11px] tracking-[0.2em] transition-colors", isActive ? "text-[#9a8cff]" : "text-[#9a8cff]/40")}>
                        0{i + 1}
                      </span>
                      <span>
                        <span className="flex items-center gap-3">
                          <span
                            className={cn(
                              "text-2xl font-bold tracking-tight transition-colors sm:text-3xl",
                              isActive ? "y2k-holo-text" : "text-[#4c4a72] group-hover:text-[#2a2850]"
                            )}
                          >
                            {a.name}
                          </span>
                          <span className={cn("y2k-pill hidden sm:inline-flex", !isActive && "opacity-70")}>{a.by}</span>
                        </span>
                        <span className={cn("mt-1 block text-[15px] text-[#5b588a]/80 transition-colors", isActive && "text-[#4c4a72]")}>{a.tagline}</span>
                        <span
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out-expo)]",
                            isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          )}
                        >
                          <span className="overflow-hidden">
                            <span className="mt-4 flex flex-wrap items-center gap-2">
                              {a.stack.map((s) => (
                                <span key={s} className="y2k-pill !text-[10px]">
                                  {s}
                                </span>
                              ))}
                              <span className="ml-1 font-mono text-[11px] font-semibold text-[#c255a8]">{a.stat}</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span
                        className={cn(
                          "y2k-orb mt-1 flex h-9 w-9 items-center justify-center transition-all duration-500",
                          isActive ? "rotate-0" : "-rotate-45 opacity-60"
                        )}
                        style={isActive ? { background: holo, boxShadow: "0 10px 24px -10px rgba(255,122,209,0.7)" } : undefined}
                        aria-hidden
                      >
                        <svg className="h-4 w-4 text-white" viewBox="0 0 16 16" fill="none">
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
                className="y2k-card inline-flex items-center gap-2 !rounded-full px-5 py-2.5 text-sm font-semibold text-[#2a2850] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Build the next one →
              </a>
              <a href="#stories" className="link-u text-sm font-semibold text-[#9a5bd9] hover:text-[#2a2850]">
                Read how they did it →
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
