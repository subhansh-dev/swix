import workshop from "@/assets/workshop.jpg";
import community from "@/assets/community.jpg";
import macro from "@/assets/macro-code.jpg";
import vision from "@/assets/vision.jpg";
import campus from "@/assets/campus.jpg";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { useParallax } from "@/hooks/useParallax";
import { cn } from "@/utils/cn";

const shots = [
  { src: workshop, alt: "Hack night at the Swift Coding Club", cap: "hack_night.jpg", meta: "Every Fri · 24h", cls: "sm:col-span-2 sm:row-span-2" },
  { src: community, alt: "Members building together in the Mac lab", cap: "thursday_lab.jpg", meta: "Block B · 3F" },
  { src: macro, alt: "Swift code on screen", cap: "code_review.jpg", meta: "Mentor 1:1" },
  { src: vision, alt: "Member prototyping in spatial computing", cap: "spatial_lab.jpg", meta: "visionOS" },
  { src: campus, alt: "Campus at golden hour", cap: "golden_hour.jpg", meta: "Vadodara" },
];

const tones = ["#D9CFFF", "#B9ECCD", "#BDE4FF", "#FFC6DD", "#FFEDA3"];

const faces = [
  { t: "Pair Programming", d: "Two keyboards, one cursor. Seniors and juniors ship side by side.", win: true },
  { t: "Code Review", d: "Every pull request gets honest, specific, kind feedback.", win: false },
  { t: "Demo Friday", d: "Ship or show. No hiding behind slides.", win: true },
  { t: "Campus Events", d: "Hack nights, Apple WWDC watch parties, and guest talks.", win: false },
];

function Cube() {
  const half = 44;
  return (
    <div className="mx-auto mt-8 grid h-24 w-24 place-items-center" style={{ perspective: "400px" }}>
      <div className="gpu relative h-full w-full motion-reduce:!animate-none" style={{ transformStyle: "preserve-3d", transform: "rotateX(-12deg) rotateY(-24deg)", animation: "cube-spin 12s linear infinite" }}>
        {faces.map((f, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-sm p-3"
            style={{
              transform: `rotateY(${i * 90}deg) translateZ(${half}px)`,
              background: `linear-gradient(140deg,#ffffffee,${tones[i]}dd)`,
              boxShadow: "0 0 0 1px rgba(42,26,16,0.1), 0 0 26px -12px rgba(240,81,56,0.15)",
            }}
          >
            <p className={cn("font-mono text-[10px] uppercase tracking-[0.24em]", f.win ? "text-blue-500" : "text-[#F05138]/70")}>0{i + 1}.exe</p>
            <p className="mt-auto text-2xl font-bold tracking-tight text-ink">{f.t}</p>
            <p className="mt-1 text-[11.5px] leading-snug text-muted">{f.d}</p>
          </div>
        ))}
        <div className="absolute inset-0 rounded-sm bg-[#F05138]" style={{ transform: `rotateX(90deg) translateZ(${half}px)` }} />
        <div className="absolute inset-0 rounded-sm bg-paper-2" style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }} />
      </div>
    </div>
  );
}

export function Gallery() {
  const parallax = useParallax<HTMLDivElement>(26);
  return (
    <section id="life" className="webcore-section cv-auto relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="webcore-stars pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(70% 50% at 50% 0%, rgba(240,81,56,0.06), transparent 60%)" }}
      />

      <div className="container-x relative">
        <SectionHeader
          index="07"
          eyebrow="Inside the club"
          title={
            <span className="text-ink">
              Thursdays that look <span className="text-[#F05138]">nothing like a lecture.</span>
            </span>
          }
          body={
            <span className="text-muted">
              Laptops open, mentors on the floor, music on low, and a build that has to run before you leave the room.
            </span>
          }
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {shots.map((s, i) => (
                <Reveal key={s.cap} delay={i * 90} className={cn("min-h-0", s.cls)}>
                  <figure
                    className="webcore-tile group overflow-hidden transition-transform duration-500 motion-safe:hover:-translate-y-1"
                    style={{ background: `linear-gradient(145deg,#FFF8F2,${tones[i]}55)`, borderColor: "#ffffffcc", boxShadow: `inset 0 1px 0 #fff, 0 4px 0 ${tones[i]}99, 0 22px 40px -28px #0B0B0C55` }}
                  >
                    <div className="win98-title flex items-center justify-between gap-2 px-3 py-2" style={{ background: `linear-gradient(120deg,#FFF8F2,${tones[i]})`, color: "#0B0B0C", boxShadow: "inset 0 1px 0 #fff, 0 1px 0 #0B0B0C12" }}>
                      <span className="truncate font-mono">{s.cap}</span>
                      <span className="flex gap-1" aria-hidden>
                        <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">_</span>
                        <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">□</span>
                        <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">×</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 border-b border-line bg-paper-3 px-2 py-1.5">
                      <span className="h-2 w-2 rounded-full bg-green-500/70" />
                      <span className="flex-1 truncate rounded-none border border-line bg-paper px-2 py-0.5 font-mono text-[9px] text-ink/60">
                        swiftclub://gallery/{s.cap}
                      </span>
                    </div>
                    <div className="overflow-hidden">
                      <img
                        src={s.src}
                        alt={s.alt}
                        loading="lazy"
                        decoding="async"
                        className={cn("w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]", s.cls ? "aspect-[16/10]" : "aspect-[4/3]")}
                      />
                    </div>
                    <p className="px-3 py-1.5 text-center font-mono text-[8.5px] uppercase tracking-[0.16em] text-ink/35">[ replace with your own image ]</p>
                    <figcaption className="flex items-center justify-between border-t border-line bg-paper-2 px-3 py-2">
                      <span className="font-mono text-[10.5px] text-muted">{s.meta}</span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#F05138]">view ▸</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="webcore-tile relative overflow-hidden  p-8 sm:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F05138]/70">
                  C:\club\weekly_loop.exe — running
                </p>
                <Cube />
                <h3 className="relative mt-4 text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  The loop we run every single week.
                </h3>
                <p className="relative mt-3 text-pretty text-[15px] leading-relaxed text-muted">
                  Build something small. Have it reviewed by someone better than you. Ship it to real
                  people. Then teach it to the juniors behind you. Repeat for fourteen weeks.
                </p>
                <ul className="mt-8 space-y-3">
                  {["Pair programming, not passive listening", "Live code review on the projector", "Demo every lab — no hiding", "Seniors sit with juniors, always"].map((t) => (
                    <li key={t} className="flex items-start gap-3 font-mono text-[13.5px]">
                      <span className="mt-0.5 text-[#F05138]" aria-hidden>[✓]</span>
                      <span className="text-ink/80">{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-3">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink/40">visitors</span>
                  <span className="flex gap-0.5" aria-hidden>
                    {["0", "4", "2"].map((d, i) => (
                      <span key={i} className="grid h-7 w-5 place-items-center border border-line bg-paper-3 font-mono text-[13px] font-bold text-[#F05138]">
                        {d}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="container-x mt-16 sm:mt-24">
        <Reveal variant="scale">
          <div ref={parallax} style={{ transform: "translate3d(0, var(--py, 0px), 0)" }}>
            <div className="webcore-tile overflow-hidden ">
              <div className="win98-title flex items-center justify-between px-2 py-1">
                <span className="font-mono">campus_aerial.jpg — 300 acres, one lab</span>
                <span className="flex gap-1" aria-hidden>
                  <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">_</span>
                  <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">□</span>
                  <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">×</span>
                </span>
              </div>
              <div className="relative">
                <img src={campus} alt="Parul University campus at golden hour" loading="lazy" decoding="async" className="h-[46vh] min-h-[280px] w-full object-cover sm:h-[56vh]" />
                <p className="absolute bottom-2 left-0 right-0 text-center font-mono text-[8.5px] uppercase tracking-[0.16em] text-ink/30">[ replace with your own image ]</p>
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#F05138]">Vadodara, Gujarat</p>
                  <p className="display mt-3 max-w-2xl text-balance text-3xl text-ink sm:text-5xl">
                    A 300-acre campus. One room where apps get made.
                  </p>
                </div>
              </div>
              <div className="win98-out flex items-center justify-between bg-paper-2 px-3 py-1 font-mono text-[9.5px] text-ink">
                <span>Done</span>
                <span>.Local intranet</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
