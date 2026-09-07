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

export function SocialProof() {
  // the strip leans into fast scrolling, then settles back
  const skewRef = useVelocitySkew<HTMLDivElement>(4);
  return (
    <section aria-label="Trusted by" className="cv-auto border-y-[3px] border-ink/10 bg-peach-2 py-10">
      <div className="container-x">
        <Reveal className="mb-7 flex items-center justify-between gap-4">
          <p className="eyebrow">Trusted across campus & the community</p>
          <p className="hidden font-mono text-[11px] text-muted sm:block">Est. 2020 · Vadodara, Gujarat</p>
        </Reveal>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div ref={skewRef} className="gpu will-change-transform">
          <ul className="marquee-track gpu animate-marquee flex w-max items-center gap-14 whitespace-nowrap px-7" aria-hidden={false}>
            {[...partners, ...partners].map((p, i) => (
              <li
                key={`${p}-${i}`}
                className="flex items-center gap-3 text-[15px] font-semibold tracking-tight text-ink/45 transition-colors duration-300 hover:text-ink"
                aria-hidden={i >= partners.length}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-swift/60" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
