import workshop from "@/assets/workshop.webp";
import community from "@/assets/community.webp";
import macro from "@/assets/macro-code.webp";
import vision from "@/assets/vision.webp";
import campus from "@/assets/campus.webp";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Tilt } from "./ui/Tilt";
import { useParallax } from "@/hooks/useParallax";
import { cn } from "@/utils/cn";

const shots = [
  { src: workshop, alt: "Hack night at the Swift Coding Club", cap: "Hack night", meta: "Every Fri · 24h", cls: "sm:col-span-2 sm:row-span-2", badge: "bg-swift text-white", rotate: -2 },
  { src: community, alt: "Members building together in the Mac lab", cap: "Thursday lab", meta: "Block B · 3F", badge: "bg-lemon text-ink", rotate: 3 },
  { src: macro, alt: "Swift code on screen", cap: "Code review", meta: "Mentor 1:1", badge: "bg-mint text-ink", rotate: -3 },
  { src: vision, alt: "Member prototyping in spatial computing", cap: "Spatial lab", meta: "visionOS", badge: "bg-lavender text-ink", rotate: 4 },
];

const faces = [
  { t: "Build", d: "Every session ends with running code.", bg: "linear-gradient(140deg,#F05138,#FF8A5B)", text: "text-white" },
  { t: "Review", d: "Seniors read your diffs, line by line.", bg: "linear-gradient(140deg,#D9CFFF,#B8A8FF)", text: "text-ink" },
  { t: "Ship", d: "TestFlight today, App Store next month.", bg: "linear-gradient(140deg,#FFD48A,#FFB86C)", text: "text-ink" },
  { t: "Teach", d: "Then you run the next cohort's lab.", bg: "linear-gradient(140deg,#B9ECCD,#87D9A8)", text: "text-ink" },
];

function Cube() {
  const size = 168;
  const half = size / 2;
  return (
    <div className="scene-3d flex items-center justify-center py-6" style={{ perspective: "1000px" }}>
      <div
        className="gpu animate-spin-slow relative preserve-3d"
        style={{ width: size, height: size, animationDuration: "24s" }}
      >
        {faces.map((f, i) => (
          <div
            key={f.t}
            className={cn("absolute inset-0 backface-hidden rounded-2xl border-[2px] border-ink p-5 shadow-[0_20px_40px_-20px_rgba(11,11,12,0.4)]", f.text)}
            style={{
              background: f.bg,
              transform: `rotateY(${i * 90}deg) translateZ(${half}px)`,
            }}
          >
            <p className={cn("font-mono text-[10px] uppercase tracking-[0.24em]", f.text === "text-white" ? "text-white/70" : "text-ink/60")}>0{i + 1}</p>
            <p className="mt-auto text-2xl font-bold tracking-tight">{f.t}</p>
            <p className={cn("mt-1 text-[11.5px] leading-snug", f.text === "text-white" ? "text-white/90" : "text-ink/75")}>{f.d}</p>
          </div>
        ))}
        {/* top + bottom caps give the cube solidity */}
        <div className="absolute inset-0 rounded-2xl bg-peach border-[2px] border-ink" style={{ transform: `rotateX(90deg) translateZ(${half}px)` }} />
        <div className="absolute inset-0 rounded-2xl bg-lavender border-[2px] border-ink" style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }} />
      </div>
    </div>
  );
}

export function Gallery() {
  const parallax = useParallax<HTMLDivElement>(26);
  return (
    <section id="life" className="cv-auto py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader
          index="07"
          eyebrow="Inside the club"
          title={
            <>
              Thursdays that look <span className="text-muted">nothing like a lecture.</span>
            </>
          }
          body="Laptops open, mentors on the floor, music on low, and a build that has to run before you leave the room."
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          {/* photo wall */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {shots.map((s, i) => (
                <Reveal key={s.cap} delay={i * 90} className={cn("min-h-0", s.cls)}>
                  <Tilt max={8} lift={18} className="h-full">
                    <figure className="sheen grain relative h-full overflow-hidden rounded-3xl border border-line bg-paper-2">
                      <img
                        src={s.src}
                        alt={s.alt}
                        loading="lazy"
                        decoding="async"
                        className={cn(
                          "h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)]",
                          s.cls ? "aspect-[16/10]" : "aspect-[4/3]",
                          "group-hover:scale-105"
                        )}
                      />
                      <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border-[2px] border-ink bg-white/90 px-4 py-2.5 shadow-[0_4px_0_rgba(11,11,12,0.9)] backdrop-blur-xl">
                        <span className="text-[13px] font-semibold tracking-tight">{s.cap}</span>
                        <span className={cn("sticker !shadow-[0_2px_0_rgba(11,11,12,0.8)]", s.badge)} style={{ ["--r" as string]: `${s.rotate}deg` }}>{s.meta}</span>
                      </figcaption>
                    </figure>
                  </Tilt>
                </Reveal>
              ))}
            </div>
          </div>

          {/* cube + copy */}
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="card-peach grain relative overflow-hidden rounded-[32px] border-[3px] border-ink p-8 shadow-[0_12px_0_rgba(11,11,12,0.9)] sm:p-10">
                <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lavender blur-3xl opacity-70" />
                <Cube />
                <h3 className="relative mt-4 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                  The loop we run every single week.
                </h3>
                <p className="relative mt-3 text-pretty text-[15px] leading-relaxed text-ink/70">
                  Build something small. Have it reviewed by someone better than you. Ship it to real
                  people. Then teach it to the cohort behind you. Repeat for fourteen weeks.
                </p>
                <ul className="mt-8 space-y-3">
                  {["Pair programming, not passive listening", "Live code review on the projector", "Demo every lab — no hiding", "Seniors sit with juniors, always"].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[14.5px]">
                      <svg className="mt-1 h-4 w-4 shrink-0 text-swift" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-ink/85">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* wide campus banner with parallax */}
      <div className="container-x mt-16 sm:mt-24">
        <Reveal variant="scale">
          <div ref={parallax} style={{ transform: "translate3d(0, var(--py, 0px), 0)" }}>
            <div className="relative overflow-hidden rounded-[32px] border border-line">
              <img
                src={campus}
                alt="Parul University campus at golden hour"
                loading="lazy"
                decoding="async"
                className="h-[46vh] min-h-[280px] w-full object-cover sm:h-[56vh]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/60">Vadodara, Gujarat</p>
                <p className="display mt-3 max-w-2xl text-balance text-3xl text-white sm:text-5xl">
                  A 300-acre campus. One room where apps get made.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
