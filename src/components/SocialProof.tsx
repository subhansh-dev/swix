import { Reveal } from "./ui/Reveal";
import { useVelocitySkew } from "@/hooks/useVelocitySkew";

const partners = [
  "Apple Developer Academy Alumni",
  "Parul Institute of Technology",
  "PU Innovation & Incubation Centre",
  "GDG Vadodara",
  "Swift India Community",
  "Hack The Campus",
  "iOS Dev Baroda",
  "PU Placement Cell",
];

const bubbles = [
  { left: "6%", size: 14, d: "0s", dur: "12s" },
  { left: "17%", size: 8, d: "3s", dur: "15s" },
  { left: "31%", size: 18, d: "6s", dur: "13s" },
  { left: "47%", size: 10, d: "1.5s", dur: "16s" },
  { left: "63%", size: 7, d: "5s", dur: "14s" },
  { left: "78%", size: 16, d: "8s", dur: "17s" },
  { left: "91%", size: 9, d: "2.5s", dur: "12s" },
];

/** Frutiger Aero trust strip — glossy aqua pills floating on a sky gradient. */
export function SocialProof() {
  // the strip leans into fast scrolling, then settles back
  const skewRef = useVelocitySkew<HTMLDivElement>(4);
  return (
    <section
      aria-label="Trusted by"
      className="cv-auto aero aero-sky relative overflow-hidden border-y border-white/60 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
    >
      {/* rising bubbles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {bubbles.map((b) => (
          <span
            key={b.left}
            className="aero-bubble gpu animate-aero-rise"
            style={{
              left: b.left,
              bottom: "-30px",
              width: b.size,
              height: b.size,
              animationDelay: b.d,
              animationDuration: b.dur,
            }}
          />
        ))}
        {/* soft cloud glow */}
        <span className="absolute -top-16 left-1/4 h-40 w-96 rounded-full bg-white/50 blur-3xl" />
      </div>

      <div className="container-x relative">
        <Reveal className="mb-7 flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2c6c8f]">
            Trusted across campus &amp; the community
          </p>
          <p className="hidden font-mono text-[11px] text-[#2c6c8f]/70 sm:block">Est. 2020 · Vadodara, Gujarat</p>
        </Reveal>
      </div>
      <div className="marquee-mask relative overflow-hidden">
        <div ref={skewRef} className="gpu will-change-transform">
          <ul
            className="marquee-track gpu animate-marquee flex w-max items-center gap-3 whitespace-nowrap px-7"
            aria-hidden={false}
          >
            {[...partners, ...partners].map((p, i) => (
              <li
                key={`${p}-${i}`}
                className="aero-gloss aero-panel flex items-center gap-2.5 !rounded-full px-5 py-2.5 text-[14px] font-semibold tracking-tight text-[#1d5a7a] transition-shadow duration-300 hover:shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_16px_34px_-16px_rgba(28,100,131,0.6)]"
                aria-hidden={i >= partners.length}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: "radial-gradient(circle at 32% 28%, #fff, #8fd8ff 55%, #3a9ad9)",
                    boxShadow: "0 0 8px rgba(120,210,255,0.8)",
                  }}
                />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
