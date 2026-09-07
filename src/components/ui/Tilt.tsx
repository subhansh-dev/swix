import { useCallback, useRef, type ReactNode } from "react";
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
    if (!el) return;
    const { x, y } = pos.current;
    el.style.transform = `perspective(1200px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(${lift}px) scale3d(${scale},${scale},1)`;
    if (sheen) {
      el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
      el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
    }
  }, [max, lift, scale, sheen]);

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!active || e.pointerType !== "mouse") return;
      const r = e.currentTarget.getBoundingClientRect();
      pos.current = { x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 };
      if (frame.current === null) frame.current = requestAnimationFrame(paint);
    },
    [active, paint]
  );

  const onLeave = useCallback(() => {
    if (!active) return;
    const el = ref.current;
    if (el) el.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale3d(1,1,1)";
  }, [active]);

  return (
    <div className={cn("scene-3d", className)}>
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={cn(
          "gpu tilt relative h-full w-full preserve-3d",
          sheen && "sheen",
          depth && "[&>*]:preserve-3d"
        )}
      >
        {children}
      </div>
    </div>
  );
}
