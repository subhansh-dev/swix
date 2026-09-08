import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Tilt } from "./ui/Tilt";
import { Sticker, Squiggle, Deco } from "./ui/Deco";
import { Orb } from "./ui/Orb";
import { cn } from "@/utils/cn";

const curriculum = [
  { n: "01", t: "Explorations", d: "An introduction to coding, app design and problem-solving through interactive, real-world projects.", c: "card-coral" },
  { n: "02", t: "Fundamentals", d: "Build a strong foundation in Swift, user-interface design and iOS development by creating complete apps.", c: "card-lemon" },
  { n: "03", t: "Data Collections", d: "Advanced concepts: data management, networking and modern app architecture.", c: "card-mint" },
  { n: "04", t: "App Design", d: "Apply Apple's design principles to turn ideas into intuitive, user-centred apps.", c: "card-lavender" },
  { n: "05", t: "Project-Based", d: "Guided labs, collaborative projects, prototyping — the work that becomes your portfolio.", c: "card-sky" },
];

const devices = [
  { n: 22, l: "iMacs" },
  { n: 2, l: "MacBooks" },
  { n: 2, l: "iPads" },
  { n: 2, l: "iPhones" },
  { n: 1, l: "Apple TV" },
];

const certs = [
  { t: "App Development with Swift Associate", d: "Foundational knowledge of Swift, Xcode and core development concepts.", color: "bg-swift" },
  { t: "App Development with Swift Certified User", d: "Proficiency to design, develop and deploy apps across Apple platforms.", color: "bg-swift-deep" },
];

export function AppleLab() {
  return (
    <section id="apple-lab" className="cv-auto relative overflow-hidden bg-lav py-24 text-ink sm:py-32">
      <Deco variant="lav" />
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="container-x relative">
        <SectionHeader
          index="04"
          eyebrow="Apple Authorized · Parul University"
          title={
            <>
              An Apple Innovation Lab, <span className="text-gradient">right on campus.</span>
            </>
          }
          body="Parul University hosts an Apple Authorized Training Center — the same Develop in Swift curriculum Apple uses worldwide, delivered by Apple Certified Trainers on 29 Apple devices. It's free, it's open to every student, and it's where this club actually happens."
        />

        {/* Top stat banner + hero highlight */}
        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          {/* Praneel spotlight */}
          <Reveal variant="scale" className="lg:col-span-7">
            <Tilt max={5} lift={18} className="h-full">
              <div className="relative h-full overflow-hidden rounded-[32px] border-[3px] border-ink bg-white p-7 shadow-[0_12px_0_rgba(11,11,12,0.9)] sm:p-10">
                {/* colorful corner shapes */}
                <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-peach/80 blur-3xl" />
                <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-lavender blur-3xl" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <Sticker rotate={-3} color="bg-swift text-white">Student Success · 2026</Sticker>
                    <Sticker rotate={2} color="bg-lemon text-ink">First-year</Sticker>
                    <Orb variant="ios" box={40} size="small" className="ml-1" />
                  </div>
                  <h3 className="display mt-6 text-balance text-3xl sm:text-5xl">
                    From no Mac to Apple's <span className="text-gradient">global Top 350</span>.
                  </h3>
                  <p className="mt-5 max-w-xl text-pretty text-[16px] leading-relaxed text-muted">
                    Praneel Pandey, first-year B.Tech CSE, didn't own a Mac. He learned Swift on the Apple
                    Lab's curriculum through this club, built <strong className="text-ink">Blink Break</strong> — an
                    eye-movement-controlled game in SwiftUI — and Apple put him in the top 350
                    of 37 countries in the Swift Student Challenge 2026. Five months, start to finish.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {[
                      ["5 mo", "first line of code to global top 350"],
                      ["10–12h", "daily in the final month"],
                      ["0 Macs", "owned by Praneel — used the lab"],
                    ].map(([n, l]) => (
                      <div key={n} className="rounded-2xl border-[2px] border-ink bg-paper-2 p-4">
                        <p className="display text-2xl">{n}</p>
                        <p className="mt-1 text-[11.5px] leading-snug text-muted">{l}</p>
                      </div>
                    ))}
                  </div>

                  <a href="#join" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-swift-deep hover:text-ink">
                    Read the full story →
                  </a>
                </div>
              </div>
            </Tilt>
          </Reveal>

          {/* Lab specs */}
          <div className="grid gap-4 lg:col-span-5">
            <Reveal delay={120}>
              <div className="card-coral relative overflow-hidden rounded-[28px] border-[3px] border-ink p-6 shadow-[0_10px_0_rgba(11,11,12,0.9)] sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/60">The Apple Lab · Block B</p>
                <p className="display mt-3 text-4xl sm:text-5xl">29 devices</p>
                <p className="mt-1 text-[13.5px] text-ink/70">So you don't need to own a Mac.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {devices.map((d) => (
                    <span key={d.l} className="rounded-full border-[2px] border-ink bg-white/70 px-3 py-1.5 text-[12px] font-bold">
                      {d.n}× {d.l}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="card-lemon relative overflow-hidden rounded-[28px] border-[3px] border-ink p-6 shadow-[0_10px_0_rgba(11,11,12,0.9)] sm:p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/60">Your trainer</p>
                    <p className="mt-2 text-[17px] font-bold tracking-tight">Umang Panchal</p>
                    <p className="text-[13px] text-ink/70">Apple Certified Trainer</p>
                  </div>
                  <Sticker rotate={6} color="bg-swift text-white">ACT</Sticker>
                </div>
                <p className="mt-5 text-[13.5px] leading-relaxed text-ink/75">
                  Leads the Develop in Swift curriculum on campus. Mentored the team behind Parul's
                  Swift Student Challenge entries — including Praneel's Top-350 project.
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {["Swift", "SwiftUI", "App dev"].map((s) => (
                    <span key={s} className="rounded-md bg-white/85 px-2 py-0.5 font-mono text-[10.5px] text-ink/70 border border-ink/10">{s}</span>
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
                <p className="eyebrow">Apple's curriculum · on your timetable</p>
                <h2 className="display mt-4 text-balance text-3xl sm:text-[2.8rem]">
                  From first line of code <span className="text-gradient">to finished app</span>.
                </h2>
                <Squiggle color="#F05138" className="mt-6 w-40" />
                <p className="mt-6 text-pretty text-[15px] leading-relaxed text-muted">
                  Learning follows Apple's official Develop in Swift curriculum — the same structured
                  program Apple uses worldwide. Five stages. One finished app. A digital badge you can
                  put on your LinkedIn.
                </p>
              </div>
            </Reveal>

            <ol className="lg:col-span-8">
              {curriculum.map((c, i) => (
                <Reveal as="li" key={c.n} delay={i * 80}>
                  <div className="group flex items-start gap-5 border-t-[3px] border-ink/15 py-6 first:border-t-0 sm:py-8">
                    <span className={cn("sticker shrink-0 !shadow-[0_3px_0_rgba(11,11,12,0.8)]", c.c, i % 2 ? "rotate-2" : "-rotate-2")}>
                      {c.n}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight sm:text-[1.6rem]">{c.t}</h3>
                      <p className="mt-2 max-w-xl text-pretty text-[15px] leading-relaxed text-muted">{c.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <li className="border-t-[3px] border-ink/15 py-6">
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#join" className="btn btn-accent">Start Explorations</a>
                  <Sticker rotate={-2} color="bg-white text-ink">New batch every week</Sticker>
                  <Sticker rotate={3} color="bg-mint text-ink">One-week intensive</Sticker>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 lg:mt-28">
          <Reveal className="mb-8">
            <p className="eyebrow">Apple certifications</p>
            <h2 className="display mt-3 max-w-3xl text-balance text-3xl sm:text-[2.6rem]">
              Credentials Apple <span className="text-gradient">recognises</span> — and recruiters trust.
            </h2>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            {certs.map((c, i) => (
              <Reveal key={c.t} delay={i * 100}>
                <Tilt max={5} lift={14} className="h-full">
                  <div className={cn("relative overflow-hidden rounded-[28px] border-[3px] border-ink p-7 shadow-[0_10px_0_rgba(11,11,12,0.9)]", i === 0 ? "bg-white" : "bg-paper-2")}>
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Level 0{i + 1}</span>
                      <div className={cn("flex h-14 w-14 items-center justify-center rounded-2xl text-white", c.color)}>
                        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mt-5 text-balance text-xl font-bold tracking-tight sm:text-2xl">{c.t}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted">{c.d}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Globally recognised", "Digital badge", "CV-ready"].map((p) => (
                        <span key={p} className="rounded-md border border-ink/15 bg-white/80 px-2.5 py-1 text-[11px] font-medium">{p}</span>
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
