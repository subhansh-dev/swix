import team from "@/assets/team.webp";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Tilt } from "./ui/Tilt";
import { Deco, Sticker } from "./ui/Deco";
import { cn } from "@/utils/cn";

const core = [
  { n: "Aryan Mehta", r: "Club Lead", s: "3 apps · SSC '24", i: "AM", tone: "linear-gradient(140deg,#F05138,#FF8A5B)" },
  { n: "Krishna Vaghela", r: "Swift Track Head", s: "Mentored 40+", i: "KV", tone: "linear-gradient(140deg,#0B0B0C,#4A4A52)" },
  { n: "Tanvi Shah", r: "Design & SwiftUI", s: "Figma → code", i: "TS", tone: "linear-gradient(140deg,#7A5AF8,#C4B5FD)" },
  { n: "Harshil Parmar", r: "Infra & Dev Rel", s: "CI, TestFlight", i: "HP", tone: "linear-gradient(140deg,#12B76A,#6EE7B7)" },
  { n: "Nidhi Trivedi", r: "Community", s: "Events & alumni", i: "NT", tone: "linear-gradient(140deg,#FF9F0A,#FFD48A)" },
  { n: "Yash Bhatt", r: "Hackathon Captain", s: "6 wins", i: "YB", tone: "linear-gradient(140deg,#2B7FFF,#7AB8FF)" },
];

export function Team() {
  return (
    <section id="team" className="cv-auto relative overflow-hidden border-y-[3px] border-ink/10 bg-lemon-grad py-24 sm:py-32">
      <Deco variant="lemon" />
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="container-x relative">
        <SectionHeader
          index="09"
          eyebrow="Your mentors"
          title={
            <>
              Run by students, <span className="text-gradient">for students.</span>
            </>
          }
          body="Six people keep the lights on: they write the labs, review your pull requests and sit with you until the build passes. They were all in your seat two years ago."
        />

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12">
          <Reveal variant="scale" className="lg:col-span-5">
            <Tilt max={9} lift={26}>
              <figure className="relative overflow-hidden rounded-[28px] border-[3px] border-ink shadow-[0_12px_0_rgba(11,11,12,0.9)]">
                <img
                  src={team}
                  alt="The core team of the Swift Coding Club at Parul University"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl border-[2px] border-ink bg-white/92 px-5 py-4 shadow-[0_5px_0_rgba(11,11,12,0.9)] backdrop-blur-xl">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Core team · Cohort 07</p>
                  <p className="mt-1 text-lg font-bold tracking-tight">Six seniors. One shared Mac charger.</p>
                </figcaption>
                <div aria-hidden className="absolute -right-3 -top-3 rotate-6">
                  <Sticker rotate={8} color="bg-swift text-white">meet the team</Sticker>
                </div>
              </figure>
            </Tilt>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {core.map((m, i) => (
              <Reveal key={m.n} delay={i * 80}>
                <Tilt max={7} lift={16} className="h-full">
                  <div className="spotlight card-lift flex h-full items-center gap-4 rounded-2xl border-[2px] border-ink bg-white p-5 shadow-[0_6px_0_rgba(11,11,12,0.9)]">
                    <span
                      className="gpu flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-base font-bold text-white shadow-[0_14px_30px_-12px_rgba(11,11,12,0.5)]"
                      style={{ background: m.tone }}
                    >
                      {m.i}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[15.5px] font-bold tracking-tight">{m.n}</p>
                      <p className="mt-0.5 text-[13px] font-medium text-swift">{m.r}</p>
                      <p className="mt-0.5 truncate text-[12px] text-muted">{m.s}</p>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className={cn("mt-10 flex flex-wrap items-center gap-3")}>
          <span className="eyebrow">Alumni now at</span>
          {["Razorpay", "Zomato", "Slice", "CRED", "Infosys", "Jio"].map((c, i) => {
            const colors = ["bg-coral", "bg-lemon", "bg-mint", "bg-lavender", "bg-sky", "bg-peach"];
            return (
              <span key={c} className={cn("sticker !shadow-[0_2px_0_rgba(11,11,12,0.8)]", colors[i % colors.length])} style={{ ["--r" as string]: `${i % 2 ? 2 : -3}deg` }}>
                {c}
              </span>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
