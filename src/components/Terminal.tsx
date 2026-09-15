import { CrtBackground } from "@/shaders/crt/CrtBackground";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { ScrollStrip } from "./ui/ScrollStrip";

const chips = [
  { k: "panic level", v: "0" },
  { k: "errors befriended", v: "4,096" },
  { k: "stack traces read", v: "1,024" },
  { k: "fear remaining", v: "null" },
];

/**
 * The Debug Lab — a full-bleed CRT "blue screen" moment. The animated
 * BSOD canvas is the section background; the floating panels are restyled
 * as Web Core windows retelling the crash as a club in-joke.
 */
export function Terminal() {
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
      {/* edge fades into the neighbors */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0c0c0d] to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#060607] to-transparent" />

      <div className="container-x relative">
        <ScrollStrip items={["CTRL", "ALT", "DELIGHT"]} dark travel={20} className="mb-6 opacity-90" />

        <SectionHeader
          index="13"
          eyebrow="The Debug Lab"
          align="left"
          dark
          title={
            <span className="text-white">
              Errors are just <span className="text-[#00ffaa]">quests</span> in disguise.
            </span>
          }
          body={
            <span className="text-white/60">
              A blue screen isn't the end of the world — it's the start of the best story you'll tell on Demo Day. In
              the Debug Lab we collect crashes like trophies, read stack traces like detective novels, and turn “it
              works on my machine” into “it ships from ours.”
            </span>
          }
        />

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12">
          {/* BSOD parody panel — a web-core window */}
          <Reveal variant="flip3d" className="lg:col-span-7">
            <div className="webcore-tile overflow-hidden !rounded-sm">
              {/* titlebar */}
              <div className="win98-title flex items-center justify-between px-2 py-1">
                <span className="font-mono">SWIFT_STUDENT.exe — Learning Curve Error</span>
                <span className="flex gap-1" aria-hidden>
                  <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">_</span>
                  <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">□</span>
                  <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">×</span>
                </span>
              </div>

              <div className="bg-[#0c0c0e]/90 p-7 backdrop-blur-md sm:p-10">
                <p className="text-6xl font-bold leading-none text-[#00ffaa] sm:text-7xl">:(</p>
                <p className="mt-5 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  SWIFT_STUDENT.exe ran into a learning curve
                </p>
                <p className="mt-1.5 font-mono text-[14px] text-white/55">This is not a crash. It&apos;s Tuesday.</p>

                <div className="mt-8">
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
                    <span>collecting courage</span>
                    <span className="text-[#00ffaa]">99%</span>
                  </div>
                  <div
                    className="mt-2 h-3 overflow-hidden rounded-none border border-[#2a2a2e] bg-[#060607]"
                    style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.8)" }}
                  >
                    <div
                      className="h-full"
                      style={{
                        background: "repeating-linear-gradient(90deg,#00ffaa 0 8px,#0c0c0e 8px 10px)",
                        boxShadow: "0 0 10px rgba(0,255,170,0.5)",
                        animation: "bsod-progress 6s var(--ease-out-expo) infinite",
                      }}
                    />
                  </div>
                </div>

                <dl className="mt-8 space-y-3 border-t border-[#2a2a2e] pt-6 text-[14px]">
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
                    <dd className="font-mono font-semibold text-[#00ffaa]">0x000_SHIP_ANYWAY</dd>
                  </div>
                </dl>

                <p className="mt-7 font-mono text-[12px] text-white/50">
                  press <span className="win98-btn mx-1 inline-block">Join the club</span> to continue _
                  <span className="ml-1 inline-block h-3.5 w-[7px] translate-y-0.5 animate-blink bg-[#00ffaa]" />
                </p>
              </div>

              {/* status bar */}
              <div className="win98-out flex items-center justify-between bg-[#c6c6c6] px-3 py-1 font-mono text-[9.5px] text-[#0a0a0a]">
                <span>1 error found — it&apos;s a friend now</span>
                <span>NUM</span>
              </div>
            </div>
          </Reveal>

          {/* readout chips as mini web-core dialogs */}
          <div className="grid content-start gap-4 lg:col-span-5">
            {chips.map((c, i) => (
              <Reveal key={c.k} variant={i % 2 ? "right" : "left"} delay={i * 110}>
                <div className="webcore-tile flex items-center justify-between gap-6 !rounded-sm px-5 py-3.5 transition-colors duration-300">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">{c.k}</span>
                  <span className="font-mono text-lg font-bold text-[#00ffaa]" style={{ textShadow: "0 0 10px rgba(0,255,170,0.5)" }}>
                    {c.v}
                  </span>
                </div>
              </Reveal>
            ))}

            <Reveal variant="right" delay={480}>
              <div className="webcore-tile relative overflow-hidden !rounded-sm p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#00ffaa]/70">lab rule nº 404</p>
                <p className="mt-2 text-lg font-bold tracking-tight text-white">
                  “If it compiles on the first try, you didn&apos;t dream big enough.”
                </p>
                <p className="mt-3 font-mono text-[13px] text-white/55">— every mentor here, at least once a week</p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={160} className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#join"
            className="inline-flex items-center gap-2 rounded-sm border border-[#00ffaa] bg-[#00ffaa]/15 px-6 py-3.5 text-sm font-bold text-[#00ffaa] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00ffaa]/25"
            style={{ boxShadow: "0 0 24px -8px rgba(0,255,170,0.6)" }}
          >
            Learn to debug with us
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#program"
            className="win98-btn inline-flex items-center !px-5 !py-2.5 !text-[12px]"
          >
            See the tracks
          </a>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">no crash left behind · est. 2021</span>
        </Reveal>
      </div>
    </section>
  );
}
