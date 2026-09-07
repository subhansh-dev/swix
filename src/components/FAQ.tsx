import { useId, useState } from "react";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Sticker, Deco } from "./ui/Deco";
import { cn } from "@/utils/cn";

const faqs = [
  {
    q: "Do I need a Mac to join?",
    a: "No. Builder and Core members get scheduled access to the PIT Mac Lab (Block B, 3rd floor) with Xcode pre-installed. Many members start on the lab machines and buy a used Mac later — we keep a list of trusted sellers too.",
  },
  {
    q: "I've never coded before. Is this for me?",
    a: "Yes. Cohorts start from Swift fundamentals — variables, optionals, functions — before touching SwiftUI. We pace the first four weeks for absolute beginners, and mentors run extra 'zero-to-Xcode' sessions on Saturdays.",
  },
  {
    q: "Which branches or years can join?",
    a: "Every student of Parul University, from any faculty and any year. Our current cohort includes CSE, IT, BCA, Design, Pharmacy and MBA students.",
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
    <Reveal as="li" delay={i * 60} className="border-t border-line last:border-b">
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
            <span className="hidden font-mono text-[11px] tracking-[0.2em] text-muted sm:inline">0{i + 1}</span>
            <span className={cn("text-lg font-semibold tracking-tight transition-colors sm:text-xl", open ? "text-swift" : "text-ink group-hover:text-swift")}>
              {q}
            </span>
          </span>
          <span
            className={cn(
              "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[var(--ease-out-expo)]",
              open ? "rotate-45 border-swift bg-swift text-white" : "border-line text-ink group-hover:border-ink"
            )}
            aria-hidden
          >
            <span className="absolute h-[1.5px] w-3.5 bg-current" />
            <span className="absolute h-3.5 w-[1.5px] bg-current" />
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
          <p className="max-w-2xl pb-7 text-pretty text-[15px] leading-relaxed text-muted sm:pl-[44px]">{a}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="cv-auto relative overflow-hidden bg-lav py-24 sm:py-32">
      <Deco variant="lav" />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                index="12"
                eyebrow="Questions"
                title={<>Asked often.</>}
                body="Still unsure? Drop by any Thursday lab — no sign-up needed — or message us on Discord."
                className="!grid-cols-1 [&>*]:!col-span-1"
              />
              <div className="mt-4">
                <Sticker rotate={-4} color="bg-swift text-white">Thu · 5pm · Block B</Sticker>
              </div>
              <Reveal delay={200} className="mt-8">
                <a href="#cta" className="btn btn-ghost">Talk to a Core member</a>
              </Reveal>
            </div>
          </div>
          <ul className="lg:col-span-8 self-start rounded-[28px] border-[3px] border-ink bg-white/85 p-2 shadow-[0_10px_0_rgba(11,11,12,0.9)] backdrop-blur-xl backdrop-saturate-150 sm:p-3">
            {faqs.map((f, i) => (
              <Item key={f.q} i={i} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
