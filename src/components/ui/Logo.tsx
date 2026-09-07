import { cn } from "@/utils/cn";

export function SwiftMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-8 w-8", className)} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="currentColor" />
      <path
        d="M46 44c-2.5 3-8 4-14 2-8-3-15-10-19-18 5 5 11 9 16 11-6-6-11-13-13-19 6 7 13 13 20 17 1-6-1-12-4-17 7 5 12 12 13 20 0 2 0 4-1 6 3 2 5 6 2 10z"
        fill="#fff"
      />
    </svg>
  );
}

export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-3", className)} aria-label="Swift Coding Club, Parul University — home">
      <SwiftMark className="h-8 w-8 text-swift transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-[-8deg] group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className={cn("text-[15px] font-bold tracking-tight", dark ? "text-white" : "text-ink")}>Swift Coding Club</span>
        <span className={cn("mt-1 font-mono text-[10px] uppercase tracking-[0.18em]", dark ? "text-white/45" : "text-muted")}>Parul University</span>
      </span>
    </a>
  );
}
