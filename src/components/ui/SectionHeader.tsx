import { Reveal } from "./Reveal";
import { cn } from "@/utils/cn";

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ index, eyebrow, title, body, dark, align = "left", className }: Props) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-12", className)}>
      <Reveal className={cn("lg:col-span-3 flex items-start gap-3", align === "center" && "lg:col-span-12 justify-center")}>
        <span className={cn("font-mono text-[11px] tracking-[0.2em]", dark ? "text-white/40" : "text-muted")}>{index}</span>
        <span className={cn("h-px w-8 translate-y-2", dark ? "bg-white/20" : "bg-ink/20")} aria-hidden />
        <span className={cn("eyebrow", dark && "text-white/50")}>{eyebrow}</span>
      </Reveal>
      <div className={cn("lg:col-span-9", align === "center" && "lg:col-span-12 text-center mx-auto max-w-3xl")}>
        <Reveal delay={80}>
          <h2
            className={cn(
              "display text-balance text-[2.35rem] sm:text-5xl lg:text-[3.6rem]",
              dark ? "text-white" : "text-ink"
            )}
          >
            {title}
          </h2>
        </Reveal>
        {body && (
          <Reveal delay={160}>
            <p className={cn("mt-6 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg", dark ? "text-white/60" : "text-muted", align === "center" && "mx-auto")}>
              {body}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
