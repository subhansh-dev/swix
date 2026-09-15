import community from "@/assets/community.webp";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

const benefits = [
  {
    n: "01",
    title: "Swift is the most in-demand mobile skill in India right now",
    body: "iOS engineers command a 30–40% premium over the mobile median. Startups in Bengaluru, Pune and Ahmedabad are hiring SwiftUI developers faster than universities produce them.",
    tag: "Demand",
    chip: "linear-gradient(180deg,#ffffff,#dff3ff)",
    glow: "rgba(60,160,220,0.35)",
  },
  {
    n: "02",
    title: "One language, every Apple platform",
    body: "iPhone, iPad, Mac, Watch, Vision Pro — and now servers. Learn Swift once and your ceiling is the entire Apple ecosystem, not a single screen size.",
    tag: "Reach",
    chip: "linear-gradient(180deg,#ffffff,#dcfce9)",
    glow: "rgba(35,130,80,0.35)",
  },
  {
    n: "03",
    title: "A portfolio that recruiters can download",
    body: "A live App Store link beats a GitHub README. Our members walk into placements with a product, reviews and real usage numbers.",
    tag: "Proof",
    chip: "linear-gradient(180deg,#ffffff,#e8fbff)",
    glow: "rgba(28,100,131,0.35)",
  },
  {
    n: "04",
    title: "Mac Lab access & Apple Developer membership",
    body: "Don't own a Mac? Members get scheduled access to the PIT Mac Lab plus a subsidised developer account for publishing under the club's team.",
    tag: "Access",
    chip: "linear-gradient(180deg,#ffffff,#fff3d6)",
    glow: "rgba(200,150,30,0.3)",
  },
];

const bubbles = [
  { left: "4%", size: 26, top: "12%", d: "0s", dur: "10s" },
  { left: "12%", size: 14, top: "58%", d: "2s", dur: "13s" },
  { left: "90%", size: 32, top: "8%", d: "4s", dur: "11s" },
  { left: "82%", size: 12, top: "66%", d: "1s", dur: "15s" },
  { left: "70%", size: 18, top: "30%", d: "6s", dur: "12s" },
  { left: "30%", size: 10, top: "8%", d: "3s", dur: "16s" },
];

/** Why-Swift — Frutiger Aero: glassy nature-tech panels over a fresh gradient with bubbles. */
export function Benefits() {
  return (
    <section id="why" className="aero cv-auto relative overflow-hidden py-24 sm:py-32">
      {/* sky gradient + soft sun + rising bubbles */}
      <div aria-hidden className="aero-sky pointer-events-none absolute inset-0 opacity-70" />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-white/60 blur-3xl" />
        <span className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-[#8fe0b0]/40 blur-3xl" />
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="aero-bubble gpu animate-aero-rise"
            style={{ left: b.left, top: b.top, width: b.size, height: b.size, animationDelay: b.d, animationDuration: b.dur }}
          />
        ))}
        {/* grass blades, the frutiger way */}
        <span className="aero-leaf absolute -bottom-6 left-[6%] h-24 w-24 rotate-12" />
        <span className="aero-leaf absolute -bottom-8 right-[10%] h-32 w-32 -rotate-6 opacity-70" />
      </div>

      <div className="container-x relative">
        <SectionHeader
          index="02"
          eyebrow="Why Swift, why now"
          title={
            <span className="text-[#0d3a52]">
              The most valuable hour <span className="bg-gradient-to-r from-[#2f9e5f] to-[#3aa5d9] bg-clip-text text-transparent">of your week.</span>
            </span>
          }
          body={
            <span className="text-[#2c6c8f]">
              High-demand skills, real portfolios, and lab access — the case for spending your Thursday evenings with Swift.
            </span>
          }
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Sticky visual */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal variant="scale">
                <figure className="aero-panel aero-gloss relative overflow-hidden !rounded-[26px]">
                  <img
                    src={community}
                    alt="Parul University students building iOS apps together in the Mac lab"
                    width={700}
                    height={394}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] hover:scale-[1.03]"
                  />
                  <figcaption className="aero-panel absolute bottom-4 left-4 right-4 flex items-center justify-between !rounded-2xl px-4 py-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2c6c8f]">Thursday lab</p>
                      <p className="text-sm font-semibold tracking-tight text-[#0d3a52]">PIT Mac Lab · Block B, 3F</p>
                    </div>
                    <span className="flex items-center gap-2 text-xs font-medium text-[#2c6c8f]">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      42 here now
                    </span>
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal delay={120} className="mt-6 grid grid-cols-2 gap-4">
                <div className="aero-panel p-5" style={{ boxShadow: `0 1px 0 rgba(255,255,255,0.95) inset, 0 18px 40px -18px rgba(200,120,40,0.5)` }}>
                  <p className="display text-3xl text-[#8a5a10]">₹9.2L</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#2c6c8f]">Avg. iOS offer, '25 batch</p>
                </div>
                <div className="aero-panel p-5" style={{ boxShadow: `0 1px 0 rgba(255,255,255,0.95) inset, 0 18px 40px -18px rgba(35,130,80,0.5)` }}>
                  <p className="display text-3xl text-[#1d7a4c]">94%</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#2c6c8f]">Capstone completion</p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* List */}
          <ol className="lg:col-span-7">
            {benefits.map((b, i) => (
              <Reveal as="li" key={b.n} delay={i * 70} className="group py-3">
                <div
                  className="aero-panel aero-gloss card-lift relative overflow-hidden !rounded-[24px] p-6 transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1"
                  style={{ boxShadow: `0 1px 0 rgba(255,255,255,0.95) inset, 0 20px 46px -20px ${b.glow}` }}
                >
                  <div className="relative grid gap-4 sm:grid-cols-[60px_1fr]">
                    <div className="flex flex-col items-start gap-2">
                      <span className="display text-3xl text-[#0d3a52]">{b.n}</span>
                      <span
                        className="rounded-full border border-white/90 px-2.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#2c6c8f] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset]"
                        style={{ background: b.chip }}
                      >
                        {b.tag}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-balance text-xl font-bold tracking-tight text-[#0d3a52] sm:text-2xl">
                        {b.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-pretty text-[15px] leading-relaxed text-[#2c6c8f]">{b.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
