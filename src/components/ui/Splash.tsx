import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

/** If the inline splash already dismissed before React booted, skip ours. */
const skipIfAlreadyReady = (): boolean => typeof document !== "undefined" && document.body.classList.contains("app-ready");

/**
 * App-level splash loader. Painted immediately on first visit (no React render
 * needed for the static parts — just CSS) and dismissed once React has
 * committed and the fonts are ready. Hides are pure opacity/scale so the
 * main app never has to wait for the splash to finish.
 */

export function Splash() {
  const [phase, setPhase] = useState<"in" | "exit" | "out">(() => (skipIfAlreadyReady() ? "out" : "in"));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (phase === "out") return;
    // Drive a fake-but-pleasant progress bar via rAF for the ~1.2s boot,
    // then a smooth exit. We use real waitForFontReady so we never dismiss
    // before the body text has loaded.
    const start = performance.now();
    const total = 1100;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / total);
      // ease-out-quart for a confident "almost full then snap"
      const eased = 1 - Math.pow(1 - p, 4);
      setProgress(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const wait = async () => {
      const start = performance.now();
      try {
        if ("fonts" in document) {
          await Promise.race([
            (document as Document & { fonts: { ready: Promise<void> } }).fonts.ready,
            new Promise((r) => setTimeout(r, 900)),
          ]);
        }
      } catch {}
      // Coordinate with the static HTML splash — we only "exit" when the
      // body actually has app-ready, or after a hard 1.2s cap.
      if (typeof document !== "undefined" && !document.body.classList.contains("app-ready")) {
        const elapsed = performance.now() - start;
        await new Promise((r) => setTimeout(r, Math.max(0, 1100 - elapsed)));
      }
      setPhase("exit");
    };
    wait();

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (phase !== "exit") return;
    // after the exit transition, fully unmount
    const id = setTimeout(() => setPhase("out"), 800);
    return () => clearTimeout(id);
  }, [phase]);

  if (phase === "out") return null;

  return (
    <div
      aria-hidden={phase === "exit"}
      role="status"
      aria-label="Loading Swift Coding Club"
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center transition-all duration-700 ease-[var(--ease-out-expo)]",
        phase === "exit" ? "opacity-0 scale-[1.04]" : "opacity-100 scale-100"
      )}
    >
      {/* paper background with the same warm wash as the site */}
      <div aria-hidden className="absolute inset-0 bg-paper" />
      <div aria-hidden className="absolute inset-0 bg-warm" />
      <DecoBg />

      {/* giant wordmark + animated mark */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* corner swiss numbers */}
        <div className="absolute -top-16 left-1/2 hidden -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-muted sm:block">
          EST. 2020 · VADODARA, GUJARAT
        </div>

        {/* The logo, animated */}
        <div className="relative">
          {/* pulsing rings behind the mark */}
          <span aria-hidden className="gpu absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-swift/40 animate-ping-ring" />
          <span aria-hidden className="gpu absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-swift/30 animate-ping-ring" style={{ animationDelay: "-1s" }} />
          <span aria-hidden className="gpu absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-swift/20 animate-ping-ring" style={{ animationDelay: "-2s" }} />

          {/* the Swift-mark tile, drawn-in via clipPath + scale */}
          <div
            className="gpu relative flex h-20 w-20 items-center justify-center rounded-3xl bg-swift text-white shadow-[0_24px_50px_-18px_rgba(240,81,56,0.7)] transition-all duration-1000 ease-[var(--ease-spring)]"
            style={{
              animation: "splash-pop 1.2s var(--ease-out-expo) both",
            }}
          >
            <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
              <path
                d="M46 44c-2.5 3-8 4-14 2-8-3-15-10-19-18 5 5 11 9 16 11-6-6-11-13-13-19 6 7 13 13 20 17 1-6-1-12-4-17 7 5 12 12 13 20 0 2 0 4-1 6 3 2 5 6 2 10z"
                fill="#fff"
              />
            </svg>
            {/* spinning ring on the tile */}
            <span aria-hidden className="absolute inset-0 rounded-3xl border-2 border-white/40 animate-spin-slow" style={{ animationDuration: "6s" }} />
          </div>
        </div>

        {/* staggered text */}
        <div className="mt-8 overflow-hidden">
          <p
            className="display text-balance text-3xl sm:text-5xl"
            style={{ animation: "splash-rise 0.9s 0.25s var(--ease-out-expo) both" }}
          >
            Swift Coding Club
          </p>
        </div>
        <div className="mt-1 overflow-hidden">
          <p
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted sm:text-xs"
            style={{ animation: "splash-rise 0.9s 0.45s var(--ease-out-expo) both" }}
          >
            Parul University
          </p>
        </div>

        {/* progress bar with shine */}
        <div
          className="relative mt-10 h-1 w-72 max-w-[70vw] overflow-hidden rounded-full bg-ink/10 sm:w-96"
          style={{ animation: "splash-rise 0.9s 0.7s var(--ease-out-expo) both" }}
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-swift to-swift-soft transition-[width] duration-200"
            style={{ width: `${progress}%` }}
          />
          <div
            aria-hidden
            className="absolute inset-y-0 -translate-x-full w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent"
            style={{ animation: "splash-shine 1.4s linear infinite" }}
          />
        </div>
        <div
          className="mt-3 flex w-72 max-w-[70vw] items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:w-96"
          style={{ animation: "splash-rise 0.9s 0.85s var(--ease-out-expo) both" }}
        >
          <span>booting the lab</span>
          <span className="tabular-nums">{progress.toString().padStart(3, " ")}%</span>
        </div>

        {/* tag pills */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
          style={{ animation: "splash-rise 0.9s 1s var(--ease-out-expo) both" }}
        >
          {["Apple Authorized", "Swift", "Free", "Cohort 07"].map((t) => (
            <span
              key={t}
              className="sticker !shadow-[0_3px_0_rgba(11,11,12,0.9)]"
              style={{ ["--r" as string]: `${(t.length % 2 ? 3 : -3)}deg` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* bottom credit strip */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center px-6 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
        <span className="h-px w-10 bg-ink/15 sm:w-20" />
        <span className="mx-3">Designed & built by students · Vadodara</span>
        <span className="h-px w-10 bg-ink/15 sm:w-20" />
      </div>
    </div>
  );
}

function DecoBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="gpu animate-morph absolute -top-32 -left-24 h-[44vmin] w-[44vmin] rounded-[60%]"
        style={{ background: "radial-gradient(closest-side, rgba(255,210,180,0.65), transparent)" }}
      />
      <div
        className="gpu animate-morph-alt absolute -bottom-24 -right-16 h-[48vmin] w-[48vmin] rounded-[60%]"
        style={{ background: "radial-gradient(closest-side, rgba(217,207,255,0.6), transparent)", animationDelay: "-6s" }}
      />
      <div
        className="gpu animate-morph absolute left-1/2 top-1/2 h-[30vmin] w-[30vmin] -translate-x-1/2 -translate-y-1/2 rounded-[60%]"
        style={{ background: "radial-gradient(closest-side, rgba(255,237,163,0.45), transparent)", animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
    </div>
  );
}
