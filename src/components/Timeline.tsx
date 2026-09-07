import { useEffect, useRef } from "react";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Deco, Sticker } from "./ui/Deco";
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
    <section id="journey" className="cv-auto relative overflow-hidden bg-warm py-24 text-ink sm:py-32">
      <Deco variant="sunset" />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-lines opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_65%)]" />
      </div>

      <div className="container-x relative">
        <SectionHeader
          index="06"
          eyebrow="The 14-week sprint"
          title={
            <>
              From <span className="text-gradient">print("Hello")</span> to a live App Store link.
            </>
          }
          body="One semester. Eight milestones. Every Thursday, 5pm, Block B — and a product in your hands by Demo Day."
        />

        <div ref={wrap} className="relative mt-16 lg:mt-24">
          {/* rail */}
          <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-ink/15 sm:left-[11px]">
            <div ref={bar} className="gpu h-full w-px origin-top bg-gradient-to-b from-swift via-swift-soft to-ink/20" style={{ transform: "scaleY(0)" }} />
          </div>

          <ol className="space-y-10 sm:space-y-12">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.w} delay={i * 70} className="group relative pl-10 sm:pl-14">
                <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center sm:h-6 sm:w-6">
                  <span className="absolute h-full w-full rounded-full bg-swift/25 animate-ping-ring" style={{ animationDelay: `${i * 0.35}s` }} />
                  <span className="relative h-2 w-2 rounded-full bg-swift shadow-[0_0_18px_5px_rgba(240,81,56,0.5)] transition-transform duration-500 group-hover:scale-150 sm:h-2.5 sm:w-2.5" />
                </span>

                <div className="grid gap-3 sm:grid-cols-[120px_1fr_160px] sm:items-baseline sm:gap-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-swift">{s.w}</span>
                  <div>
                    <h3 className="text-balance text-xl font-bold tracking-tight sm:text-[1.6rem]">{s.t}</h3>
                    <p className="mt-2 max-w-xl text-pretty text-[15px] leading-relaxed text-muted">{s.d}</p>
                  </div>
                  <span className={cn("sticker inline-flex w-fit !shadow-[0_3px_0_rgba(11,11,12,0.8)]", i % 3 === 0 ? "bg-peach text-ink" : i % 3 === 1 ? "bg-lavender text-ink" : "bg-mint text-ink")} style={{ ["--r" as string]: `${(i % 2 ? 3 : -3)}deg` }}>
                    {s.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={200} className={cn("mt-16 flex flex-wrap items-center gap-4")}>
          <a href="#join" className="btn btn-accent">Start Week 01</a>
          <Sticker rotate={-3} color="bg-lemon text-ink">No experience needed</Sticker>
        </Reveal>
      </div>
    </section>
  );
}
