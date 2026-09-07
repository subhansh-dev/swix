import { Reveal } from "./ui/Reveal";
import { Tilt } from "./ui/Tilt";

const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
    ),
    label: "Apple Authorized",
    sub: "Training Center",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 8l9-4 9 4-9 4-9-4z" />
        <path d="M3 8v6c0 2 4 4 9 4s9-2 9-4V8" />
      </svg>
    ),
    label: "300+",
    sub: "Students trained",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    ),
    label: "12",
    sub: "App Store launches",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 21s-7-4.35-9.5-8.5C.7 9 2 5.5 5.5 4.7 8 4.1 10 5.4 12 8c2-2.6 4-3.9 6.5-3.3C22 5.5 23.3 9 21.5 12.5 19 16.65 12 21 12 21z" />
      </svg>
    ),
    label: "Free",
    sub: "For every student",
  },
];

/**
 * A pure liquid-glass strip: heavy frosted panels floating over a vivid
 * multi-color gradient mesh. This is the "premium glassmorphism" showcase —
 * layered blur, refraction rim, specular sheen and a moving light sweep, all
 * GPU-composited (blur + transform only) so it stays smooth on mobile.
 */
export function GlassHighlights() {
  return (
    <section aria-label="Club highlights" className="cv-auto relative -mt-8 pb-6 sm:-mt-14">
      <div className="container-x">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[32px] p-4 sm:p-6">
            {/* vivid gradient mesh backdrop, sitting behind the glass */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0" style={{ background: "conic-gradient(from 200deg at 30% 20%, #FFD3BC, #D9CFFF, #BDE4FF, #B9ECCD, #FFEDA3, #FFD3BC)" }} />
              <div className="absolute inset-0 bg-white/30" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {items.map((it, i) => (
                <Reveal key={it.label} delay={i * 90}>
                  <Tilt max={8} lift={14} className="h-full">
                    <div className="liquid grain sweep group relative flex h-full flex-col items-start gap-3 overflow-hidden rounded-3xl p-5 sm:p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 text-swift shadow-inner">
                        {it.icon}
                      </div>
                      <div>
                        <p className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">{it.label}</p>
                        <p className="mt-0.5 text-[12px] font-medium text-ink/60">{it.sub}</p>
                      </div>
                    </div>
                  </Tilt>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
