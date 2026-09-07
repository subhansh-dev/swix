import { BrandOrbs } from "@/components/threeui/brand-orbs/BrandOrbs";
import { cn } from "@/utils/cn";

type OrbProps = {
  variant?: "swift" | "ios";
  /** canvas resolution the engine renders at — medium (56px) is crisp everywhere */
  size?: "small" | "medium";
  /** outer box in px; the canvas centers inside, so padding reads as a dark ring */
  box?: number;
  /** orbit speed multiplier (0.1 – 3) */
  speed?: number;
  label?: string;
  className?: string;
};

/**
 * Animated brand orb (canvas engine in a sandboxed iframe) mounted inside the
 * site's neo-brutalist dark coin: hard border, hard offset shadow. Offscreen
 * orbs pause themselves via IntersectionObserver, so they're cheap to scatter.
 */
export function Orb({ variant = "swift", size = "medium", box = 64, speed = 1, label, className }: OrbProps) {
  return (
    <span
      role="img"
      aria-label={label ?? (variant === "swift" ? "Animated Swift brand orb" : "Animated iOS brand orb")}
      className={cn(
        "relative inline-grid shrink-0 place-items-center overflow-hidden rounded-full border-2 border-ink bg-ink",
        "shadow-[0_4px_0_rgba(11,11,12,0.9)]",
        className,
      )}
      style={{ width: box, height: box }}
    >
      <BrandOrbs
        variant={variant}
        size={size}
        mode="dark"
        speed={speed}
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
      />
      {/* inner bevel highlight so the coin reads on dark panels too */}
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full border border-white/15" />
    </span>
  );
}
