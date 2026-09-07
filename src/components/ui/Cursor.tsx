import { useEffect, useRef, useState } from "react";
import { useCanHover, useReducedMotion } from "@/hooks/useMedia";

/**
 * Liquid-glass cursor: one composited element moved with a lerp inside rAF.
 * Mounted only for fine-pointer devices that allow motion.
 */
export function Cursor() {
  const canHover = useCanHover();
  const reduce = useReducedMotion();
  const enabled = canHover && !reduce;

  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [hot, setHot] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const loop = () => {
      const d = dot.current;
      const r = ring.current;
      if (d && r) {
        ringPos.current.x += (target.current.x - ringPos.current.x) * 0.14;
        ringPos.current.y += (target.current.y - ringPos.current.y) * 0.14;
        d.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`;
        r.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    let lastEl: EventTarget | null = null;
    let lastHot = false;
    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      // Only run the DOM query when the hovered element actually changes.
      if (e.target !== lastEl) {
        lastEl = e.target;
        const hot = !!(e.target as HTMLElement | null)?.closest("a, button, [data-cursor='hot']");
        if (hot !== lastHot) {
          lastHot = hot;
          setHot(hot);
        }
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[70] hidden md:block">
      <div
        ref={ring}
        className="gpu absolute left-0 top-0 h-9 w-9 rounded-full border border-swift/50 backdrop-blur-[2px] transition-[width,height,background-color,border-color,opacity] duration-300"
        style={{
          width: hot ? 56 : 36,
          height: hot ? 56 : 36,
          background: hot ? "rgba(240,81,56,0.16)" : "rgba(240,81,56,0.04)",
          borderColor: hot ? "rgba(240,81,56,0.9)" : "rgba(240,81,56,0.35)",
        }}
      />
      <div ref={dot} className="gpu absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-swift" />
    </div>
  );
}
