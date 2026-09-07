import { useEffect, useRef } from "react";

/**
 * Scroll-linked parallax written straight to a CSS variable in one rAF per
 * frame. No React re-renders while scrolling.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 40) {
  const ref = useRef<T | null>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Skip parallax on small/low-memory devices: it is decoration, not content.
    if (window.innerWidth < 768 || (navigator as any).deviceMemory <= 2) return;

    const update = () => {
      ticking.current = false;
      const r = el.getBoundingClientRect();
      const progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.setProperty("--py", `${(-progress * strength).toFixed(2)}px`);
    };
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return ref;
}
