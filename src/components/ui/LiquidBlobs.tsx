import { cn } from "@/utils/cn";

/**
 * Ambient "liquid glass" background. Big blurred shapes animate only transform
 * and border-radius on their own compositor layers, so they never trigger
 * layout or paint on the main thread.
 */
export function LiquidBlobs({ className, variant = "light" }: { className?: string; variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="gpu animate-morph absolute -top-[18%] left-[6%] h-[46vmin] w-[46vmin] mix-blend-multiply blur-2xl"
        style={{
          background: dark
            ? "radial-gradient(closest-side, rgba(240,81,56,0.42), transparent)"
            : "radial-gradient(closest-side, rgba(240,81,56,0.30), transparent)",
        }}
      />
      <div
        className="gpu animate-morph-alt absolute bottom-[-14%] right-[4%] h-[52vmin] w-[52vmin] blur-2xl"
        style={{
          animationDelay: "-6s",
          background: dark
            ? "radial-gradient(closest-side, rgba(255,138,90,0.26), transparent)"
            : "radial-gradient(closest-side, rgba(255,176,120,0.42), transparent)",
        }}
      />
      <div
        className="gpu animate-morph absolute left-[38%] top-[42%] h-[34vmin] w-[34vmin] blur-2xl"
        style={{
          animationDelay: "-12s",
          background: dark
            ? "radial-gradient(closest-side, rgba(120,120,255,0.22), transparent)"
            : "radial-gradient(closest-side, rgba(255,222,190,0.6), transparent)",
        }}
      />
    </div>
  );
}
