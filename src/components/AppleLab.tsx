import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Tilt } from "./ui/Tilt";
import { Orb } from "./ui/Orb";
import { cn } from "@/utils/cn";

const curriculum = [
  { n: "01", t: "Explorations", d: "An introduction to coding, app design and problem-solving through interactive, real-world projects." },
  { n: "02", t: "Fundamentals", d: "Build a strong foundation in Swift, user-interface design and iOS development by creating complete apps." },
  { n: "03", t: "Data Collections", d: "Advanced concepts: data management, networking and modern app architecture." },
  { n: "04", t: "App Design", d: "Apply Apple's design principles to turn ideas into intuitive, user-centred apps." },
  { n: "05", t: "Project-Based", d: "Guided labs, collaborative projects, prototyping — the work that becomes your portfolio." },
];

const devices = [
  { n: 22, l: "iMacs" },
  { n: 2, l: "MacBooks" },
  { n: 2, l: "iPads" },
  { n: 2, l: "iPhones" },
  { n: 1, l: "Apple TV" },
];

const certs = [
  { t: "App Development with Swift Associate", d: "Foundational knowledge of Swift, Xcode and core development concepts.", star: "✦" },
  { t: "App Development with Swift Certified User", d: "Proficiency to design, develop and deploy apps across Apple platforms.", star: "✹" },
];

const starfield = [
  { left: "4%", top: "12%", s: "✦", size: "text-lg", d: "0s" },
  { left: "12%", top: "64%", s: "✧", size: "text-base", d: "1.2s" },
  { left: "26%", top: "22%", s: "·", size: "text-xl", d: "2s" },
  { left: "44%", top: "8%", s: "✦", size: "text-sm", d: "0.6s" },
  { left: "58%", top: "70%", s: "✧", size: "text-lg", d: "1.8s" },
  { left: "72%", top: "16%", s: "✦", size: "text-base", d: "2.6s" },
  { left: "86%", top: "44%", s: "✧", size: "text-xl", d: "0.9s" },
  { left: "93%", top: "78%", s: "·", size: "text-lg", d: "1.5s" },
];

/** Apple Lab — Retro Futurism: Atomic Age cream gradients, orbits, starbursts, boomerang forms. */
export function AppleLab() {
  return (
    <section id="apple-lab" className="atomi-section cv-auto relative overflow-hidden py-24 text-ink sm:py-32">
      {/* starfield + orbits */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {starfield.map((s, i) => (
          <span
            key={i}
            className={cn("atomi-star gpu animate-pulse-soft absolute font-mono", s.size)}
            style={{ left: s.left, top: s.top, animationDelay: s.d }}
          >
            {s.s}
          </span>
        ))}
        <span className="atomi-ring gpu animate-spin-slow left-[6%] top-[10%] h-40 w-40" style={{ animationDuration: "50s" }} />
        <span className="atomi-ring gpu animate-spin-slow right-[8%] top-[30%] h-56 w-56" style={{ animationDuration: "64s", animationDirection: "reverse" }} />
        {/* boomerang arch, the googie signature */}
        <svg className="absolute bottom-0 left-0 h-32 w-full opacity-30" viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none" aria-hidden>
          <path d="M0 120 Q 300 0 600 60 T 1200 30" stroke="#0b0b0c" strokeWidth="2" strokeDasharray="6 8" />
          <path d="M0 140 Q 300 20 600 80 T 1200 50" stroke="#b4552d" strokeWidth="2" />
        </svg>
      </div>

      <div className="container-x relative">
        <SectionHeader
          index="04"
          eyebrow="Apple Authorized · Parul University"
          title={
            <span className="text-[#2a1a10]">
              An Apple Innovation Lab, <span className="text-[#c2521f]">right on campus.</span>
            </span>
          }
          body={
            <span className="text-[#6b4a34]">
              Parul University hosts an Apple Authorized Training Center — the same Develop in Swift curriculum Apple
              uses worldwide, delivered by Apple Certified Trainers on 29 Apple devices. It's free, it's open to every
              student, and it's where this club actually happens.
            </span>
          }
        />

        {/* Top stat banner + hero highlight */}
        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          {/* Praneel spotlight */}
          <Reveal variant="scale" className="lg:col-span-7">
            <Tilt max={5} lift={18} className="h-full">
              <div
                className="relative h-full overflow-hidden rounded-[32px] p-7 sm:p-10"
                style={{
                  background: "linear-gradient(160deg,#fffdf8,#fdf3e2)",
                  border: "1.5px solid rgba(180,85,45,0.35)",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 24px 50px -24px rgba(122,60,20,0.35)",
                }}
              >
                <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#ffd9b8]/80 blur-3xl" />
                <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#ffe9d2] blur-3xl" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="atomi-btn rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em]">Student Success · 2026</span>
                    <span className="rounded-full border border-[#b4552d]/40 bg-white/70 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6b4a34]">First-year</span>
                    <Orb variant="ios" box={40} size="small" className="ml-1" />
                  </div>
                  <h3 className="display mt-6 text-balance text-3xl text-[#2a1a10] sm:text-5xl">
                    From no Mac to Apple's <span className="text-[#c2521f]">global Top 350</span>.
                  </h3>
                  <p className="mt-5 max-w-xl text-pretty text-[16px] leading-relaxed text-[#6b4a34]">
                    Praneel Pandey, first-year B.Tech CSE, didn't own a Mac. He learned Swift on the Apple
                    Lab's curriculum through this club, built <strong className="text-[#2a1a10]">Blink Break</strong> — an
                    eye-movement-controlled game in SwiftUI — and Apple put him in the top 350
                    of 37 countries in the Swift Student Challenge 2026. Five months, start to finish.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {[
                      ["5 mo", "first line of code to global top 350"],
                      ["10–12h", "daily in the final month"],
                      ["0 Macs", "owned by Praneel — used the lab"],
                    ].map(([n, l]) => (
                      <div key={n} className="rounded-2xl border border-[#b4552d]/30 bg-white/70 p-4 shadow-[0_10px_26px_-18px_rgba(122,60,20,0.5)]">
                        <p className="display text-2xl text-[#b4552d]">{n}</p>
                        <p className="mt-1 text-[11.5px] leading-snug text-[#6b4a34]">{l}</p>
                      </div>
                    ))}
                  </div>

                  <a href="#join" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#c2521f] hover:text-[#2a1a10]">
                    Read the full story →
                  </a>
                </div>
              </div>
            </Tilt>
          </Reveal>

          {/* Lab specs */}
          <div className="grid gap-4 lg:col-span-5">
            <Reveal delay={120}>
              <div
                className="relative overflow-hidden rounded-[28px] p-6 sm:p-8"
                style={{
                  background: "linear-gradient(160deg,#fff8ec,#ffe7cc)",
                  border: "1.5px solid rgba(180,85,45,0.35)",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 20px 44px -20px rgba(122,60,20,0.4)",
                }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#8a6a50]">The Apple Lab · Block B</p>
                <p className="display mt-3 text-4xl text-[#2a1a10] sm:text-5xl">29 devices</p>
                <p className="mt-1 text-[13.5px] text-[#6b4a34]">So you don't need to own a Mac.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {devices.map((d) => (
                    <span key={d.l} className="rounded-full border border-[#b4552d]/35 bg-white/75 px-3 py-1.5 text-[12px] font-bold text-[#4a2e18]">
                      {d.n}× {d.l}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div
                className="relative overflow-hidden rounded-[28px] p-6 sm:p-8"
                style={{
                  background: "linear-gradient(160deg,#fffdf6,#fdeecf)",
                  border: "1.5px solid rgba(180,85,45,0.3)",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 20px 44px -20px rgba(122,60,20,0.35)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#8a6a50]">Your trainer</p>
                    <p className="mt-2 text-[17px] font-bold tracking-tight text-[#2a1a10]">Umang Panchal</p>
                    <p className="text-[13px] text-[#6b4a34]">Apple Certified Trainer</p>
                  </div>
                  <span className="atomi-btn grid h-11 w-11 place-items-center rounded-full font-mono text-[10px] tracking-[0.1em]">ACT</span>
                </div>
                <p className="mt-5 text-[13.5px] leading-relaxed text-[#6b4a34]">
                  Leads the Develop in Swift curriculum on campus. Mentored the team behind Parul's
                  Swift Student Challenge entries — including Praneel's Top-350 project.
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {["Swift", "SwiftUI", "App dev"].map((s) => (
                    <span key={s} className="rounded-md border border-[#b4552d]/25 bg-white/70 px-2 py-0.5 font-mono text-[10.5px] text-[#6b4a34]">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Develop in Swift curriculum */}
        <div className="mt-20 lg:mt-28">
          <div className="grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a6a50]">Apple's curriculum · on your timetable</p>
                <h2 className="display mt-4 text-balance text-3xl text-[#2a1a10] sm:text-[2.8rem]">
                  From first line of code <span className="text-[#c2521f]">to finished app</span>.
                </h2>
                <p className="mt-6 text-pretty text-[15px] leading-relaxed text-[#6b4a34]">
                  Learning follows Apple's official Develop in Swift curriculum — the same structured
                  program Apple uses worldwide. Five stages. One finished app. A digital badge you can
                  put on your LinkedIn.
                </p>
              </div>
            </Reveal>

            <ol className="lg:col-span-8">
              {curriculum.map((c, i) => (
                <Reveal as="li" key={c.n} delay={i * 80}>
                  <div className="group flex items-start gap-5 border-t border-[#b4552d]/25 py-6 first:border-t-0 sm:py-8">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#b4552d]/40 bg-white/70 font-mono text-[11px] font-bold text-[#b4552d] shadow-[0_6px_16px_-10px_rgba(122,60,20,0.6)]">
                      {c.n}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-[#2a1a10] sm:text-[1.6rem]">{c.t}</h3>
                      <p className="mt-2 max-w-xl text-pretty text-[15px] leading-relaxed text-[#6b4a34]">{c.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <li className="border-t border-[#b4552d]/25 py-6">
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#join" className="atomi-btn inline-flex items-center px-6 py-3 text-sm">Start Explorations</a>
                  <span className="rounded-full border border-[#b4552d]/35 bg-white/70 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6b4a34]">New batch every week</span>
                  <span className="rounded-full border border-[#b4552d]/35 bg-white/70 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6b4a34]">One-week intensive</span>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 lg:mt-28">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a6a50]">Apple certifications</p>
            <h2 className="display mt-3 max-w-3xl text-balance text-3xl text-[#2a1a10] sm:text-[2.6rem]">
              Credentials Apple <span className="text-[#c2521f]">recognises</span> — and recruiters trust.
            </h2>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            {certs.map((c, i) => (
              <Reveal key={c.t} delay={i * 100}>
                <Tilt max={5} lift={14} className="h-full">
                  <div
                    className="relative overflow-hidden rounded-[28px] p-7"
                    style={{
                      background: i === 0 ? "linear-gradient(160deg,#fffdf8,#fdf1dd)" : "linear-gradient(160deg,#fffaf0,#fbe4c8)",
                      border: "1.5px solid rgba(180,85,45,0.32)",
                      boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 20px 44px -20px rgba(122,60,20,0.35)",
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#8a6a50]">Level 0{i + 1}</span>
                      <div className="relative grid h-14 w-14 place-items-center">
                        <span className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-[#b4552d]/50" style={{ animationDuration: "30s" }} />
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#b4552d] text-lg text-[#ffe8d2] shadow-[0_10px_22px_-10px_rgba(180,85,45,0.8)]">
                          {c.star}
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-5 text-balance text-xl font-bold tracking-tight text-[#2a1a10] sm:text-2xl">{c.t}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-[#6b4a34]">{c.d}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Globally recognised", "Digital badge", "CV-ready"].map((p) => (
                        <span key={p} className="rounded-full border border-[#b4552d]/25 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-[#6b4a34]">{p}</span>
                      ))}
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
