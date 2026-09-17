import { useEffect, useRef, useState } from "react";
import { useCanHover, useReducedMotion } from "@/hooks/useMedia";

export function Cursor() {
  const canHover = useCanHover();
  const reduce = useReducedMotion();
  const enabled = canHover && !reduce;

  const blob = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const blobPos = useRef({ x: -100, y: -100 });
  const [hot, setHot] = useState(false);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;

    const loop = () => {
      frameRef.current++;

      const b = blob.current;
      if (!b) { raf = requestAnimationFrame(loop); return; }

      const dx = target.current.x - blobPos.current.x;
      const dy = target.current.y - blobPos.current.y;

      blobPos.current.x += dx * 0.2;
      blobPos.current.y += dy * 0.2;

      const t = frameRef.current * 0.02;
      const r1 = Math.sin(t * 1.0) * 8;
      const r2 = Math.cos(t * 1.4) * 6;
      const r3 = Math.sin(t * 0.6 + 1) * 10;
      const r4 = Math.cos(t * 1.8 + 2) * 6;

      b.style.transform = `translate3d(${blobPos.current.x}px, ${blobPos.current.y}px, 0) translate(-50%, -50%)`;
      b.style.borderRadius = `${50 + r1}% ${50 - r2}% ${50 + r3}% ${50 - r4}% / ${50 - r1}% ${50 + r2}% ${50 - r3}% ${50 + r4}%`;

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    let lastEl: EventTarget | null = null;
    let lastHot = false;
    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (e.target !== lastEl) {
        lastEl = e.target;
        const h = !!(e.target as HTMLElement | null)?.closest(
          "a, button, [data-cursor='hot'], input, textarea, select"
        );
        if (h !== lastHot) { lastHot = h; setHot(h); }
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
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]" style={{ contain: "none" }}>
      {/* Center morphing blob */}
      <div
        ref={blob}
        className="gpu absolute left-0 top-0"
        style={{
          width: hot ? 28 : 20,
          height: hot ? 28 : 20,
          background: `conic-gradient(from ${frameRef.current * 0.5}deg at 50% 50%, #f05138, #ff7a5c, #ffb89a, #ffd3bc, #ff9a7c, #f05138)`,
          boxShadow: hot
            ? "0 0 32px rgba(240,81,56,0.8), 0 0 64px rgba(240,81,56,0.4), 0 0 96px rgba(255,184,154,0.2), inset 0 0 12px rgba(255,255,255,0.9)"
            : "0 0 20px rgba(240,81,56,0.7), 0 0 40px rgba(240,81,56,0.3), 0 0 60px rgba(255,184,154,0.15), inset 0 0 10px rgba(255,255,255,0.6)",
          border: "2px solid #f05138",
          filter: "saturate(1.5)",
        }}
      />
    </div>
  );
}