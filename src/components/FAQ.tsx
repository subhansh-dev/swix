import { useId, useState } from "react";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { cn } from "@/utils/cn";

const holo = "linear-gradient(135deg,#7ad9ff,#9a8cff 30%,#ff7ad1 55%,#ffb35c 78%,#67e0a8)";

const faqs = [
  {
    q: "Do I need a Mac to join?",
    a: "No. Builder and Core members get scheduled access to the PIT Mac Lab (Block B, 3rd floor) with Xcode pre-installed. Many members start on the lab machines and buy a used Mac later — we keep a list of trusted sellers too.",
  },
  {
    q: "I've never coded before. Is this for me?",
    a: "Yes. We start from Swift fundamentals — variables, optionals, functions — before touching SwiftUI. We pace the first four weeks for absolute beginners, and mentors run extra 'zero-to-Xcode' sessions on Saturdays.",
  },
  {
    q: "Which branches or years can join?",
    a: "Every student of Parul University, from any faculty and any year. Our current members include CSE, IT, BCA, Design, Pharmacy and MBA students.",
  },
  {
    q: "How much time does it take each week?",
    a: "About 4–5 hours: one 2-hour Thursday lab, a 1-hour mentor check-in, and self-paced build time. Capstone weeks (weeks 10–14) can run heavier, and we plan around exams.",
  },
  {
    q: "Will my app actually be on the App Store?",
    a: "If it passes our internal review and Apple's guidelines, yes. Members publish under the club's Apple Developer team at no extra cost. 12 student apps have launched so far; you retain full ownership of your code and IP.",
  },
  {
    q: "What about Android or cross-platform?",
    a: "We're a Swift-first club by design — depth over breadth. That said, we run occasional sessions on Swift on the server and shared-logic patterns, and collaborate with GDG Vadodara for Android events.",
  },
];

function Item({ q, a, open, onToggle, i }: { q: string; a: string; open: boolean; onToggle: () => void; i: number }) {
  const id = useId();
  return (
    <Reveal as="li" delay={i * 60} className="border-t border-[#9a8cff]/20 last:border-b">
      <h3>
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
        >
          <span className="flex items-baseline gap-5">
            <span className="hidden font-mono text-[11px] tracking-[0.2em] text-[#9a8cff]/50 sm:inline">0{i + 1}</span>
            <span className={cn("text-lg font-semibold tracking-tight transition-colors sm:text-xl", open ? "y2k-holo-text" : "text-[#2a2850] group-hover:text-[#9a8cff]")}>
              {q}
            </span>
          </span>
          <span
            className={cn(
              "y2k-orb relative flex h-9 w-9 shrink-0 items-center justify-center transition-all duration-500 ease-[var(--ease-out-expo)]",
              open ? "rotate-45" : "opacity-70"
            )}
            style={open ? { background: holo, boxShadow: "0 8px 20px -8px rgba(255,122,209,0.7)" } : undefined}
            aria-hidden
          >
            <span className="absolute h-[1.5px] w-3.5 bg-white" />
            <span className="absolute h-3.5 w-[1.5px] bg-white" />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out-expo)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-7 text-pretty text-[15px] leading-relaxed text-[#5b588a] sm:pl-[44px]">{a}</p>
        </div>
      </div>
    </Reveal>
  );
}

/** FAQ — Neo Y2K: chrome accordion console with holographic accents. */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="y2k-section cv-auto relative overflow-hidden py-24 sm:py-32">
      {/* y2k backdrop */}
      <div aria-hidden className="y2k-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_80%_20%,black,transparent_60%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="y2k-star absolute left-[8%] top-16 h-5 w-5 animate-pulse-soft" />
        <span className="y2k-star absolute right-[10%] bottom-20 h-4 w-4 animate-pulse-soft" style={{ animationDelay: "1.6s" }} />
      </div>

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                index="12"
                eyebrow="Questions"
                title={<span className="text-[#2a2850]">Asked often.</span>}
                body={
                  <span className="text-[#5b588a]">
                    Still unsure? Drop by any Thursday lab — no sign-up needed — or message us on Discord.
                  </span>
                }
                className="!grid-cols-1 [&>*]:!col-span-1"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="y2k-pill">Thu · 5pm · Block B</span>
              </div>
              <Reveal delay={200} className="mt-8">
                <a
                  href="#cta"
                  className="y2k-card inline-flex items-center !rounded-full px-6 py-3.5 text-sm font-bold text-[#2a2850] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Talk to a Core member
                </a>
              </Reveal>
            </div>
          </div>

          <ul
            className="y2k-card self-start !rounded-[26px] p-2 sm:p-3"
            style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.95) inset, 0 30px 70px -30px rgba(120,110,255,0.5), 0 18px 44px -22px rgba(255,122,209,0.4)" }}
          >
            {faqs.map((f, i) => (
              <Item key={f.q} i={i} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
