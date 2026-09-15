import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Tilt } from "./ui/Tilt";
import { Magnetic } from "./ui/Magnetic";
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
  glow: string;
  chip: string;
};

const tracks: Track[] = [
  {
    name: "Explorer",
    line: "Just show up",
    desc: "Walk into any Thursday lab, no sign-up, no fee, no laptop required. Stay curious, leave when you like.",
    cta: "Walk in Thursday",
    seats: { taken: 186, total: 200 },
    perks: ["Open labs, every week", "Discord community", "Guest talks & demo nights", "Zero commitment"],
    glow: "rgba(60,160,220,0.45)",
    chip: "linear-gradient(180deg,#ffffff,#dff3ff)",
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
    glow: "rgba(35,130,80,0.45)",
    chip: "linear-gradient(180deg,#ffffff,#dcfce9)",
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
    glow: "rgba(200,150,30,0.4)",
    chip: "linear-gradient(180deg,#ffffff,#fff3d6)",
  },
];

function Seats({ taken, total }: { taken: number; total: number }) {
  const pct = Math.min(100, Math.round((taken / total) * 100));
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2c6c8f]">Seats</span>
        <span className="font-mono text-[11px] font-semibold text-[#0d3a52]">
          {taken}/{total}
        </span>
      </div>
      <div
        className="mt-2 h-2 overflow-hidden rounded-full border border-white/70 bg-white/40"
        style={{ boxShadow: "inset 0 1px 2px rgba(28,100,131,0.25)" }}
      >
        <div
          className="gpu h-full rounded-full transition-[width] duration-1000 ease-[var(--ease-out-expo)]"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg,#3aa5d9,#46b877)",
            boxShadow: "0 0 8px rgba(70,184,119,0.6), inset 0 1px 0 rgba(255,255,255,0.7)",
          }}
        />
      </div>
    </div>
  );
}

/** Tracks — Frutiger Aero: glossy aqua membership panels on a fresh sky gradient. */
export function Tracks() {
  return (
    <section id="join" className="aero cv-auto relative overflow-hidden py-24 sm:py-32">
      {/* aero backdrop */}
      <div aria-hidden className="aero-sky pointer-events-none absolute inset-0 opacity-60" />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute -top-20 left-[12%] h-64 w-[32rem] rounded-full bg-white/60 blur-3xl" />
        <span className="absolute bottom-0 right-[6%] h-56 w-72 rounded-full bg-[#8fe0b0]/40 blur-3xl" />
        {[
          { left: "6%", size: 24, d: "0s" },
          { left: "22%", size: 12, d: "2.2s" },
          { left: "48%", size: 18, d: "4.6s" },
          { left: "70%", size: 10, d: "1.4s" },
          { left: "88%", size: 20, d: "3.4s" },
        ].map((b, i) => (
          <span
            key={i}
            className="aero-bubble gpu animate-aero-rise"
            style={{ left: b.left, bottom: "-30px", width: b.size, height: b.size, animationDelay: b.d, animationDuration: "15s" }}
          />
        ))}
      </div>

      <div className="container-x relative">
        <SectionHeader
          index="11"
          eyebrow="Membership · free"
          title={
            <span className="text-[#0d3a52]">
              Three tracks. <span className="bg-gradient-to-r from-[#3aa5d9] to-[#2f9e5f] bg-clip-text text-transparent">Zero rupees.</span>
            </span>
          }
          body={
            <span className="text-[#2c6c8f]">
              The club is funded by the university and run by volunteers. You will never be asked to pay — no
              membership fee, no lab charge, no hidden kit cost. The only thing we ask for is showing up.
            </span>
          }
        />

        <Reveal delay={160} className="mt-8 flex flex-wrap items-center gap-4">
          <Orb variant="ios" box={40} size="small" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2c6c8f]">
            runs on iOS · iPadOS · visionOS — one codebase, whole ecosystem
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {tracks.map((t, i) => (
            <Reveal key={t.name} delay={i * 110} className="h-full">
              <Tilt max={t.featured ? 8 : 5} lift={t.featured ? 24 : 12} className="h-full">
                <div
                  className={cn("aero-panel aero-gloss relative flex h-full flex-col overflow-hidden !rounded-[26px] p-7 sm:p-8", t.featured && "ring-2 ring-[#46b877]/40")}
                  style={{ boxShadow: `0 1px 0 rgba(255,255,255,0.95) inset, 0 26px 56px -24px ${t.glow}` }}
                >
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-[#0d3a52]">{t.name}</h3>
                        <p className="mt-1 text-[13px] font-medium text-[#1d7a4c]">{t.line}</p>
                      </div>
                      <span
                        className="rounded-full border border-white/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#1d7a4c]"
                        style={{ background: t.chip, boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 6px 14px -8px rgba(28,100,131,0.5)" }}
                      >
                        Free
                      </span>
                    </div>

                    <div className="mt-7 flex items-end gap-2">
                      <span className="display text-5xl text-[#0d3a52] sm:text-[3.4rem]">₹0</span>
                      <span className="pb-2 text-sm text-[#2c6c8f]">always</span>
                    </div>

                    <p className="mt-4 text-[14.5px] leading-relaxed text-[#2c6c8f]">{t.desc}</p>

                    <ul className="mt-7 space-y-3">
                      {t.perks.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-[14px]">
                          <span
                            className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[9px] text-white"
                            style={{ background: "linear-gradient(180deg,#5ec98a,#2f9e5f)", boxShadow: "0 1px 0 rgba(255,255,255,0.7) inset" }}
                            aria-hidden
                          >
                            ✓
                          </span>
                          <span className="text-[#0d3a52]/85">{p}</span>
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
                          className={cn(
                            "flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold tracking-tight transition-transform duration-300 hover:-translate-y-0.5",
                            t.featured ? "text-white" : "border border-[#3aa5d9]/40 bg-white/80 text-[#0d3a52]"
                          )}
                          style={
                            t.featured
                              ? { background: "linear-gradient(180deg,#5ec98a,#2f9e5f)", boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 14px 30px -12px rgba(47,158,95,0.7)" }
                              : { boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 10px 24px -14px rgba(28,100,131,0.5)" }
                          }
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
          <div className="aero-panel flex flex-col items-center justify-between gap-4 px-7 py-6 text-center sm:flex-row sm:text-left">
            <p className="text-[15px] font-medium text-[#0d3a52]">
              Open to every Parul University student — any faculty, any year, any experience level.
            </p>
            <span
              className="rounded-full border border-white/90 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#0d3a52]"
              style={{ background: "linear-gradient(180deg,#ffffff,#dff3ff)", boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset" }}
            >
              No fee · Thu 5pm
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
