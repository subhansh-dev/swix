import { useState } from "react";
import paint from "@/assets/paint.webp";
import { Reveal } from "./ui/Reveal";
import { Deco, Sticker, Squiggle } from "./ui/Deco";
import { Magnetic } from "./ui/Magnetic";
import { useSpotlight } from "@/hooks/useSpotlight";
import { cn } from "@/utils/cn";

export function CTA() {
  const { onPointerMove } = useSpotlight<HTMLDivElement>();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setState("done");
  };

  return (
    <section id="cta" className="cv-auto py-24 sm:py-32">
      <div className="container-x">
        <Reveal variant="scale">
          <div
            onPointerMove={onPointerMove}
            className="sheen relative overflow-hidden rounded-[36px] border-[3px] border-ink bg-sunset px-6 py-16 text-ink shadow-[0_20px_0_rgba(11,11,12,0.9)] sm:px-12 sm:py-24 lg:px-20"
          >
            {/* colorful shapes */}
            <Deco variant="sunset" />
            <img
              src={paint}
              alt=""
              aria-hidden
              width={700}
              height={700}
              loading="lazy"
              decoding="async"
              className="gpu pointer-events-none absolute -right-10 -top-10 h-80 w-80 object-contain opacity-60 mix-blend-multiply"
            />

            {/* rising particles */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              {[
                { left: "12%", delay: "0s", d: "7s", c: "bg-swift" },
                { left: "28%", delay: "1.4s", d: "9s", c: "bg-lemon" },
                { left: "64%", delay: "2.6s", d: "8s", c: "bg-rose" },
                { left: "81%", delay: "0.8s", d: "10s", c: "bg-swift-deep" },
              ].map((p) => (
                <span
                  key={p.left}
                  className={cn("gpu animate-rise absolute bottom-0 h-2 w-2 rounded-full", p.c)}
                  style={{ left: p.left, animationDelay: p.delay, animationDuration: p.d }}
                />
              ))}
            </div>

            <div className="relative grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3">
                  <Sticker rotate={-3} color="bg-swift text-white">Cohort 07</Sticker>
                  <Sticker rotate={4} color="bg-lemon text-ink">Applications close 28 Feb</Sticker>
                </div>
                <h2 className="display mt-6 text-balance text-4xl sm:text-6xl lg:text-[4.6rem]">
                  Your first app is one <span className="text-gradient">Thursday</span> away.
                </h2>
                <p className="mt-6 max-w-xl text-pretty text-lg text-ink/70">
                  Free for every Parul student. Leave your university email — we'll send the application
                  link, lab schedule and a Swift starter kit.
                </p>

                <form onSubmit={submit} className="mt-10 max-w-lg" aria-label="Apply to Swift Coding Club">
                  <div className="flex flex-col gap-2 rounded-[22px] border-[3px] border-ink bg-white p-2 shadow-[0_6px_0_rgba(11,11,12,0.9)] sm:flex-row">
                    <label htmlFor="email" className="sr-only">University email</label>
                    <input
                      id="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@paruluniversity.ac.in"
                      className="h-12 flex-1 rounded-xl bg-transparent px-5 text-[15px] text-ink placeholder:text-ink/40 focus:outline-none"
                    />
                    <Magnetic strength={0.18}>
                      <button type="submit" className={cn("btn h-12 !py-0", state === "done" ? "btn-ghost !bg-mint !text-ink" : "btn-accent")}>
                        {state === "done" ? "Check your inbox ✓" : "Get the application"}
                      </button>
                    </Magnetic>
                  </div>
                  <p className="mt-3 text-xs text-muted" aria-live="polite">
                    {state === "done" ? "Sent. See you Thursday, 5pm — Block B, 3F." : "Any @paruluniversity.ac.in address. No spam, ever."}
                  </p>
                </form>
              </div>

              <div className="lg:col-span-4 lg:pl-8">
                <ul className="space-y-6 border-l-[3px] border-ink/20 pl-6">
                  {[
                    { w: "Week 01", t: "Swift basics in a Playground", color: "bg-swift" },
                    { w: "Week 04", t: "Your first SwiftUI screen", color: "bg-lemon" },
                    { w: "Week 09", t: "TestFlight beta to friends", color: "bg-lavender" },
                    { w: "Week 14", t: "Demo Day + App Review", color: "bg-mint" },
                  ].map(({ w, t, color }, i) => (
                    <li key={w} className="relative">
                      <span className={cn("absolute -left-[33px] top-1.5 h-3.5 w-3.5 border-[2px] border-ink", color)} style={{ borderRadius: "50%" }} />
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{w}</p>
                      <p className="mt-0.5 text-[15px] font-semibold text-ink">{t}</p>
                      <div className="mt-2 h-px w-full bg-ink/10">
                        <div
                          className="gpu h-px bg-swift transition-[width] duration-1000 ease-[var(--ease-out-expo)]"
                          style={{ width: `${25 + i * 25}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <Reveal delay={280} className="mt-8">
                  <Squiggle color="#F05138" className="w-40 opacity-70" />
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
