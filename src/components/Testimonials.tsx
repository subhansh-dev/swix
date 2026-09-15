import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { cn } from "@/utils/cn";

const stories = [
  {
    quote:
      "I joined not owning a Mac. Six months later my attendance app was on the App Store and I had an iOS internship offer from a Pune fintech.",
    name: "Aarushi Patel",
    role: "B.Tech CSE '25 · iOS Intern, Slice",
    initials: "AP",
    featured: true,
    win: "guestbook.txt — entry 001",
  },
  {
    quote: "The code reviews were brutal in the best way. I finally understood why architecture matters.",
    name: "Dev Chaudhary",
    role: "B.Tech IT '26 · Club member",
    initials: "DC",
    win: "review.log",
  },
  {
    quote: "Won the Swift Student Challenge with a playground we prototyped in a Thursday lab. Still can't believe it.",
    name: "Meera Iyer",
    role: "BCA '26 · SSC Winner 2025",
    initials: "MI",
    win: "ssc_2025.txt",
  },
  {
    quote: "Placement interviewers stopped asking about my CGPA once they opened my app.",
    name: "Rohan Desai",
    role: "B.Tech CSE '24 · iOS Engineer, Razorpay",
    initials: "RD",
    win: "placement.txt",
  },
  {
    quote: "It's the only club where the output is a product, not a certificate.",
    name: "Sneha Rathod",
    role: "M.Sc IT '25 · Club lead",
    initials: "SR",
    win: "manifesto.md",
  },
];

/** Testimonials — Web Core: member quotes as notepad windows on a starfield desktop. */
export function Testimonials() {
  return (
    <section id="stories" className="webcore-section cv-auto relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="webcore-stars pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 45% at 85% 10%, rgba(0,255,170,0.05), transparent 60%)" }}
      />

      <div className="container-x relative">
        <SectionHeader
          index="10"
          eyebrow="Member stories"
          dark
          title={
            <span className="text-[#e6e6e2]">
              Said by people <span className="text-[#00ffaa]">who shipped.</span>
            </span>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 80} className={cn(s.featured && "md:col-span-2 lg:row-span-2")}>
              <figure className="webcore-tile flex h-full flex-col !rounded-sm">
                {/* titlebar */}
                <div className="win98-title flex items-center justify-between px-2 py-1">
                  <span className="truncate font-mono">{s.win}</span>
                  <span className="flex gap-1" aria-hidden>
                    <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">_</span>
                    <span className="win98-btn !px-1.5 !py-0 !text-[9px] leading-none">×</span>
                  </span>
                </div>

                {/* document body */}
                <div className={cn("flex flex-1 flex-col justify-between bg-[#0c0c0e] p-6", s.featured && "sm:p-8")}>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00ffaa]/70" aria-hidden>
                      &gt; member_story_{String(i + 1).padStart(2, "0")}
                    </p>
                    <blockquote
                      className={cn(
                        "mt-5 text-pretty font-medium tracking-tight text-[#e6e6e2]",
                        s.featured ? "text-2xl leading-snug sm:text-[2rem]" : "text-[16.5px] leading-relaxed"
                      )}
                    >
                      “{s.quote}”
                      <span className="ml-1 inline-block h-4 w-[8px] translate-y-0.5 animate-blink bg-[#00ffaa]" aria-hidden />
                    </blockquote>
                  </div>
                  <figcaption className="mt-8 flex items-center gap-3 border-t border-[#2a2a2e] pt-5">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-sm border border-[#00ffaa]/50 bg-[#00ffaa]/10 font-mono text-xs font-bold text-[#00ffaa]"
                      aria-hidden
                    >
                      {s.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-[#e6e6e2]">{s.name}</span>
                      <span className={cn("block font-mono text-[11px]", s.featured ? "text-white/50" : "text-white/40")}>{s.role}</span>
                    </span>
                  </figcaption>
                </div>

                {/* status bar */}
                <div className="win98-out flex items-center justify-between bg-[#c6c6c6] px-3 py-1 font-mono text-[9px] text-[#0a0a0a]">
                  <span>100%</span>
                  <span>ASCII</span>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
