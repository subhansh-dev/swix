import { useEffect, useRef } from "react";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { cn } from "@/utils/cn";

const steps = [
  { w: "Week 01", t: "Zero to Xcode", d: "Install, navigate, run your first Playground. Optionals, types and functions — the Swift core, hands on keys.", tag: "Fundamentals" },
  { w: "Week 03", t: "Your first screen", d: "SwiftUI layouts, stacks and modifiers. Rebuild a real app's home screen pixel for pixel until it feels obvious.", tag: "SwiftUI" },
  { w: "Week 05", t: "Data that persists", d: "SwiftData models, @Query, CloudKit sync. Your app now remembers things across launches and devices.", tag: "Data" },
  { w: "Week 07", t: "Networking & async", d: "URLSession, async/await, JSON decoding, error states. You'll wire a live API and handle it failing gracefully.", tag: "Async" },
  { w: "Week 09", t: "Polish pass", d: "Motion, haptics, widgets, Live Activities, Dark Mode and accessibility. The difference between a demo and a product.", tag: "Craft" },
  { w: "Week 11", t: "TestFlight beta", d: "Ship to 50 real users on campus. Collect crashes through Xcode Organizer, triage, and cut a second build in a week.", tag: "Beta" },
  { w: "Week 13", t: "App Review", d: "Icons, screenshots, privacy manifests, metadata. We walk the submission checklist together, twice if needed.", tag: "Submit" },
  { w: "Week 14", t: "Demo Day", d: "Present to students, faculty and visiting engineers. Winners get incubation referrals and interview fast-tracks.", tag: "Launch" },
];

/** Timeline — Acid: wireframe rail, acid lime glow, checkerboard, flicker. */
export function Timeline() {
  const wrap = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (bar.current) bar.current.style.transform = "scaleY(1)";
      return;
    }
    let raf = 0;
    const update = () => {
      ticking.current = false;
      const el = wrap.current;
      const b = bar.current;
      if (!el || !b) return;
      const r = el.getBoundingClientRect();
      const start = window.innerHeight * 0.75;
      const p = Math.min(1, Math.max(0, (start - r.top) / (r.height * 0.85)));
      b.style.transform = `scaleY(${p.toFixed(3)})`;
    };
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="journey" className="acid-section cv-auto relative overflow-hidden py-24 sm:py-32">
      {/* acid backdrops */}
      <div aria-hidden className="acid-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]" />
      <div aria-hidden className="acid-checker pointer-events-none absolute inset-x-0 top-0 h-24 opacity-60" />
      <div aria-hidden className="acid-checker pointer-events-none absolute inset-x-0 bottom-0 h-24 rotate-180 opacity-60" />
      <div
        aria-hidden
        className="gpu animate-acid-flicker pointer-events-none absolute -left-24 bottom-1/4 h-80 w-80 rounded-full border border-[#8b7bff]/30"
        style={{ boxShadow: "0 0 90px -30px rgba(139,123,255,0.5) inset" }}
      />

      <div className="container-x relative">
        <SectionHeader
          index="06"
          eyebrow="The 14-week sprint"
          dark
          title={
            <span className="text-[#f2f2f0]">
              From <span className="acid-lime">print(&quot;Hello&quot;)</span> to a live App Store link.
            </span>
          }
          body={
            <span className="text-white/60">
              One semester. Eight milestones. Every Thursday, 5pm, Block B — and a product in your hands by Demo Day.
            </span>
          }
        />

        <div ref={wrap} className="relative mt-16 lg:mt-24">
          {/* rail */}
          <div aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-white/15 sm:left-[11px]">
            <div
              ref={bar}
              className="gpu h-full w-px origin-top"
              style={{
                transform: "scaleY(0)",
                background: "linear-gradient(to bottom,#e2ff2e,#8b7bff 60%,rgba(255,255,255,0.1))",
                boxShadow: "0 0 12px rgba(226,255,46,0.7)",
              }}
            />
          </div>

          <ol className="space-y-10 sm:space-y-12">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.w} delay={i * 70} className="group relative pl-10 sm:pl-14">
                <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center sm:h-6 sm:w-6">
                  <span
                    className="absolute h-full w-full animate-ping-ring rounded-full"
                    style={{ background: "rgba(226,255,46,0.2)", animationDelay: `${i * 0.35}s` }}
                  />
                  <span
                    className="relative h-2 w-2 rounded-full transition-transform duration-500 group-hover:scale-150 sm:h-2.5 sm:w-2.5"
                    style={{
                      background: i % 2 ? "#8b7bff" : "#e2ff2e",
                      boxShadow: `0 0 14px 3px ${i % 2 ? "rgba(139,123,255,0.55)" : "rgba(226,255,46,0.55)"}`,
                    }}
                  />
                </span>

                <div className="grid gap-3 sm:grid-cols-[120px_1fr_160px] sm:items-baseline sm:gap-8">
                  <span
                    className="font-mono text-[11px] uppercase tracking-[0.2em]"
                    style={{ color: i % 2 ? "#8b7bff" : "#e2ff2e" }}
                  >
                    {s.w}
                  </span>
                  <div>
                    <h3 className="text-balance text-xl font-bold tracking-tight text-[#f2f2f0] sm:text-[1.6rem]">{s.t}</h3>
                    <p className="mt-2 max-w-xl text-pretty text-[15px] leading-relaxed text-white/60">{s.d}</p>
                  </div>
                  <span
                    className={cn(
                      "inline-flex w-fit items-center rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em]",
                      i % 3 === 0 && "border-[#e2ff2e]/60 bg-[#e2ff2e]/10 text-[#e2ff2e]",
                      i % 3 === 1 && "border-[#8b7bff]/60 bg-[#8b7bff]/10 text-[#b7aaff]",
                      i % 3 === 2 && "border-white/25 bg-white/5 text-white/70"
                    )}
                  >
                    {s.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={200} className="mt-16 flex flex-wrap items-center gap-4">
          <a
            href="#join"
            className="inline-flex items-center rounded-md border border-[#e2ff2e] bg-[#e2ff2e] px-6 py-3.5 text-sm font-bold tracking-tight text-[#0c0c0d] transition-transform duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: "0 0 30px -8px rgba(226,255,46,0.7)" }}
          >
            Start Week 01
          </a>
          <span className="acid-tag">No experience needed</span>
          <span className="acid-chip">14 weeks · one app</span>
        </Reveal>
      </div>
    </section>
  );
}
