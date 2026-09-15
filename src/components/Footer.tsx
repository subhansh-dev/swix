import { Logo } from "./ui/Logo";
import { Reveal } from "./ui/Reveal";
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

/** Footer — Web Core: a starfield desktop with a start-menu of links. */
export function Footer() {
  return (
    <footer className="webcore-section cv-auto relative overflow-hidden">
      {/* starfield */}
      <div aria-hidden className="footer-stars absolute inset-0 opacity-80" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(70% 55% at 50% 0%, rgba(0,255,170,0.05), transparent 60%)" }}
      />

      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Logo />
            <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-white/55">
              A student-run iOS studio at Parul University, Vadodara. We teach Swift by shipping — one app per semester, every semester since 2020.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["SwiftUI", "UIKit", "Swift Data", "CloudKit", "Vision Pro", "Server-side Swift"].map((t) => (
                <span key={t} className="webcore-tile rounded-none px-3 py-1 font-mono text-[11px] text-white/60">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="webcore-tile inline-flex items-center gap-2.5 rounded-none py-1.5 pl-1.5 pr-4">
                <Orb variant="swift" box={26} size="small" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">Built with Swift</span>
              </span>
              <span className="webcore-tile inline-flex items-center gap-2.5 rounded-none py-1.5 pl-1.5 pr-4">
                <Orb variant="ios" box={26} size="small" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">Designed for iOS</span>
              </span>
            </div>
          </Reveal>

          {cols.map((c, ci) => (
            <Reveal key={c.h} delay={80 + ci * 60} className="lg:col-span-2">
              {/* column header like a start-menu group */}
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#00ffaa]/80">
                <span aria-hidden className="text-white/30">▸</span>
                {c.h}
              </p>
              <ul className="mt-5 space-y-3">
                {c.items.map((it, i) => (
                  <li key={it}>
                    <a
                      href={c.hrefs[i]}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-[#00ffaa]"
                    >
                      <span aria-hidden className="font-mono text-[9px] text-[#00ffaa]/0 transition-colors group-hover:text-[#00ffaa]">
                        ▸
                      </span>
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* taskbar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[#2a2a2e] pt-6 font-mono text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Swift Coding Club, Parul University. Student-run; not affiliated with Apple Inc.</p>
          <p className="uppercase tracking-[0.16em]">Swift, SwiftUI &amp; Xcode are trademarks of Apple Inc.</p>
        </div>
      </div>

      {/* Oversized wordmark — chrome on the void */}
      <div aria-hidden className="relative overflow-hidden border-t border-[#2a2a2e] bg-[#08080a]">
        <p className="atomi-chrome-text container-x display select-none whitespace-nowrap py-4 text-center text-[16vw] leading-none opacity-90 sm:text-[13vw]">
          Swift @ Parul
        </p>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
          style={{ background: "linear-gradient(180deg, transparent, rgba(0,255,170,0.06))" }}
        />
      </div>
    </footer>
  );
}
