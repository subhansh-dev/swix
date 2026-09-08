import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Deco } from "./ui/Deco";
import { cn } from "@/utils/cn";

const stories = [
  {
    quote:
      "I joined not owning a Mac. Six months later my attendance app was on the App Store and I had an iOS internship offer from a Pune fintech.",
    name: "Aarushi Patel",
    role: "B.Tech CSE '25 · iOS Intern, Slice",
    initials: "AP",
    tone: "bg-swift text-white",
    featured: true,
  },
  {
    quote: "The code reviews were brutal in the best way. I finally understood why architecture matters.",
    name: "Dev Chaudhary",
    role: "B.Tech IT '26 · Club member",
    initials: "DC",
    tone: "bg-ink text-white",
  },
  {
    quote: "Won the Swift Student Challenge with a playground we prototyped in a Thursday lab. Still can't believe it.",
    name: "Meera Iyer",
    role: "BCA '26 · SSC Winner 2025",
    initials: "MI",
    tone: "bg-paper-2 text-ink",
  },
  {
    quote: "Placement interviewers stopped asking about my CGPA once they opened my app.",
    name: "Rohan Desai",
    role: "B.Tech CSE '24 · iOS Engineer, Razorpay",
    initials: "RD",
    tone: "bg-paper-2 text-ink",
  },
  {
    quote: "It's the only club where the output is a product, not a certificate.",
    name: "Sneha Rathod",
    role: "M.Sc IT '25 · Club lead",
    initials: "SR",
    tone: "bg-ink text-white",
  },
];

export function Testimonials() {
  return (
    <section id="stories" className="cv-auto relative overflow-hidden bg-mint-grad py-24 sm:py-32">
      <Deco variant="mint" />
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-x relative">
        <SectionHeader
          index="10"
          eyebrow="Member stories"
          title={
            <>
              Said by people <span className="text-gradient">who shipped.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {stories.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 80}
              className={cn(s.featured && "md:col-span-2 lg:row-span-2")}
            >
              <figure
                className={cn(
                  "card-lift relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border-[3px] border-ink p-7 shadow-[0_10px_0_rgba(11,11,12,0.9)] sm:p-8",
                  s.featured ? "card-coral" : "bg-white"
                )}
              >
                <div aria-hidden className={cn("pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl", s.featured ? "bg-white/50" : "bg-peach/60")} />
                <div>
                  <svg className="h-7 w-7 text-swift" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M7.2 5C4.3 6.6 2.5 9.3 2.5 12.8c0 3.3 2 5.7 4.8 5.7 2.3 0 4-1.7 4-3.9 0-2.1-1.5-3.6-3.5-3.6-.4 0-.7 0-1 .1.4-1.9 1.8-3.4 3.8-4.4L7.2 5zm10.5 0c-2.9 1.6-4.7 4.3-4.7 7.8 0 3.3 2 5.7 4.8 5.7 2.3 0 4-1.7 4-3.9 0-2.1-1.5-3.6-3.5-3.6-.4 0-.7 0-1 .1.4-1.9 1.8-3.4 3.8-4.4L17.7 5z" />
                  </svg>
                  <blockquote
                    className={cn(
                      "mt-6 text-pretty font-medium tracking-tight",
                      s.featured ? "text-2xl leading-snug sm:text-[2rem]" : "text-[17px] leading-relaxed"
                    )}
                  >
                    “{s.quote}”
                  </blockquote>
                </div>
                <figcaption className="relative mt-8 flex items-center gap-3">
                  <span className={cn("flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-ink text-xs font-bold", s.tone)}>
                    {s.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{s.name}</span>
                    <span className={cn("block text-xs", s.featured ? "text-ink/60" : "text-muted")}>{s.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
