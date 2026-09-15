import workshop from "@/assets/workshop.webp";
import community from "@/assets/community.webp";
import macro from "@/assets/macro-code.webp";
import vision from "@/assets/vision.webp";
import campus from "@/assets/campus.webp";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { useParallax } from "@/hooks/useParallax";
import { cn } from "@/utils/cn";

const shots = [
  { src: workshop, alt: "Hack night at the Swift Coding Club", cap: "hack_night.jpg", meta: "Every Fri · 24h", cls: "sm:col-span-2 sm:row-span-2" },
  { src: community, alt: "Members building together in the Mac lab", cap: "thursday_lab.jpg", meta: "Block B · 3F" },
  { src: macro, alt: "Swift code on screen", cap: "code_review.jpg", meta: "Mentor 1:1" },
  { src: vision, alt: "Member prototyping in spatial computing", cap: "spatial_lab.jpg", meta: "visionOS" },
];

const faces = [
  { t: "Build", d: "Every session ends with running code.", bg: "#000080", win: true },
  { t: "Review", d: "Seniors read your diffs, line by line.", bg: "#0c0c0e", win: false },
  { t: "Ship", d: "TestFlight today, App Store next month.", bg: "#0c0c0e", win: false },
  { t: "Teach", d: "Then you run the juniors' lab.", bg: "#0c0c0e", win: false },
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
            className="absolute inset-0 backface-hidden rounded-sm border border-[#2a2a2e] p-5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)]"
            style={{
              background: f.bg,
              transform: `rotateY(${i * 90}deg) translateZ(${half}px)`,
              boxShadow: "0 0 0 1px rgba(0,0,0,0.8), 0 0 26px -12px rgba(0,255,170,0.3)",
            }}
          >
            <p className={cn("font-mono text-[10px] uppercase tracking-[0.24em]", f.win ? "text-[#7fdfff]" : "text-[#00ffaa]/70")}>0{i + 1}.exe</p>
            <p className="mt-auto text-2xl font-bold tracking-tight text-white">{f.t}</p>
            <p className="mt-1 text-[11.5px] leading-snug text-white/70">{f.d}</p>
          </div>
        ))}
        {/* top + bottom caps */}
        <div className="absolute inset-0 rounded-sm bg-[#1084d0]" style={{ transform: `rotateX(90deg) translateZ(${half}px)` }} />
        <div className="absolute inset-0 rounded-sm bg-[#1c1c1f]" style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }} />
      </div>
    </div>
  );
}

/** Gallery — Web Core: photo gallery as browser windows on a starfield desktop. */
export function Gallery() {
  const parallax = useParallax<HTMLDivElement>(26);
  return (
    <section id="life" className="webcore-section cv-auto relative overflow-hidden py-24 sm:py-32">
      {/* starfield desktop wallpaper */}
      <div aria-hidden className="webcore-stars pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(70% 50% at 50% 0%, rgba(0,255,170,0.06), transparent 60%)" }}
      />

      <div className="container-x relative">
        <SectionHeader
          index="07"
          eyebrow="Inside the club"
          dark
          title={
            <span className="text-[#e6e6e2]">
              Thursdays that look <span className="text-[#00ffaa]">nothing like a lecture.</span>
            </span>
          }
          body={
            <span className="text-white/60">
              Laptops open, mentors on the floor, music on low, and a build that has to run before you leave the room.
            </span>
          }
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          {/* photo wall — each photo a browser window */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {shots.map((s, i) => (
                <Reveal key={s.cap} delay={i * 90} className={cn("min-h-0", s.cls)}>
                  <figure className="webcore-tile overflow-hidden !rounded-sm transition-colors duration-300">
                    {/* titlebar */}
                    <div className="win98-title flex items-center justify-between px-2 py-1">
                      <span className="truncate font-mono">{s.cap}</span>
                      <span className="flex gap-1" aria-hidden>
                        <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">_</span>
                        <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">□</span>
                        <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">×</span>
                      </span>
                    </div>
                    {/* toolbar */}
                    <div className="flex items-center gap-1.5 border-b border-[#2a2a2e] bg-[#101014] px-2 py-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#00ffaa]/70" />
                      <span className="flex-1 truncate rounded-none border border-[#2a2a2e] bg-[#060607] px-2 py-0.5 font-mono text-[9px] text-[#00ffaa]/80">
                        swiftclub://gallery/{s.cap}
                      </span>
                    </div>
                    <img
                      src={s.src}
                      alt={s.alt}
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        "w-full object-cover",
                        s.cls ? "aspect-[16/10]" : "aspect-[4/3]"
                      )}
                    />
                    <figcaption className="flex items-center justify-between border-t border-[#2a2a2e] bg-[#0c0c0e] px-3 py-2">
                      <span className="font-mono text-[10.5px] text-white/60">{s.meta}</span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#00ffaa]">view ▸</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>

          {/* cube + copy */}
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="webcore-tile relative overflow-hidden !rounded-sm p-8 sm:p-10">
                {/* status line */}
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#00ffaa]/70">
                  C:\club\weekly_loop.exe — running
                </p>
                <Cube />
                <h3 className="relative mt-4 text-balance text-2xl font-bold tracking-tight text-[#e6e6e2] sm:text-3xl">
                  The loop we run every single week.
                </h3>
                <p className="relative mt-3 text-pretty text-[15px] leading-relaxed text-white/60">
                  Build something small. Have it reviewed by someone better than you. Ship it to real
                  people. Then teach it to the juniors behind you. Repeat for fourteen weeks.
                </p>
                <ul className="mt-8 space-y-3">
                  {["Pair programming, not passive listening", "Live code review on the projector", "Demo every lab — no hiding", "Seniors sit with juniors, always"].map((t) => (
                    <li key={t} className="flex items-start gap-3 font-mono text-[13.5px]">
                      <span className="mt-0.5 text-[#00ffaa]" aria-hidden>
                        [✓]
                      </span>
                      <span className="text-white/80">{t}</span>
                    </li>
                  ))}
                </ul>
                {/* visitor counter */}
                <div className="mt-8 flex items-center gap-3">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-white/40">visitors</span>
                  <span className="flex gap-0.5" aria-hidden>
                    {["0", "4", "2"].map((d, i) => (
                      <span
                        key={i}
                        className="grid h-7 w-5 place-items-center border border-[#2a2a2e] bg-[#060607] font-mono text-[13px] font-bold text-[#00ffaa]"
                        style={{ boxShadow: "0 0 8px rgba(0,255,170,0.25)" }}
                      >
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

      {/* wide campus banner with parallax — rendered as a full browser window */}
      <div className="container-x mt-16 sm:mt-24">
        <Reveal variant="scale">
          <div ref={parallax} style={{ transform: "translate3d(0, var(--py, 0px), 0)" }}>
            <div className="webcore-tile overflow-hidden !rounded-sm">
              <div className="win98-title flex items-center justify-between px-2 py-1">
                <span className="font-mono">campus_aerial.jpg — 300 acres, one lab</span>
                <span className="flex gap-1" aria-hidden>
                  <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">_</span>
                  <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">□</span>
                  <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">×</span>
                </span>
              </div>
              <div className="relative">
                <img
                  src={campus}
                  alt="Parul University campus at golden hour"
                  loading="lazy"
                  decoding="async"
                  className="h-[46vh] min-h-[280px] w-full object-cover sm:h-[56vh]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#060607]/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#00ffaa]">Vadodara, Gujarat</p>
                  <p className="display mt-3 max-w-2xl text-balance text-3xl text-[#e6e6e2] sm:text-5xl">
                    A 300-acre campus. One room where apps get made.
                  </p>
                </div>
              </div>
              {/* status bar */}
              <div className="win98-out flex items-center justify-between bg-[#c6c6c6] px-3 py-1 font-mono text-[9.5px] text-[#0a0a0a]">
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
