import { useReducedMotion } from "@/hooks/useMedia";
import { cn } from "@/utils/cn";

const HALF = 60; // half edge length in px -> cube is 120px

const faces: Array<{ label: string; t: string }> = [
  { label: "{ }", t: `translateZ(${HALF}px)` },
  { label: "</>", t: `rotateY(90deg) translateZ(${HALF}px)` },
  { label: "λ", t: `rotateY(180deg) translateZ(${HALF}px)` },
  { label: "fn", t: `rotateY(-90deg) translateZ(${HALF}px)` },
  { label: "42", t: `rotateX(90deg) translateZ(${HALF}px)` },
  { label: "swift", t: `rotateX(-90deg) translateZ(${HALF}px)` },
];

/**
 * Floating glass 3D cube — six frosted faces, pure CSS transforms, tumbles on
 * the existing spin-3d keyframes inside the hero's perspective scene. Outer
 * div owns the float animation, inner div owns the tumble so keyframes never
 * fight over the same transform.
 */
export function GlassCube({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden
      className={cn("scene-3d pointer-events-none absolute hidden sm:block", className)}
      style={{
        animation: reduce ? undefined : "cube-float 9s ease-in-out infinite",
      }}
    >
      <div
        className="cube gpu h-[120px] w-[120px]"
        style={{
          animation: reduce ? undefined : "spin-3d 21s linear infinite",
        }}
      >
        {faces.map((f) => (
          <div key={f.label} className="cube-face text-[15px]" style={{ transform: f.t }}>
            {f.label}
          </div>
        ))}
      </div>
    </div>
  );
}
