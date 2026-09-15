import { GalleryHeading } from "./threeui/gallery-heading/GalleryHeading";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Orb } from "./ui/Orb";

const holo = "linear-gradient(135deg,#7ad9ff,#9a8cff 30%,#ff7ad1 55%,#ffb35c 78%,#67e0a8)";

const tags = ["Chrome Edition", "Ink № 12", "Halftone", "Est. 2020"];

/**
 * Exhibit 08 — the club's print wall, redrawn as a live halftone loop.
 * The canvas ships as a self-contained document in a sandboxed iframe; the
 * "swift-halftone" variant keeps the authored artwork untouched, while the
 * surrounding console is restyled as a Neo Y2K chrome media player.
 */
export function GalleryWall() {
  return (
    <section id="wall" className="y2k-section cv-auto relative overflow-hidden py-24 sm:py-32">
      {/* faint y2k grid + holo blobs */}
      <div aria-hidden className="y2k-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="gpu absolute -right-24 top-10 h-64 w-64 rounded-full opacity-30 blur-3xl" style={{ background: holo, animation: "y2k-spin 52s linear infinite" }} />
      </div>

      <div className="container-x relative">
        <SectionHeader
          index="08"
          eyebrow="Exhibit · the gallery wall"
          title={
            <span className="text-[#2a2850]">
              One wall, twelve plates, <span className="y2k-holo-text">one orange ink.</span>
            </span>
          }
          body={
            <span className="text-[#5b588a]">
              Our print wall, redrawn as a halftone loop: twelve flat plates in the club palette orbiting a didone
              headline set in the motto. Every plate is one ink on one stock — and the ring picks up speed when you
              hover it.
            </span>
          }
        />

        <Reveal variant="scale" className="mt-14 lg:mt-20">
          <div
            className="relative overflow-hidden rounded-[32px] bg-[#0e0c1a]"
            style={{
              border: "3px solid transparent",
              background: "linear-gradient(#0e0c1a,#0e0c1a) padding-box, linear-gradient(135deg,#cfe4ff,#9a8cff 30%,#ff9ade 60%,#ffe29a) border-box",
              boxShadow: "0 30px 80px -30px rgba(120,110,255,0.6), 0 18px 44px -22px rgba(255,122,209,0.45)",
            }}
          >
            {/* top caption bar */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-b border-white/10 px-5 py-4 sm:px-8">
              <div className="flex items-center gap-3">
                <Orb variant="swift" box={56} />
                <div>
                  <p className="y2k-chrome-text font-mono text-[10px] uppercase tracking-[0.24em]">Exhibit A — Halftone Loop</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">Swift Coding Club · Vadodara</p>
                </div>
              </div>
              <div className="ml-auto flex flex-wrap items-center gap-2">
                {tags.map((t, i) => (
                  <span
                    key={t}
                    className="y2k-pill !bg-transparent !text-white/60"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                      transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* the wall itself — pointer-active, don't cover it */}
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/8]">
              <GalleryHeading
                variant="swift-halftone"
                mode="dark"
                className="absolute inset-0"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* bottom caption bar — chrome media player */}
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/10 px-5 py-4 sm:px-8">
              <div className="flex items-center gap-4">
                <span className="flex items-end gap-[2px]" aria-hidden>
                  {[10, 16, 8, 14, 6].map((h, i) => (
                    <span
                      key={i}
                      className="w-[3px] rounded-full"
                      style={{ height: h, background: holo, boxShadow: "0 0 6px rgba(154,140,255,0.8)", animation: `pulse-soft ${1 + i * 0.2}s ease-in-out infinite` }}
                    />
                  ))}
                </span>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                  one ink · one stock · twelve plates — axis 90°, drifting counter-clockwise
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Orb variant="ios" box={32} size="small" label="iOS brand orb" />
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">shot on the lab's iPhones</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
