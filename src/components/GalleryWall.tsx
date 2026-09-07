import { GalleryHeading } from "./threeui/gallery-heading/GalleryHeading";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Orb } from "./ui/Orb";
import { Squiggle } from "./ui/Deco";

const tags = ["Swift Orange", "Ink № 12", "Halftone", "Est. 2020"];

/**
 * Exhibit 08 — the club's print wall, redrawn as a live halftone loop.
 * The canvas ships as a self-contained document in a sandboxed iframe; our
 * "swift-halftone" variant re-inks the authored gallery wall with the club's
 * palette (Swift orange ink on warm paper stock) and sets the club motto as
 * the didone headline. Hovering the wall speeds the orbit up.
 */
export function GalleryWall() {
  return (
    <section id="wall" className="cv-auto py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader
          index="08"
          eyebrow="Exhibit · the gallery wall"
          title={
            <>
              One wall, twelve plates, <span className="text-gradient">one orange ink.</span>
            </>
          }
          body="Our print wall, redrawn as a halftone loop: twelve flat plates in the club palette orbiting a didone headline set in the motto. Every plate is one ink on one stock — and the ring picks up speed when you hover it."
        />

        <Reveal variant="scale" className="mt-14 lg:mt-20">
          <div className="relative overflow-hidden rounded-[36px] border-[3px] border-ink bg-ink shadow-[0_16px_0_rgba(11,11,12,0.9)]">
            {/* top caption bar */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-b border-white/10 px-5 py-4 sm:px-8">
              <div className="flex items-center gap-3">
                <Orb variant="swift" box={56} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/60">Exhibit A — Halftone Loop</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/30">Swift Coding Club · Vadodara</p>
                </div>
              </div>
              <div className="ml-auto flex flex-wrap items-center gap-2">
                {tags.map((t, i) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60"
                    style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
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

            {/* bottom caption bar */}
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/10 px-5 py-4 sm:px-8">
              <div className="flex items-center gap-4">
                <Squiggle color="#F05138" className="w-24 opacity-90" />
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
