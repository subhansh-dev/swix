import community from "@/assets/community.webp";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Sticker, Deco } from "./ui/Deco";
import { cn } from "@/utils/cn";

const benefits = [
  {
    n: "01",
    title: "Swift is the most in-demand mobile skill in India right now",
    body: "iOS engineers command a 30–40% premium over the mobile median. Startups in Bengaluru, Pune and Ahmedabad are hiring SwiftUI developers faster than universities produce them.",
    tint: "bg-coral",
    tag: "Demand",
  },
  {
    n: "02",
    title: "One language, every Apple platform",
    body: "iPhone, iPad, Mac, Watch, Vision Pro — and now servers. Learn Swift once and your ceiling is the entire Apple ecosystem, not a single screen size.",
    tint: "bg-lavender",
    tag: "Reach",
  },
  {
    n: "03",
    title: "A portfolio that recruiters can download",
    body: "A live App Store link beats a GitHub README. Our members walk into placements with a product, reviews and real usage numbers.",
    tint: "bg-mint",
    tag: "Proof",
  },
  {
    n: "04",
    title: "Mac Lab access & Apple Developer membership",
    body: "Don't own a Mac? Members get scheduled access to the PIT Mac Lab plus a subsidised developer account for publishing under the club's team.",
    tint: "bg-lemon",
    tag: "Access",
  },
];

export function Benefits() {
  return (
    <section id="why" className="cv-auto relative overflow-hidden py-24 sm:py-32">
      <Deco variant="mint" />
      <div className="container-x relative">
        <SectionHeader
          index="02"
          eyebrow="Why Swift, why now"
          title={
            <>
              The most valuable hour <span className="text-gradient">of your week.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          {/* Sticky visual */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal variant="scale">
                <figure className="relative overflow-hidden rounded-3xl border border-line bg-paper-2">
                  <img
                    src={community}
                    alt="Parul University students building iOS apps together in the Mac lab"
                    width={700}
                    height={394}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] hover:scale-[1.03]"
                  />
                  <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border-[2px] border-ink bg-white/90 px-4 py-3 shadow-[0_4px_0_rgba(11,11,12,0.9)] backdrop-blur-xl">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Thursday lab</p>
                      <p className="text-sm font-semibold tracking-tight">PIT Mac Lab · Block B, 3F</p>
                    </div>
                    <span className="flex items-center gap-2 text-xs font-medium text-ink/70">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      42 here now
                    </span>
                  </figcaption>
                  <div aria-hidden className="absolute -right-3 -top-3 rotate-12">
                    <Sticker rotate={8} color="bg-swift text-white">live</Sticker>
                  </div>
                </figure>
              </Reveal>

              <Reveal delay={120} className="mt-6 grid grid-cols-2 gap-4">
                <div className="card-coral rounded-2xl border-[3px] border-ink p-5 shadow-[0_6px_0_rgba(11,11,12,0.9)]">
                  <p className="display text-3xl">₹9.2L</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-ink/70">Avg. iOS offer, '25 batch</p>
                </div>
                <div className="card-lemon rounded-2xl border-[3px] border-ink p-5 shadow-[0_6px_0_rgba(11,11,12,0.9)]">
                  <p className="display text-3xl">94%</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-ink/70">Capstone completion</p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* List */}
          <ol className="lg:col-span-7">
            {benefits.map((b, i) => (
              <Reveal as="li" key={b.n} delay={i * 70} className="group py-5">
                <div className={cn("relative overflow-hidden rounded-[24px] border-[3px] border-ink p-6 shadow-[0_8px_0_rgba(11,11,12,0.9)] transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1", b.tint)}>
                  <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/60 blur-2xl" />
                  <div className="relative grid gap-4 sm:grid-cols-[60px_1fr]">
                    <div className="flex flex-col items-start gap-2">
                      <span className="display text-3xl text-ink">{b.n}</span>
                      <span className="rounded-md border-[2px] border-ink bg-white/75 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/70">{b.tag}</span>
                    </div>
                    <div>
                      <h3 className="text-balance text-xl font-bold tracking-tight sm:text-2xl">
                        {b.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-pretty text-[15px] leading-relaxed text-ink/70">{b.body}</p>
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
