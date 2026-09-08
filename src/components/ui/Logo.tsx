import { cn } from "@/utils/cn";

export function SwiftMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-8 w-8", className)} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#F05138" />
      <path
        d="M47.0606 36.6607c-.0014-.0018-.0027-.0031-.0042-.0048.0657-.2236.1335-.4458.191-.675C49.7124 26.16 43.6964 14.549 33.5159 8.4355c4.4613 6.0479 6.4339 13.3733 4.6813 19.7795-.1563.5714-.3442 1.1198-.5519 1.6528-.2254-.1481-.5094-.3162-.8908-.5265 0 0-10.1269-6.2527-21.1028-17.3122-.288-.2903 5.8528 8.777 12.8219 16.1399-3.2834-1.8427-12.4338-8.5004-18.2266-13.8023.7117 1.1869 1.5582 2.3298 2.4887 3.4301 4.8375 6.1349 11.1462 13.7044 18.7043 19.5169-5.3104 3.2498-12.8141 3.5025-20.2852.0034-1.8479-.866-3.5851-1.9109-5.1932-3.0981 3.1625 5.0585 8.0332 9.4229 13.9613 11.9708 7.0695 3.0381 14.0996 2.8321 19.3356.0498l-.0041.006c.0239-.0151.0543-.0316.0791-.0469.215-.1156.4284-.2333.6371-.3576 2.5157-1.3058 7.4847-2.6306 10.1518 2.5588C50.7755 49.6699 52.1635 42.9395 47.0606 36.6607z"
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
