import community from "@/assets/community.jpg";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Tilt } from "./ui/Tilt";
import { GlassCube } from "./ui/GlassCube";
import { useScrollScrub } from "@/hooks/useScrollScrub";

const benefits = [
  {
    n: "01",
    title: "Swift is the most in-demand mobile skill in India right now",
    body: "iOS engineers command a 30–40% premium over the mobile median. Startups in Bengaluru, Pune and Ahmedabad are hiring SwiftUI developers faster than universities produce them.",
    tag: "Demand",
  },
  {
    n: "02",
    title: "One language, every Apple platform",
    body: "iPhone, iPad, Mac, Watch, Vision Pro — and now servers. Learn Swift once and your ceiling is the entire Apple ecosystem, not a single screen size.",
    tag: "Reach",
  },
  {
    n: "03",
    title: "A portfolio that recruiters can download",
    body: "A live App Store link beats a GitHub README. Our members walk into placements with a product, reviews and real usage numbers.",
    tag: "Proof",
  },
  {
    n: "04",
    title: "Mac Lab access & Apple Developer membership",
    body: "Don't own a Mac? Members get scheduled access to the PIT Mac Lab plus a subsidised developer account for publishing under the club's team.",
    tag: "Access",
  },
];

const starfield = [
  { left: "5%", top: "14%", s: "✦", size: "text-lg", d: "0s" },
  { left: "16%", top: "72%", s: "✧", size: "text-base", d: "1.3s" },
  { left: "88%", top: "18%", s: "✦", size: "text-base", d: "2.1s" },
  { left: "94%", top: "64%", s: "·", size: "text-xl", d: "0.7s" },
];

const tones = ["#FFEDA3", "#D9CFFF", "#B9ECCD", "#BDE4FF"];

export function Benefits() {
  const scrub = useScrollScrub<HTMLElement>();
  return (
    <section ref={scrub} id="why" className="atomi-section cv-auto relative overflow-hidden py-24 sm:py-32" style={{ background: "radial-gradient(ellipse at 0% 35%, #D9CFFF55, transparent 50%), radial-gradient(ellipse at 100% 80%, #B9ECCD66, transparent 50%), #FFF8F2" }}>
      {/* starfield + orbit rings */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {starfield.map((s, i) => (
          <span key={i} className={`atomi-star gpu motion-safe:animate-pulse-soft absolute font-mono ${s.size}`} style={{ left: s.left, top: s.top, animationDelay: s.d }}>
            {s.s}
          </span>
        ))}
        <span className="atomi-ring gpu motion-safe:animate-spin-slow right-[4%] top-[10%] h-44 w-44" style={{ animationDuration: "56s" }} />
        <span className="atomi-ring gpu motion-safe:animate-spin-slow left-[3%] bottom-[6%] h-56 w-56" style={{ animationDuration: "68s", animationDirection: "reverse" }} />
      </div>

      <div className="container-x relative">
        <div aria-hidden className="pointer-events-none absolute left-8 top-28 hidden h-20 w-20 motion-reduce:!transform-none lg:block" style={{ transform: "translateY(calc((var(--scrub, 0.5) - 0.5) * -48px))" }}>
          <GlassCube className="left-0 top-0" size={64} tone="ice" depth={16} delay={-6} />
        </div>
        <SectionHeader
          index="02"
          eyebrow="Why Swift, why now"
          title={
            <span className="text-[#2a1a10]">
              The most valuable hour <span className="text-[#c2521f]">of your week.</span>
            </span>
          }
          body={
            <span className="text-[#6b4a34]">
              High-demand skills, real portfolios, and lab access — the case for spending your Thursday evenings with Swift.
            </span>
          }
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Sticky visual */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal variant="scale">
                <Tilt max={3} lift={6} scale={1.005} sheen={false}>
                <figure className="atomi-card group relative overflow-hidden !rounded-[26px] !border-white p-2" style={{ background: "linear-gradient(145deg, #fff, #D9CFFF80)", boxShadow: "inset 0 2px 0 #fff, 0 7px 0 -3px #D9CFFF80, 0 24px 50px -28px #6b4a3466" }}>
                  <img
                    src={community}
                    alt="Parul University students building iOS apps together in the Mac lab"
                    width={700}
                    height={394}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full rounded-[20px] object-cover motion-safe:transition-transform motion-safe:duration-[1400ms] motion-safe:ease-[var(--ease-out-expo)] motion-safe:group-hover:scale-[1.03]"
                  />
                  <p className="absolute bottom-20 left-4 right-4 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-[#8a6a50]/60">[ replace with your own image ]</p>
                  <figcaption className="atomi-card absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 !rounded-2xl !border-white px-4 py-3 backdrop-blur-md" style={{ background: "rgba(255,255,255,0.9)" }}>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8a6a50]">Thursday lab</p>
                      <p className="text-sm font-semibold tracking-tight text-[#2a1a10]">PIT Mac Lab · Block B, 3F</p>
                    </div>
                    <span className="flex items-center gap-2 text-xs font-medium text-[#6b4a34]">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      42 here now
                    </span>
                  </figcaption>
                </figure>
                </Tilt>
              </Reveal>

              <Reveal delay={160} className="mt-6 grid grid-cols-2 gap-4">
                <div className="atomi-card relative !border-white p-5 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #fff, #FFEDA380)", boxShadow: "0 2px 0 #fff inset, 0 16px 32px -22px #F0513880" }}>
                  <p className="display bg-gradient-to-br from-[#9c321f] to-[#F05138] bg-clip-text text-3xl text-transparent">₹9.2L</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#8a6a50]">Avg. iOS offer, '25 batch</p>
                </div>
                <div className="atomi-card relative !border-white p-5 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #fff, #B9ECCD80)", boxShadow: "0 2px 0 #fff inset, 0 16px 32px -22px #1d7a4c66" }}>
                  <p className="display text-3xl text-[#1d7a4c]">94%</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#8a6a50]">Capstone completion</p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* List */}
          <ol className="lg:col-span-7">
            {benefits.map((b, i) => (
              <Reveal as="li" key={b.n} delay={80 + i * 100} className="group py-3">
                <div className="atomi-card relative overflow-hidden !rounded-[24px] !border-white p-6 motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:-translate-y-1" style={{ background: `linear-gradient(120deg, #ffffffed, #FFF8F2 65%, ${tones[i]}66)`, boxShadow: "inset 0 2px 0 #fff, 0 5px 0 -2px #ffffffcc, 0 18px 34px -24px #6b4a3466" }}>
                  <span aria-hidden className="pointer-events-none absolute inset-y-7 left-0 w-1 rounded-r-full" style={{ background: tones[i] }} />
                  {/* orbiting satellite */}
                  <span aria-hidden className="pointer-events-none absolute right-4 top-4 h-8 w-8">
                    <span className="absolute inset-0 rounded-full border border-dashed border-[#b4552d]/40 motion-reduce:!animate-none" style={{ animation: `orbit-spin ${14 + i * 3}s linear infinite` }} />
                    <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b4552d]" />
                  </span>
                  <div className="relative grid gap-4 sm:grid-cols-[60px_1fr]">
                    <div className="flex flex-col items-start gap-2">
                      <span className="display bg-gradient-to-br from-[#9c321f] to-[#F05138] bg-clip-text text-3xl text-transparent">{b.n}</span>
                      <span className="atomi-chip !border-white !py-0.5 !text-[9px] !text-[#0B0B0C] shadow-sm motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-rotate-3" style={{ background: tones[i] }}>{b.tag}</span>
                    </div>
                    <div className="pr-10">
                      <h3 className="text-balance text-xl font-bold tracking-tight text-[#2a1a10] sm:text-2xl">
                        {b.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-pretty text-[15px] leading-relaxed text-[#6b4a34]">{b.body}</p>
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
