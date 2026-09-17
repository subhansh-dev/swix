import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { useCanHover, useReducedMotion } from "@/hooks/useMedia";
import { cn } from "@/utils/cn";

type Props = {
  children: ReactNode;
  className?: string;
  /** max rotation in degrees */
  max?: number;
  /** lift along Z (px) */
  lift?: number;
  /** scale on hover */
  scale?: number;
  /** follow-pointer specular highlight */
  sheen?: boolean;
  depth?: boolean;
};

/**
 * 3D pointer tilt. All writes happen inside a single rAF callback and only when
 * a mouse is present — touch devices and reduced-motion users get a static,
 * already-composited element, so there is zero scroll/animation cost on mobile.
 */
export function Tilt({
  children,
  className,
  max = 10,
  lift = 40,
  scale = 1.02,
  sheen = true,
  depth = false,
}: Props) {
  const canHover = useCanHover();
  const reduce = useReducedMotion();
  const active = canHover && !reduce;

  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const paint = useCallback(() => {
    frame.current = null;
    const el = ref.current;
    if (!el || !active) return;
    const { x, y } = pos.current;
    el.style.transform = `perspective(1200px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(${lift}px) scale3d(${scale},${scale},1)`;
    if (sheen) {
      el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
      el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
    }
  }, [active, max, lift, scale, sheen]);

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!active || e.pointerType !== "mouse" || e.currentTarget.contains(document.activeElement)) return;
      const r = e.currentTarget.getBoundingClientRect();
      if (!r.width || !r.height) return;
      pos.current = {
        x: Math.max(-0.5, Math.min(0.5, (e.clientX - r.left) / r.width - 0.5)),
        y: Math.max(-0.5, Math.min(0.5, (e.clientY - r.top) / r.height - 0.5)),
      };
      if (frame.current === null) frame.current = requestAnimationFrame(paint);
    },
    [active, paint]
  );

  const reset = useCallback(() => {
    const el = ref.current;
    if (el) {
      el.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale3d(1,1,1)";
      el.style.removeProperty("--mx");
      el.style.removeProperty("--my");
    }
  }, []);

  useEffect(() => {
    if (!active) {
      reset();
      return;
    }
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      frame.current = null;
      reset();
    };
  }, [active, reset]);

  const onLeave = useCallback(() => {
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
    reset();
  }, [reset]);

  return (
    <div
      className={cn("scene-3d", className)}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onPointerCancel={onLeave}
      onFocusCapture={onLeave}
    >
      <div
        ref={ref}
        className={cn(
          "gpu tilt relative h-full w-full preserve-3d",
          active && sheen && "sheen",
          depth && "[&>*]:preserve-3d"
        )}
      >
        {children}
      </div>
    </div>
  );
}
