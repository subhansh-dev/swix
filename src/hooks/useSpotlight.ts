import { useCallback, useRef } from "react";

/**
 * Pointer-following spotlight. Writes CSS variables inside requestAnimationFrame
 * so we never do more than one style write per frame, and does nothing on
 * touch devices (no hover), keeping mobile main thread free.
 */
export function useSpotlight<T extends HTMLElement = HTMLDivElement>() {
  const frame = useRef<number | null>(null);
  const last = useRef<{ x: number; y: number } | null>(null);

  const onPointerMove = useCallback((e: React.PointerEvent<T>) => {
    if (e.pointerType !== "mouse") return;
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    last.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      if (!last.current) return;
      target.style.setProperty("--mx", `${last.current.x}px`);
      target.style.setProperty("--my", `${last.current.y}px`);
    });
  }, []);

  return { onPointerMove };
}
