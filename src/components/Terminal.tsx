import { CrtBackground } from "@/shaders/crt/CrtBackground";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Tilt } from "./ui/Tilt";
import { Magnetic } from "./ui/Magnetic";
import { ScrollStrip } from "./ui/ScrollStrip";
import { useSpotlight } from "@/hooks/useSpotlight";
import { cn } from "@/utils/cn";

const chips = [
  { k: "panic level", v: "0" },
  { k: "errors befriended", v: "4,096" },
  { k: "stack traces read", v: "1,024" },
  { k: "fear remaining", v: "null" },
];

/**
 * The Debug Lab — a full-bleed CRT "blue screen" moment. The animated
 * BSOD canvas is the section background; frosted glass panels float on top
 * in 3D, retelling the crash as a club in-joke: errors are quests.
 */
export function Terminal() {
  const { onPointerMove } = useSpotlight<HTMLDivElement>();

  return (
    <section id="terminal" className="cv-auto relative overflow-hidden bg-[#050a24] py-20 sm:py-28">
      {/* CRT blue screen canvas — self-throttling, pauses offscreen */}
      <div className="absolute inset-0" aria-hidden>
        <CrtBackground variant="blue-screen" speed={1} motion={1} opacity={1} />
      </div>
      {/* legibility wash over the canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(5,10,36,0.25), rgba(5,10,36,0.72) 78%), linear-gradient(180deg, rgba(5,10,36,0.55), transparent 22%, transparent 72%, rgba(5,10,36,0.6))",
        }}
      />
      {/* edge fades into the paper sections around it */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-paper to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-paper to-transparent" />

      <div className="container-x relative">
        <ScrollStrip items={["CTRL", "ALT", "DELIGHT"]} dark travel={20} className="mb-6 opacity-90" />

        <SectionHeader
          index="13"
          eyebrow="The Debug Lab"
          align="left"
          dark
          title={
            <span className="text-white">
              Errors are just <span className="text-gradient">quests</span> in disguise.
            </span>
          }
          body="A blue screen isn't the end of the world — it's the start of the best story you'll tell on Demo Day. In the Debug Lab we collect crashes like trophies, read stack traces like detective novels, and turn “it works on my machine” into “it ships from ours.”"
        />

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12">
          {/* BSOD parody panel — frosted glass in 3D */}
          <Reveal variant="flip3d" className="lg:col-span-7">
            <Tilt max={5} lift={30}>
              <div
                onPointerMove={onPointerMove}
                className={cn(
                  "spotlight liquid-dark sweep grain relative overflow-hidden rounded-[26px] p-7 sm:p-10"
                )}
              >
                <p className="text-6xl font-bold leading-none text-white sm:text-7xl">:(</p>
                <p className="mt-5 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  SWIFT_STUDENT.exe ran into a learning curve
                </p>
                <p className="mt-1.5 text-[14.5px] text-white/60">
                  This is not a crash. It&apos;s Tuesday.
                </p>

                <div className="mt-8">
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
                    <span>collecting courage</span>
                    <span>99%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="gpu h-full rounded-full bg-gradient-to-r from-swift via-swift-soft to-[#ffd3bc]"
                      style={{ animation: "bsod-progress 6s var(--ease-out-expo) infinite" }}
                    />
                  </div>
                </div>

                <dl className="mt-8 space-y-3 border-t border-white/10 pt-6 text-[14px]">
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">what you gained</dt>
                    <dd className="font-semibold text-white">debugging superpowers + 40 new words for “oops”</dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">next session</dt>
                    <dd className="font-semibold text-white">Thursdays · Lab 204 · 5 PM · bring the crash</dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">stop code</dt>
                    <dd className="font-mono font-semibold text-swift-soft">0x000_SHIP_ANYWAY</dd>
                  </div>
                </dl>

                <p className="mt-7 font-mono text-[12px] text-white/50">
                  press <span className="rounded-md border border-white/20 bg-white/10 px-2 py-0.5 text-white">Join the club</span> to continue _
                  <span className="ml-1 inline-block h-3.5 w-[7px] translate-y-0.5 bg-swift animate-blink" />
                </p>
              </div>
            </Tilt>
          </Reveal>

          {/* floating glass readouts */}
          <div className="grid content-start gap-4 lg:col-span-5">
            {chips.map((c, i) => (
              <Reveal key={c.k} variant={i % 2 ? "right" : "left"} delay={i * 110}>
                <div className={cn("glass-chip-dark card-lift w-full justify-between gap-6 rounded-2xl px-5 py-4 sm:rounded-full")}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">{c.k}</span>
                  <span className="font-mono text-lg font-bold text-white">{c.v}</span>
                </div>
              </Reveal>
            ))}

            <Reveal variant="right" delay={480}>
              <div className="liquid-dark relative overflow-hidden rounded-2xl p-6">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-swift/30 blur-2xl"
                  style={{ animation: "crt-glow-pulse 4.5s ease-in-out infinite" }}
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">lab rule nº 404</p>
                <p className="mt-2 text-lg font-bold tracking-tight text-white">
                  “If it compiles on the first try, you didn&apos;t dream big enough.”
                </p>
                <p className="mt-3 text-[13px] text-white/60">
                  — every mentor here, at least once a week
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={160} className="mt-12 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a href="#join" className="btn btn-accent !px-7 !py-4">
              Learn to debug with us
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Magnetic>
          <a href="#program" className="btn btn-ghost-dark !px-7 !py-4">
            See the tracks
          </a>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            no crash left behind · est. 2021
          </span>
        </Reveal>
      </div>
    </section>
  );
}
