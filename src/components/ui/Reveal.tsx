import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/utils/cn";

type Props = {
  children?: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "scale" | "line" | "left" | "right" | "blur" | "flip3d";
  as?: ElementType;
  style?: CSSProperties;
  id?: string;
};

export function Reveal({ children, className, delay = 0, variant = "up", as: Tag = "div", style, id }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const cls =
    variant === "scale"
      ? "reveal-scale"
      : variant === "line"
        ? "reveal-line"
        : variant === "left"
          ? "reveal-left"
          : variant === "right"
            ? "reveal-right"
            : variant === "blur"
              ? "reveal-blur"
              : variant === "flip3d"
                ? "reveal-flip3d"
                : "reveal";
  return (
    <Tag
      ref={ref}
      id={id}
      className={cn(cls, className)}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
