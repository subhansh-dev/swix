import { useEffect, useRef } from "react";

/**
 * Scroll-velocity reactive skew. Reads scroll delta each frame, lerps toward a
 * clamped skewX and writes it straight to the element's transform. The marquee
 * tracks "lean into" fast scrolling, then settles back — a subtle premium touch
 * that makes the page feel physically connected to the scroll gesture.
 * Desktop-only, disabled for reduced motion, transform-only writes.
 */
export function useVelocitySkew<T extends HTMLElement = HTMLDivElement>(max = 4) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    let velocity = 0;
    let lastY = window.scrollY;
    let raf = 0;
    let running = false;

    const loop = () => {
      velocity *= 0.88; // exponential settle
      const clamped = Math.max(-max, Math.min(max, velocity));
      el.style.transform = `skewX(${(-clamped).toFixed(3)}deg)`;
      if (Math.abs(velocity) > 0.05 || Math.abs(clamped) > 0.05) {
        raf = requestAnimationFrame(loop);
      } else {
        el.style.transform = "skewX(0deg)";
        running = false;
      }
    };

    const onScroll = () => {
      const y = window.scrollY;
      velocity += (y - lastY) * 0.08;
      lastY = y;
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [max]);

  return ref;
}
