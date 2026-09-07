import { useScrollScrub } from "@/hooks/useScrollScrub";
import { cn } from "@/utils/cn";

type Props = {
  items: string[];
  className?: string;
  /** stroke-only giant text */
  dark?: boolean;
  /** travel in vw units across the full scrub range */
  travel?: number;
  separator?: string;
};

/**
 * Scroll-through motion: a giant outlined word strip whose horizontal position
 * is driven directly by scroll progress (--scrub), not by time. Scrolling up
 * and down scrubs the strip back and forth, so the typography feels physically
 * attached to the page.
 */
export function ScrollStrip({ items, className, dark = false, travel = 24, separator = "·" }: Props) {
  const ref = useScrollScrub<HTMLDivElement>();
  const row = [...items, ...items];
  return (
    <div ref={ref} aria-hidden className={cn("scrub relative overflow-hidden py-2 select-none", className)}>
      <div
        className="gpu flex w-max items-center whitespace-nowrap will-change-transform"
        style={{
          transform: `translateX(calc(((var(--scrub, 0) - 0.5) * ${-travel}vw)))`,
        }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={cn(
                "display px-4 text-[13vw] leading-none font-bold tracking-tight sm:text-[10vw]",
                dark ? "text-stroke-dark" : "text-stroke"
              )}
            >
              {item}
            </span>
            <span
              className={cn(
                "font-mono text-[5vw] leading-none sm:text-[3.4vw]",
                dark ? "text-white/25" : "text-ink/20"
              )}
            >
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
