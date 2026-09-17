import { useReducedMotion } from "@/hooks/useMedia";
import { cn } from "@/utils/cn";

const faces = [
  { label: "{ }", rotation: "rotateY(0deg)" },
  { label: "</>", rotation: "rotateY(90deg)" },
  { label: "λ", rotation: "rotateY(180deg)" },
  { label: "fn", rotation: "rotateY(-90deg)" },
  { label: "42", rotation: "rotateX(90deg)" },
  { label: "swift", rotation: "rotateX(-90deg)" },
];

const tones = {
  swift: { rgb: "240,81,56", ink: "#9c321f", core: "#ffb489" },
  ice: { rgb: "106,133,218", ink: "#435993", core: "#c9eaff" },
  amber: { rgb: "180,85,45", ink: "#794228", core: "#ffdb96" },
};

type Props = {
  className?: string;
  size?: number;
  tone?: keyof typeof tones;
  depth?: number;
  delay?: number;
};

export function GlassCube({ className, size = 120, tone = "swift", depth = 60, delay = 0 }: Props) {
  const reduce = useReducedMotion();
  const edge = Math.max(24, size);
  const { rgb, ink, core } = tones[tone];

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute hidden select-none preserve-3d sm:block", className)}
      style={{ width: edge, height: edge, transform: `translateZ(${depth}px)`, perspective: 900 }}
    >
      <div
        className="absolute -bottom-8 left-0 h-5 w-full rounded-[50%]"
        style={{ background: `radial-gradient(ellipse, rgba(${rgb},0.3), transparent 70%)`, transform: "rotateX(65deg) translateZ(-60px)" }}
      />
      <div
        className="relative h-full w-full preserve-3d motion-reduce:!animate-none"
        style={{ animation: reduce ? "none" : "cube-float 9s ease-in-out infinite", animationDelay: `${delay}s` }}
      >
        <div className="relative h-full w-full preserve-3d" style={{ transform: "rotateX(-22deg) rotateY(-32deg) rotateZ(8deg)" }}>
          <div
            className="cube h-full w-full motion-reduce:!animate-none"
            style={{ animation: reduce ? "none" : "spin-3d 28s linear infinite", animationDelay: `${delay}s` }}
          >
            <div className="absolute preserve-3d" style={{ inset: "32%", transform: "rotateX(12deg) rotateY(18deg)" }}>
              {faces.map((face) => (
                <div
                  key={face.label}
                  className="absolute inset-0 border border-white/70"
                  style={{
                    transform: `${face.rotation} translateZ(${edge * 0.18}px)`,
                    background: `linear-gradient(145deg, #fff8, ${core} 48%, rgba(${rgb},0.85))`,
                    boxShadow: `inset 0 0 ${edge * 0.12}px rgba(255,255,255,0.6)`,
                  }}
                />
              ))}
            </div>
            {faces.map((face, i) => (
              <div
                key={face.label}
                className="cube-face"
                style={{
                  transform: `${face.rotation} translateZ(${edge / 2}px)`,
                  background: `linear-gradient(${125 + i * 25}deg, rgba(255,255,255,0.48), rgba(255,255,255,0.06) 42%, rgba(${rgb},0.22))`,
                  borderColor: "rgba(255,255,255,0.72)",
                  boxShadow: `inset 0 0 0 1px rgba(${rgb},0.16), inset 0 2px 8px #ffffff70, inset 0 -12px 24px -12px rgba(${rgb},0.5)`,
                  color: ink,
                  fontSize: Math.max(9, edge * 0.13),
                }}
              >
                <span className="absolute inset-[9%] border border-white/45" />
                <span className="absolute left-[9%] top-[9%] h-[15%] w-[15%] border-l-2 border-t-2 border-white/90" />
                <span className="absolute bottom-[9%] right-[9%] h-[15%] w-[15%] border-b-2 border-r-2 border-white/90" />
                <span className="relative rounded-md border border-white/50 bg-white/60 px-2 py-1" style={{ backfaceVisibility: "hidden" }}>{face.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
