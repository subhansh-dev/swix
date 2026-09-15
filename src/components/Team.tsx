import team from "@/assets/team.webp";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Tilt } from "./ui/Tilt";
import { cn } from "@/utils/cn";

const core = [
  { n: "Aryan Mehta", r: "Club Lead", s: "3 apps · SSC '24", i: "AM", c: "#e2ff2e" },
  { n: "Krishna Vaghela", r: "Swift Track Head", s: "Mentored 40+", i: "KV", c: "#8b7bff" },
  { n: "Tanvi Shah", r: "Design & SwiftUI", s: "Figma → code", i: "TS", c: "#ff3df2" },
  { n: "Harshil Parmar", r: "Infra & Dev Rel", s: "CI, TestFlight", i: "HP", c: "#00ffaa" },
  { n: "Nidhi Trivedi", r: "Community", s: "Events & alumni", i: "NT", c: "#e2ff2e" },
  { n: "Yash Bhatt", r: "Hackathon Captain", s: "6 wins", i: "YB", c: "#8b7bff" },
];

const alumni = ["Razorpay", "Zomato", "Slice", "CRED", "Infosys", "Jio"];

/** Team — Acid: black void, wireframes, neon initials, corporate-gravity roster. */
export function Team() {
  return (
    <section id="team" className="acid-section cv-auto relative overflow-hidden py-24 sm:py-32">
      {/* backdrops */}
      <div aria-hidden className="acid-checker pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_10%_10%,black,transparent_55%)]" />
      <div aria-hidden className="acid-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_90%_90%,black,transparent_60%)]" />
      <div
        aria-hidden
        className="gpu animate-acid-flicker pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full border border-[#ff3df2]/30"
        style={{ boxShadow: "0 0 70px -26px rgba(255,61,242,0.5) inset" }}
      />

      <div className="container-x relative">
        <SectionHeader
          index="09"
          eyebrow="Your mentors"
          dark
          title={
            <span className="text-[#f2f2f0]">
              Run by students, <span className="acid-lime">for students.</span>
            </span>
          }
          body={
            <span className="text-white/60">
              Six people keep the lights on: they write the labs, review your pull requests and sit with you until the
              build passes. They were all in your seat two years ago.
            </span>
          }
        />

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12">
          <Reveal variant="scale" className="lg:col-span-5">
            <Tilt max={9} lift={26}>
              <figure
                className="acid-card relative overflow-hidden"
                style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.6), 0 0 44px -16px rgba(226,255,46,0.45)" }}
              >
                {/* fake window titlebar */}
                <div className="flex items-center justify-between border-b border-[#e2ff2e]/30 bg-[#101012] px-3 py-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e2ff2e]">core_team.raw — 6 subjects</span>
                  <span className="font-mono text-[10px] text-white/40" aria-hidden>
                    +
                  </span>
                </div>
                <img
                  src={team}
                  alt="The core team of the Swift Coding Club at Parul University"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
                <figcaption className="flex items-center justify-between border-t border-[#e2ff2e]/30 bg-[#101012] px-4 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">Core team · 2025–26</span>
                  <span className="acid-chip">six seniors</span>
                </figcaption>
              </figure>
            </Tilt>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {core.map((m, i) => (
              <Reveal key={m.n} delay={i * 80}>
                <Tilt max={7} lift={16} className="h-full">
                  <div
                    className="acid-card card-lift flex h-full items-center gap-4 p-5 transition-shadow duration-300"
                    style={{ boxShadow: `0 0 0 1px rgba(0,0,0,0.6), 0 0 28px -14px ${m.c}` }}
                  >
                    <span
                      className="grid h-14 w-14 shrink-0 place-items-center rounded-sm border text-base font-bold"
                      style={{
                        color: m.c,
                        borderColor: `${m.c}66`,
                        background: `${m.c}14`,
                        boxShadow: `0 0 18px -6px ${m.c}`,
                        textShadow: `0 0 12px ${m.c}`,
                      }}
                      aria-hidden
                    >
                      {m.i}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[15.5px] font-bold tracking-tight text-[#f2f2f0]">{m.n}</p>
                      <p className="mt-0.5 text-[13px] font-medium" style={{ color: m.c }}>
                        {m.r}
                      </p>
                      <p className="mt-0.5 truncate font-mono text-[11.5px] text-white/50">{m.s}</p>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className={cn("mt-10 flex flex-wrap items-center gap-3")}>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">Alumni now at</span>
          {alumni.map((c, i) => (
            <span
              key={c}
              className={cn(
                "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em]",
                i % 2 ? "border-[#8b7bff]/50 bg-[#8b7bff]/10 text-[#b7aaff]" : "border-[#e2ff2e]/50 bg-[#e2ff2e]/10 text-[#e2ff2e]"
              )}
            >
              {c}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
