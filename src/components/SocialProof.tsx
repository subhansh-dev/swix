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

const accents = ["#D9CFFF", "#B9ECCD", "#BDE4FF", "#FFEDA3", "#FFC6DD"];

export function SocialProof() {
  const skewRef = useVelocitySkew<HTMLDivElement>(4);
  return (
    <section
      aria-label="Trusted by"
      className="atomi-section cv-auto relative overflow-hidden border-y border-[#F05138]/15 py-10"
      style={{ background: "radial-gradient(ellipse at 12% 0%, #D9CFFF55, transparent 50%), radial-gradient(ellipse at 90% 100%, #B9ECCD66, transparent 45%), #FFF8F2" }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="atomi-ring gpu motion-safe:animate-spin-slow left-[4%] -top-16 h-40 w-40" style={{ animationDuration: "60s" }} />
        <span className="atomi-ring gpu motion-safe:animate-spin-slow right-[6%] -bottom-20 h-48 w-48" style={{ animationDuration: "74s", animationDirection: "reverse" }} />
        <span className="atomi-star left-[16%] top-3 text-base motion-safe:animate-pulse-soft">✦</span>
        <span className="atomi-star right-[24%] bottom-3 text-sm motion-safe:animate-pulse-soft" style={{ animationDelay: "1.4s" }}>✧</span>
        <span className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F05138]/40 to-transparent" />
        <span className="absolute inset-y-6 left-[45%] w-28 opacity-25" style={{ backgroundImage: "radial-gradient(#F05138 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
      </div>

      <div className="container-x relative">
        <Reveal className="mb-5 flex items-center justify-between gap-4">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#6b4a34]">
            <span aria-hidden className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inset-0 rounded-full bg-[#F05138]/30 motion-safe:animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-[#F05138]" />
            </span>
            Trusted across campus &amp; the community
          </p>
          <p className="hidden rounded-full border border-white bg-white/60 px-3 py-1.5 font-mono text-[11px] text-[#6b4a34] shadow-sm sm:block">Est. 2020 · Vadodara, Gujarat</p>
        </Reveal>
      </div>
      <div className="marquee-mask group/strip relative overflow-hidden py-2">
        <div ref={skewRef} className="gpu will-change-transform motion-reduce:!transform-none">
          <ul
            className="marquee-track gpu motion-safe:animate-marquee flex w-max items-center gap-4 whitespace-nowrap px-7 py-2 group-hover/strip:[animation-play-state:paused]"
            aria-hidden={false}
          >
            {[...partners, ...partners].map((p, i) => (
              <li
                key={`${p}-${i}`}
                className="atomi-chip group/chip relative !rounded-full !border-white/90 px-5 py-2.5 text-[12px] !text-[#0B0B0C] motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1"
                style={{ background: `linear-gradient(120deg, #ffffffed, ${accents[i % partners.length % accents.length]}66)`, boxShadow: "0 1px 0 #fff inset, 0 3px 0 -1px #F0513814, 0 12px 22px -16px #6b4a3455" }}
                aria-hidden={i >= partners.length}
              >
                <span aria-hidden className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white text-[#F05138] motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover/chip:rotate-90" style={{ background: accents[i % partners.length % accents.length] }}>✦</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
