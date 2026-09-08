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
        phase === "exit" ? "opacity-0 scale-[1.08]" : "opacity-100 scale-100"
      )}
    >
      {/* paper background with ember liquid-metal wash */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[#FFF8F2] via-[#FFE4D6]/60 to-[#FFF0E6]/40" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-[#F05138]/10 via-[#FFD3BC]/20 to-[#C2B8A3]/15" />
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
          <span aria-hidden className="gpu absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F05138]/30 animate-ping-ring" />
          <span aria-hidden className="gpu absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF7A5C]/20 animate-ping-ring" style={{ animationDelay: "-1s" }} />
          <span aria-hidden className="gpu absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFD3BC]/25 animate-ping-ring" style={{ animationDelay: "-2s" }} />

          {/* the Swift-mark tile, drawn-in via clipPath + scale */}
          <div
            className="gpu relative flex h-20 w-20 items-center justify-center rounded-3xl bg-[#F05138] text-white shadow-[0_24px_50px_-18px_rgba(240,81,56,0.7)] transition-all duration-1000 ease-[var(--ease-spring)]"
            style={{
              animation: "splash-pop 1.2s var(--ease-out-expo) both",
            }}
          >
            <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
              <rect width="64" height="64" rx="14" fill="#F05138" />
              <path d="M47.0606 36.6607c-.0014-.0018-.0027-.0031-.0042-.0048.0657-.2236.1335-.4458.191-.675C49.7124 26.16 43.6964 14.549 33.5159 8.4355c4.4613 6.0479 6.4339 13.3733 4.6813 19.7795-.1563.5714-.3442 1.1198-.5519 1.6528-.2254-.1481-.5094-.3162-.8908-.5265 0 0-10.1269-6.2527-21.1028-17.3122-.288-.2903 5.8528 8.777 12.8219 16.1399-3.2834-1.8427-12.4338-8.5004-18.2266-13.8023.7117 1.1869 1.5582 2.3298 2.4887 3.4301 4.8375 6.1349 11.1462 13.7044 18.7043 19.5169-5.3104 3.2498-12.8141 3.5025-20.2852.0034-1.8479-.866-3.5851-1.9109-5.1932-3.0981 3.1625 5.0585 8.0332 9.4229 13.9613 11.9708 7.0695 3.0381 14.0996 2.8321 19.3356.0498l-.0041.006c.0239-.0151.0543-.0316.0791-.0469.215-.1156.4284-.2333.6371-.3576 2.5157-1.3058 7.4847-2.6306 10.1518 2.5588C50.7755 49.6699 52.1635 42.9395 47.0606 36.6607z" fill="#fff" />
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
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#F05138] via-[#FF7A5C] to-[#FFD3BC] transition-[width] duration-200"
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
          {["Apple Authorized", "Swift", "Free", "Est. 2020"].map((t) => (
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
      {/* 3D glass orb layer — molten metal blobs */}
      <div className="absolute -left-16 -top-10 h-56 w-56 rounded-full bg-gradient-to-br from-[#FF7A5C]/40 to-[#F05138]/20 blur-3xl" />
      <div className="absolute -right-24 bottom-16 h-64 w-64 rounded-full bg-gradient-to-tl from-[#FFD3BC]/50 to-[#C2B8A3]/30 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#F05138]/30 to-transparent blur-2xl" />
      {/* small mercury droplets */}
      <div className="light-point absolute left-[15%] top-[20%] h-4 w-4 rounded-full bg-gradient-to-br from-white/60 to-[#FFD3BC]/80 blur-sm" />
      <div className="light-point absolute right-[20%] top-[30%] h-3 w-3 rounded-full bg-gradient-to-br from-white/50 to-[#F05138]/60 blur-sm" />
      <div className="light-point absolute left-[70%] top-[60%] h-5 w-5 rounded-full bg-gradient-to-br from-white/40 to-[#FF7A5C]/70 blur-sm" />

      <div
        className="gpu animate-morph absolute -top-32 -left-24 h-[44vmin] w-[44vmin] rounded-[60%]"
        style={{ background: "radial-gradient(closest-side, rgba(255,210,180,0.65), transparent)" }}
      />
      <div
        className="gpu animate-morph-alt absolute -bottom-24 -right-16 h-[48vmin] w-[48vmin] rounded-[60%]"
        style={{ background: "radial-gradient(closest-side, rgba(240,81,56,0.5), transparent)", animationDelay: "-6s" }}
      />
      <div
        className="gpu animate-morph absolute left-1/2 top-1/2 h-[30vmin] w-[30vmin] -translate-x-1/2 -translate-y-1/2 rounded-[60%]"
        style={{ background: "radial-gradient(closest-side, rgba(255,211,188,0.45), transparent)", animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
    </div>
  );
}
