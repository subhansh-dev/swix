import community from "@/assets/community.jpg";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

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

/** Why-Swift — Retro Futurism: atomic stat chips and orbit satellites on cream. */
export function Benefits() {
  return (
    <section id="why" className="atomi-section cv-auto relative overflow-hidden py-24 sm:py-32">
      {/* starfield + orbit rings */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {starfield.map((s, i) => (
          <span key={i} className={`atomi-star gpu animate-pulse-soft absolute font-mono ${s.size}`} style={{ left: s.left, top: s.top, animationDelay: s.d }}>
            {s.s}
          </span>
        ))}
        <span className="atomi-ring gpu animate-spin-slow right-[4%] top-[10%] h-44 w-44" style={{ animationDuration: "56s" }} />
        <span className="atomi-ring gpu animate-spin-slow left-[3%] bottom-[6%] h-56 w-56" style={{ animationDuration: "68s", animationDirection: "reverse" }} />
      </div>

      <div className="container-x relative">
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
                <figure className="atomi-card relative overflow-hidden !rounded-[26px]">
                  <img
                    src={community}
                    alt="Parul University students building iOS apps together in the Mac lab"
                    width={700}
                    height={394}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] hover:scale-[1.03]"
                  />
                  <p className="absolute bottom-20 left-4 right-4 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-[#8a6a50]/60">[ replace with your own image ]</p>
                  <figcaption className="atomi-card absolute bottom-4 left-4 right-4 flex items-center justify-between !rounded-2xl px-4 py-3">
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
              </Reveal>

              <Reveal delay={120} className="mt-6 grid grid-cols-2 gap-4">
                <div className="atomi-card p-5" style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.95) inset, 0 18px 40px -18px rgba(200,120,40,0.55)" }}>
                  <p className="display text-3xl text-[#b4552d]">₹9.2L</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#8a6a50]">Avg. iOS offer, '25 batch</p>
                </div>
                <div className="atomi-card p-5" style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.95) inset, 0 18px 40px -18px rgba(35,130,80,0.5)" }}>
                  <p className="display text-3xl text-[#1d7a4c]">94%</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#8a6a50]">Capstone completion</p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* List */}
          <ol className="lg:col-span-7">
            {benefits.map((b, i) => (
              <Reveal as="li" key={b.n} delay={i * 70} className="group py-3">
                <div className="atomi-card card-lift relative overflow-hidden !rounded-[24px] p-6 transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1">
                  {/* orbiting satellite */}
                  <span aria-hidden className="pointer-events-none absolute right-4 top-4 h-8 w-8">
                    <span className="absolute inset-0 rounded-full border border-dashed border-[#b4552d]/40" style={{ animation: `orbit-spin ${14 + i * 3}s linear infinite` }} />
                    <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b4552d]" />
                  </span>
                  <div className="relative grid gap-4 sm:grid-cols-[60px_1fr]">
                    <div className="flex flex-col items-start gap-2">
                      <span className="display text-3xl text-[#b4552d]">{b.n}</span>
                      <span className="atomi-chip !py-0.5 !text-[9px]">{b.tag}</span>
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
