import { Logo } from "./ui/Logo";
import { Reveal } from "./ui/Reveal";
import { Deco } from "./ui/Deco";
import { Orb } from "./ui/Orb";

const cols = [
  {
    h: "Club",
    items: ["Program", "Showcase", "Why Swift", "Membership", "FAQ"],
    hrefs: ["#program", "#showcase", "#why", "#join", "#faq"],
  },
  {
    h: "Resources",
    items: ["Swift starter kit", "Lab schedule", "Code of conduct", "Brand assets", "Alumni network"],
    hrefs: ["#cta", "#cta", "#", "#", "#stories"],
  },
  {
    h: "Connect",
    items: ["Discord", "Instagram", "GitHub", "LinkedIn", "swift@paruluniversity.ac.in"],
    hrefs: ["#", "#", "#", "#", "mailto:swift@paruluniversity.ac.in"],
  },
];

export function Footer() {
  return (
    <footer className="cv-auto relative overflow-hidden border-t-[3px] border-ink/15 bg-paper-2">
      <Deco variant="warm" />
      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Logo />
            <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-muted">
              A student-run iOS studio at Parul University, Vadodara. We teach Swift by shipping — one app per semester, every semester since 2020.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["SwiftUI", "UIKit", "Swift Data", "CloudKit", "Vision Pro", "Server-side Swift"].map((t) => (
                <span key={t} className="rounded-full border border-line bg-white px-3 py-1 font-mono text-[11px] text-muted">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2.5 rounded-full bg-ink py-1.5 pl-1.5 pr-4 shadow-[0_4px_0_rgba(11,11,12,0.9)]">
                <Orb variant="swift" box={26} size="small" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">Built with Swift</span>
              </span>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-ink py-1.5 pl-1.5 pr-4 shadow-[0_4px_0_rgba(11,11,12,0.9)]">
                <Orb variant="ios" box={26} size="small" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">Designed for iOS</span>
              </span>
            </div>
          </Reveal>

          {cols.map((c, ci) => (
            <Reveal key={c.h} delay={80 + ci * 60} className="lg:col-span-2">
              <h3 className="eyebrow">{c.h}</h3>
              <ul className="mt-5 space-y-3">
                {c.items.map((it, i) => (
                  <li key={it}>
                    <a href={c.hrefs[i]} className="link-u text-sm font-medium text-ink/75 hover:text-ink">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Swift Coding Club, Parul University. Student-run; not affiliated with Apple Inc.</p>
          <p className="font-mono uppercase tracking-[0.16em]">
            Swift, SwiftUI & Xcode are trademarks of Apple Inc.
          </p>
        </div>
      </div>

      {/* Oversized wordmark — swiss typographic signature */}
      <div aria-hidden className="relative overflow-hidden border-t-[3px] border-ink/15 bg-peach-2">
        <p className="container-x display select-none whitespace-nowrap py-4 text-[16vw] leading-none text-gradient sm:text-[13vw]">
          Swift @ Parul
        </p>
      </div>
    </footer>
  );
}
