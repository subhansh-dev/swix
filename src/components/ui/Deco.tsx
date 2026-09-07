import { cn } from "@/utils/cn";

/** A playful set of floating shapes we drop behind any section to
 *  make it feel hand-crafted. Each shape is a simple CSS gradient on
 *  its own compositor layer — animation = transform only. */
export function Deco({ variant = "warm", className }: { variant?: "warm" | "lav" | "mint" | "lemon" | "sunset"; className?: string }) {
  const shapes = {
    warm: [
      <div key="a" className="absolute -top-10 -left-6 h-28 w-28 rounded-full bg-peach blur-2xl animate-drift" />,
      <div key="b" className="absolute top-12 -right-10 h-24 w-24 rounded-full bg-lavender blur-2xl animate-float-slow" />,
      <div key="c" className="absolute bottom-6 left-10 h-16 w-16 rounded-full bg-swift/25 blur-xl animate-wobble" />,
      <div key="d" className="absolute top-1/2 right-6 h-2 w-20 rounded-full bg-swift/50 animate-wobble" style={{ transform: "rotate(38deg)" }} />,
      <div key="e" className="absolute bottom-10 right-14 h-12 w-12 border-[3px] border-swift/60 rounded-full animate-wobble" style={{ animationDelay: "-3s" }} />,
    ],
    lav: [
      <div key="a" className="absolute -top-8 left-10 h-32 w-32 rounded-full bg-lavender blur-2xl animate-drift" />,
      <div key="b" className="absolute top-10 right-0 h-20 w-20 rounded-full bg-sky blur-2xl animate-float-slow" />,
      <div key="c" className="absolute bottom-6 left-1/2 h-14 w-14 rounded-full bg-rose/70 blur-xl animate-wobble" />,
      <div key="d" className="absolute top-1/3 right-1/4 h-3 w-3 rounded-full bg-swift" />,
      <div key="e" className="absolute top-1/4 left-1/3 h-3 w-3 rounded-full bg-ink" />,
    ],
    mint: [
      <div key="a" className="absolute -top-10 right-10 h-28 w-28 rounded-full bg-mint blur-2xl animate-drift" />,
      <div key="b" className="absolute top-6 -left-6 h-24 w-24 rounded-full bg-lemon blur-2xl animate-float-slow" />,
      <div key="c" className="absolute bottom-10 right-1/3 h-16 w-16 rounded-full bg-sky/70 blur-xl animate-wobble" />,
    ],
    lemon: [
      <div key="a" className="absolute -top-6 left-8 h-32 w-32 rounded-full bg-lemon blur-2xl animate-drift" />,
      <div key="b" className="absolute top-10 right-4 h-24 w-24 rounded-full bg-peach blur-2xl animate-float-slow" />,
      <div key="c" className="absolute bottom-4 right-10 h-12 w-12 rounded-full bg-swift/30 blur-xl animate-wobble" />,
    ],
    sunset: [
      <div key="a" className="absolute -top-16 left-1/4 h-60 w-60 rounded-full bg-swift-soft/50 blur-3xl animate-morph" />,
      <div key="b" className="absolute -bottom-10 right-1/4 h-48 w-48 rounded-full bg-peach blur-3xl animate-morph-alt" />,
      <div key="c" className="absolute top-1/3 right-10 h-20 w-20 rounded-full bg-lavender/80 blur-2xl animate-drift" />,
    ],
  }[variant];

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {shapes}
    </div>
  );
}

/** A hand-drawn-looking squiggle (SVG, animates via stroke-dashoffset) */
export function Squiggle({ color = "#F05138", className }: { color?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 40"
      className={cn("h-8 w-auto", className)}
      fill="none"
      aria-hidden
    >
      <path
        d="M2 20 Q 12 2, 24 20 T 48 20 T 72 20 T 96 20 T 120 20 T 144 20 T 168 20 T 192 20 T 216 20 T 240 20 T 264 20 T 288 20 T 312 20 T 336 20 T 360 20 T 384 20 T 400 20"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 10"
        className="animate-scribble"
      />
    </svg>
  );
}

/** Colorful dot-grid background */
export function DotGrid({ className }: { className?: string }) {
  return <div aria-hidden className={cn("pointer-events-none absolute inset-0 dot-grid opacity-40", className)} />;
}

/** Confetti dots */
export function Confetti({ className }: { className?: string }) {
  return <div aria-hidden className={cn("pointer-events-none absolute inset-0 confetti", className)} />;
}

/** Sticker label — the playful pop badge */
export function Sticker({
  children,
  color = "bg-swift text-white",
  rotate = -4,
  className,
}: {
  children: React.ReactNode;
  color?: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("sticker inline-block", color, className)}
      style={{ ["--r" as string]: `${rotate}deg` }}
    >
      {children}
    </span>
  );
}

/** A colored underline (not hairline) */
export function PaintUnderline({ color = "bg-swift", className }: { color?: string; className?: string }) {
  return <span aria-hidden className={cn("relative -top-2 mx-0.5 block h-3 w-full rounded-full opacity-40", color, className)} />;
}
