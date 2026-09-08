import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Tilt } from "./ui/Tilt";
import { Magnetic } from "./ui/Magnetic";
import { Sticker, Deco } from "./ui/Deco";
import { Orb } from "./ui/Orb";
import { cn } from "@/utils/cn";

type Track = {
  name: string;
  line: string;
  desc: string;
  cta: string;
  seats: { taken: number; total: number };
  perks: string[];
  featured?: boolean;
  tint: string;
  accent: string;
};

const tracks: Track[] = [
  {
    name: "Explorer",
    line: "Just show up",
    desc: "Walk into any Thursday lab, no sign-up, no fee, no laptop required. Stay curious, leave when you like.",
    cta: "Walk in Thursday",
    seats: { taken: 186, total: 200 },
    perks: ["Open labs, every week", "Discord community", "Guest talks & demo nights", "Zero commitment"],
    tint: "card-ember",
    accent: "bg-[#F05138]",
  },
  {
    name: "Builder",
    line: "The full program",
    desc: "The 14-week program. Assigned mentor, Mac Lab access, and one capstone app on your name by Demo Day.",
    cta: "Become a Builder",
    seats: { taken: 47, total: 60 },
    featured: true,
    perks: [
      "All labs & workshops",
      "Senior mentor, 1:1 reviews",
      "Mac Lab scheduled access",
      "Capstone + App Review support",
      "Publish under the club's Apple Developer account",
      "Hackathon & Swift Student Challenge squad",
    ],
    tint: "card-ember-deep",
    accent: "bg-[#FF7A5C]",
  },
  {
    name: "Core",
    line: "Run the club",
    desc: "For members who've shipped once and want to teach. Selected every semester by the outgoing Core.",
    cta: "Express interest",
    seats: { taken: 6, total: 6 },
    perks: [
      "Everything in Builder",
      "Design & lead a lab track",
      "Review juniors' pull requests",
      "Incubation referrals (PU IIC)",
      "Core badge, hoodie & alumni network",
    ],
    tint: "card-ember-stone",
    accent: "bg-[#FFD3BC]",
  },
];

function Seats({ taken, total }: { taken: number; total: number }) {
  const pct = Math.min(100, Math.round((taken / total) * 100));
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Seats</span>
        <span className="font-mono text-[11px] text-ink/70">
          {taken}/{total}
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/10">
        <div
          className="gpu h-full rounded-full bg-gradient-to-r from-[#F05138] via-[#FF7A5C] to-[#FFD3BC] transition-[width] duration-1000 ease-[var(--ease-out-expo)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function Tracks() {
  return (
    <section id="join" className="cv-auto relative overflow-hidden py-24 sm:py-32">
      <Deco variant="warm" />
      <div className="container-x relative">
        <SectionHeader
          index="11"
          eyebrow="Membership · free"
          title={
            <>
              Three tracks. <span className="text-gradient">Zero rupees.</span>
            </>
          }
          body="The club is funded by the university and run by volunteers. You will never be asked to pay — no membership fee, no lab charge, no hidden kit cost. The only thing we ask for is showing up."
        />

        <Reveal delay={160} className="mt-8 flex flex-wrap items-center gap-4">
          <Orb variant="ios" box={40} size="small" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            runs on iOS · iPadOS · visionOS — one codebase, whole ecosystem
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-3">
          {tracks.map((t, i) => (
            <Reveal key={t.name} delay={i * 110} className="h-full">
              <Tilt max={t.featured ? 8 : 5} lift={t.featured ? 24 : 12} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-[28px] border-[3px] border-ink p-7 shadow-[0_10px_0_rgba(11,11,12,0.9)] sm:p-8",
                    t.tint
                  )}
                >
                  <div aria-hidden className={cn("pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-50 blur-3xl", t.accent)} />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight">{t.name}</h3>
                        <p className="mt-1 text-[13px] font-medium text-[#E84830]">{t.line}</p>
                      </div>
                      <span className="sticker !shadow-[0_2px_0_rgba(11,11,12,0.8)]" style={{ ["--r" as string]: "6deg", background: "#fff", color: "#0b0b0c" }}>
                        Free
                      </span>
                    </div>

                    <div className="mt-7 flex items-end gap-2">
                      <span className="display text-5xl sm:text-[3.4rem]">₹0</span>
                      <span className="pb-2 text-sm text-muted">always</span>
                    </div>

                    <p className="mt-4 text-[14.5px] leading-relaxed text-ink/70">{t.desc}</p>

                    <ul className="mt-7 space-y-3">
                      {t.perks.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-[14px]">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#F05138]" viewBox="0 0 16 16" fill="none" aria-hidden>
                            <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-ink/85">{p}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Seats taken={t.seats.taken} total={t.seats.total} />
                    </div>

                    <div className="mt-8">
                      <Magnetic strength={0.2} className="w-full">
                        <a
                          href="#cta"
                          className={cn("btn w-full", t.featured ? "btn-accent" : "btn-ghost")}
                        >
                          {t.cta}
                        </a>
                      </Magnetic>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250} className="mt-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-[24px] border-[3px] border-ink bg-white px-7 py-6 text-center shadow-[0_8px_0_rgba(11,11,12,0.9)] sm:flex-row sm:text-left">
            <p className="text-[15px] font-medium">
              Open to every Parul University student — any faculty, any year, any experience level.
            </p>
            <Sticker rotate={-3} color="bg-[#FFD3BC] text-ink">No fee · Thu 5pm</Sticker>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
