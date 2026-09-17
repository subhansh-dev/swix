import team from "@/assets/team.jpg";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Tilt } from "./ui/Tilt";
import { cn } from "@/utils/cn";

const core = [
  { n: "Aryan Mehta", r: "Club Lead", s: "3 apps · SSC '24", i: "AM", c: "#b4552d" },
  { n: "Krishna Vaghela", r: "Swift Track Head", s: "Mentored 40+", i: "KV", c: "#2a1a10" },
  { n: "Tanvi Shah", r: "Design & SwiftUI", s: "Figma → code", i: "TS", c: "#c2521f" },
  { n: "Harshil Parmar", r: "Infra & Dev Rel", s: "CI, TestFlight", i: "HP", c: "#1d7a4c" },
  { n: "Nidhi Trivedi", r: "Community", s: "Events & alumni", i: "NT", c: "#d97a4a" },
  { n: "Yash Bhatt", r: "Hackathon Captain", s: "6 wins", i: "YB", c: "#2a1a10" },
];

const alumni = ["Razorpay", "Zomato", "Slice", "CRED", "Infosys", "Jio"];

/** Team — Retro Futurism: the crew manifest. Atomic roster cards, orbit badges. */
export function Team() {
  return (
    <section id="team" className="atomi-section cv-auto relative overflow-hidden py-24 sm:py-32">
      {/* backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="atomi-ring gpu animate-spin-slow left-[4%] top-[8%] h-44 w-44" style={{ animationDuration: "62s" }} />
        {[
          { left: "12%", top: "20%", s: "✦", size: "text-lg", d: "0s" },
          { left: "88%", top: "30%", s: "✧", size: "text-base", d: "1.5s" },
          { left: "80%", top: "80%", s: "✦", size: "text-base", d: "2.3s" },
        ].map((s, i) => (
          <span key={i} className={cn("atomi-star gpu animate-pulse-soft absolute font-mono", s.size)} style={{ left: s.left, top: s.top, animationDelay: s.d }}>
            {s.s}
          </span>
        ))}
      </div>

      <div className="container-x relative">
        <SectionHeader
          index="09"
          eyebrow="Your mentors"
          title={
            <span className="text-[#2a1a10]">
              Run by students, <span className="text-[#c2521f]">for students.</span>
            </span>
          }
          body={
            <span className="text-[#6b4a34]">
              Six people keep the lights on: they write the labs, review your pull requests and sit with you until the
              build passes. They were all in your seat two years ago.
            </span>
          }
        />

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12">
          <Reveal variant="scale" className="lg:col-span-5">
            <Tilt max={9} lift={26}>
              <figure className="atomi-card relative overflow-hidden">
                {/* caption strip */}
                <div className="flex items-center justify-between border-b border-[#b4552d]/25 px-4 py-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a6a50]">core_team · 2025–26</span>
                  <span className="atomi-chip !py-0.5 !text-[9px]">crew manifest</span>
                </div>
                <img
                  src={team}
                  alt="The core team of the Swift Coding Club at Parul University"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
                <p className="absolute bottom-14 left-4 right-4 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-[#8a6a50]/60">[ replace with your own image ]</p>
                <figcaption className="flex items-center justify-between border-t border-[#b4552d]/25 px-4 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a6a50]">six seniors · one charger</span>
                  <span aria-hidden className="text-[#c2521f]">✦</span>
                </figcaption>
              </figure>
            </Tilt>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {core.map((m, i) => (
              <Reveal key={m.n} delay={i * 80}>
                <Tilt max={7} lift={16} className="h-full">
                  <div className="atomi-card card-lift flex h-full items-center gap-4 p-5">
                    <span
                      className="grid h-14 w-14 shrink-0 place-items-center rounded-full text-base font-bold"
                      style={{
                        color: "#ffe8d2",
                        background: `radial-gradient(circle at 32% 28%, ${m.c}, #2a1a10 130%)`,
                        boxShadow: "0 12px 26px -12px rgba(122,60,20,0.7), inset 0 1px 0 rgba(255,255,255,0.4)",
                      }}
                      aria-hidden
                    >
                      {m.i}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[15.5px] font-bold tracking-tight text-[#2a1a10]">{m.n}</p>
                      <p className="mt-0.5 text-[13px] font-medium" style={{ color: m.c === "#2a1a10" ? "#b4552d" : m.c }}>
                        {m.r}
                      </p>
                      <p className="mt-0.5 truncate font-mono text-[11.5px] text-[#8a6a50]">{m.s}</p>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className={cn("mt-10 flex flex-wrap items-center gap-3")}>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a6a50]">Alumni now at</span>
          {alumni.map((c) => (
            <span key={c} className="atomi-chip">
              <span aria-hidden className="text-[#c2521f]">✦</span>
              {c}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
