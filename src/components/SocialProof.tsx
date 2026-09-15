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

/** Trust strip — Retro Futurism: orbital partners on the atomic-age gradient. */
export function SocialProof() {
  // the strip leans into fast scrolling, then settles back
  const skewRef = useVelocitySkew<HTMLDivElement>(4);
  return (
    <section
      aria-label="Trusted by"
      className="atomi-section cv-auto relative overflow-hidden border-y border-[#b4552d]/25 py-10"
    >
      {/* orbit rings drifting behind */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="atomi-ring gpu animate-spin-slow left-[4%] -top-16 h-40 w-40" style={{ animationDuration: "60s" }} />
        <span className="atomi-ring gpu animate-spin-slow right-[6%] -bottom-20 h-48 w-48" style={{ animationDuration: "74s", animationDirection: "reverse" }} />
        <span className="atomi-star left-[16%] top-3 text-base animate-pulse-soft">✦</span>
        <span className="atomi-star right-[24%] bottom-3 text-sm animate-pulse-soft" style={{ animationDelay: "1.4s" }}>✧</span>
      </div>

      <div className="container-x relative">
        <Reveal className="mb-7 flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8a6a50]">
            Trusted across campus &amp; the community
          </p>
          <p className="hidden font-mono text-[11px] text-[#8a6a50]/80 sm:block">Est. 2020 · Vadodara, Gujarat</p>
        </Reveal>
      </div>
      <div className="marquee-mask relative overflow-hidden">
        <div ref={skewRef} className="gpu will-change-transform">
          <ul
            className="marquee-track gpu animate-marquee flex w-max items-center gap-4 whitespace-nowrap px-7"
            aria-hidden={false}
          >
            {[...partners, ...partners].map((p, i) => (
              <li
                key={`${p}-${i}`}
                className="atomi-chip !rounded-full px-5 py-2.5 text-[12px] transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 10px 22px -14px rgba(122,60,20,0.6)" }}
                aria-hidden={i >= partners.length}
              >
                <span aria-hidden className="text-[#c2521f]">✦</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
