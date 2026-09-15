import { useEffect, useState } from "react";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { useReducedMotion } from "@/hooks/useMedia";
import { cn } from "@/utils/cn";

type App = {
  name: string;
  cat: string;
  by: string;
  from: string;
  to: string;
  accent: string;
  rows: string[];
};

const apps: App[] = [
  { name: "Campus", cat: "Events", by: "Club · 2025", from: "#F05138", to: "#FF8A5B", accent: "#F05138", rows: ["Techfest · Main Audi", "Guest Lecture · B2", "Hack Night · Lab 3"] },
  { name: "Mess Mate", cat: "Hostel", by: "Club · 2026", from: "#2B7FFF", to: "#7AB8FF", accent: "#2B7FFF", rows: ["Lunch · Poha, Chai", "Skip meal · 2 credits", "Rating · 4.6 ★"] },
  { name: "Pulse", cat: "Attendance", by: "Club · 2024", from: "#12B76A", to: "#6EE7B7", accent: "#12B76A", rows: ["Today · 5 of 6", "Live Activity on", "Bunk risk · Low"] },
  { name: "Raahi", cat: "Rides", by: "Club · 2026", from: "#7A5AF8", to: "#C4B5FD", accent: "#7A5AF8", rows: ["Gate 2 → Hostel", "3 seats left", "₹15 per head"] },
  { name: "StudyLoop", cat: "Focus", by: "Club · 2025", from: "#FF9F0A", to: "#FFD48A", accent: "#FF9F0A", rows: ["Session · 48 min", "Streak · 21 days", "Room · 4 friends"] },
  { name: "Parul Maps", cat: "Navigation", by: "Club · 2023", from: "#0BA5EC", to: "#7DD3FC", accent: "#0BA5EC", rows: ["Block B · 2 min", "Library · 6 min", "Canteen · open"] },
  { name: "CodeDeck", cat: "Practice", by: "Club · 2026", from: "#EC4899", to: "#FBCFE8", accent: "#EC4899", rows: ["Daily · Optionals", "Solved · 128", "Rank · 3rd"] },
];

function Screen({ app, live }: { app: App; live: boolean }) {
  return (
    <div className="gpu relative aspect-[9/19] w-[210px] overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-[0_40px_80px_-30px_rgba(28,100,131,0.55)] sm:w-[236px]">
      {/* glossy top sheen, the frutiger hallmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-30 h-1/3"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0) 100%)", borderRadius: "30px 30px 40% 40%" }}
      />
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#0d3a52]" />
      {/* status bar */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-3 text-[9px] font-semibold text-white">
        <span>9:41</span>
        <span className="flex gap-1">
          <span className="h-1.5 w-3 rounded-sm bg-white/90" />
          <span className="h-1.5 w-1 rounded-sm bg-white/60" />
        </span>
      </div>
      {/* header */}
      <div
        className="relative px-4 pt-2"
        style={{
          background: `linear-gradient(180deg, ${app.from}, ${app.to})`,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        <div className="pb-4 pt-2 text-white">
          <p className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-white/75">{app.cat}</p>
          <p className="mt-0.5 text-[17px] font-bold tracking-tight drop-shadow-[0_1px_1px_rgba(0,40,60,0.3)]">{app.name}</p>
          <div className="mt-2 flex gap-1.5">
            {["Live", "Beta", "iOS 18"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/50 bg-white/30 px-2 py-0.5 text-[8px] font-semibold text-white backdrop-blur-sm"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="h-6 rounded-t-2xl bg-white" />
      </div>
      {/* content */}
      <div className="bg-white px-3 pt-2">
        {app.rows.map((r, i) => (
          <div
            key={r}
            className="mb-1.5 flex items-center gap-2 rounded-xl border border-[#cfe9f7] bg-[#f4fbff] px-2.5 py-2"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)" }}
          >
            <span
              className="h-6 w-6 shrink-0 rounded-lg"
              style={{
                background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.9), ${app.to} 70%), linear-gradient(140deg, ${app.from}, ${app.to})`,
                opacity: 1 - i * 0.18,
              }}
            />
            <span className="truncate text-[10px] font-medium text-[#0d3a52]/80">{r}</span>
          </div>
        ))}
        <div
          className="mt-2 h-14 rounded-xl"
          style={{ background: `linear-gradient(120deg, ${app.from}22, ${app.to}44)`, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)" }}
        />
      </div>
      {/* tab bar */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-[#cfe9f7] bg-white/90 px-4 py-2.5 backdrop-blur">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={cn("h-4 w-4 rounded-md", i !== 1 && "opacity-25")}
            style={{ background: i === 1 ? app.accent : "#0d3a52", boxShadow: i === 1 ? "0 0 10px rgba(255,255,255,0.6) inset" : undefined }}
          />
        ))}
      </div>
      {/* glass specular */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.6),transparent_38%)] mix-blend-overlay" />
      {live && (
        <span className="aero-panel absolute bottom-16 left-1/2 -translate-x-1/2 !rounded-full px-3 py-1 font-mono text-[8.5px] uppercase tracking-[0.18em] text-[#1d5a7a]">
          {app.by}
        </span>
      )}
    </div>
  );
}

export function Coverflow() {
  const [active, setActive] = useState(Math.floor(apps.length / 2));
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % apps.length), 3600);
    return () => clearInterval(id);
  }, [reduce, active]);

  return (
    <section
      id="apps"
      className="aero aero-sky cv-auto relative overflow-hidden py-24 sm:py-32"
    >
      {/* aero backdrop: clouds, bubbles, light rays */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute -top-10 left-[10%] h-36 w-[28rem] rounded-full bg-white/70 blur-3xl" />
        <span className="absolute top-1/3 right-0 h-44 w-[24rem] rounded-full bg-white/50 blur-3xl" />
        <span className="absolute bottom-0 left-0 h-40 w-[30rem] rounded-full bg-[#8fe0b0]/35 blur-3xl" />
        {/* rising bubbles */}
        {[
          { left: "8%", size: 22, d: "0s" },
          { left: "20%", size: 12, d: "2.4s" },
          { left: "40%", size: 16, d: "4.4s" },
          { left: "60%", size: 10, d: "1.2s" },
          { left: "76%", size: 24, d: "3.2s" },
          { left: "92%", size: 14, d: "5.4s" },
        ].map((b, i) => (
          <span
            key={i}
            className="aero-bubble gpu animate-aero-rise"
            style={{ left: b.left, bottom: "-30px", width: b.size, height: b.size, animationDelay: b.d, animationDuration: "14s" }}
          />
        ))}
        {/* soft light rays */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "conic-gradient(from 200deg at 50% -10%, transparent 0deg, rgba(255,255,255,0.55) 8deg, transparent 16deg, transparent 30deg, rgba(255,255,255,0.4) 38deg, transparent 46deg)",
          }}
        />
      </div>

      <div className="container-x relative">
        <SectionHeader
          align="center"
          index="05"
          eyebrow="Shipped by students"
          title={
            <span className="text-[#0d3a52]">
              Seven apps. Seven <span className="text-[#1d7a4c]">semesters of Thursdays.</span>
            </span>
          }
          body={
            <span className="text-[#2c6c8f]">
              Swipe, tap or use the arrow keys. Every screen here was designed and built inside the club.
            </span>
          }
        />
      </div>

      <div className="relative mt-14 sm:mt-20">
        <div
          className="scene-3d relative flex h-[440px] items-center justify-center sm:h-[520px]"
          style={{ perspective: "1600px" }}
        >
          {apps.map((app, i) => {
            let off = i - active;
            // shortest path around the loop
            if (off > apps.length / 2) off -= apps.length;
            if (off < -apps.length / 2) off += apps.length;
            const abs = Math.abs(off);
            if (abs > 3) return null;
            return (
              <button
                key={app.name}
                type="button"
                tabIndex={abs === 0 ? 0 : -1}
                aria-label={`${app.name} — ${app.cat}`}
                onClick={() => setActive(i)}
                className="gpu backface-hidden absolute left-1/2 top-1/2 preserve-3d focus:outline-none"
                style={{
                  transform: `translate(-50%, -50%) translateX(${off * 46}%) rotateY(${-off * 26}deg) translateZ(${-abs * 150}px) scale(${1 - abs * 0.07})`,
                  opacity: abs > 2 ? 0.25 : 1 - abs * 0.12,
                  zIndex: 50 - abs,
                  filter: abs ? `blur(${Math.min(abs, 2)}px)` : "none",
                  transition: "transform 0.85s var(--ease-out-expo), opacity 0.85s var(--ease-out-expo), filter 0.85s var(--ease-out-expo)",
                }}
              >
                <Screen app={app} live={abs === 0} />
              </button>
            );
          })}
        </div>

        {/* controls */}
        <div className="relative z-[60] mt-4 flex items-center justify-center gap-5">
          {[
            { dir: -1, label: "Previous app" },
            { dir: 1, label: "Next app" },
          ].map(({ dir, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              onClick={() => setActive((a) => (a + dir + apps.length) % apps.length)}
              className="aero-panel aero-gloss group flex h-12 w-12 items-center justify-center !rounded-full text-[#1d5a7a] transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              <svg className={cn("h-4 w-4", dir === -1 && "rotate-180")} viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>

        {/* dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {apps.map((a, i) => (
            <button
              key={a.name}
              type="button"
              aria-label={`Show ${a.name}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500 ease-[var(--ease-out-expo)]",
                i === active ? "w-8" : "w-1.5 bg-[#2c6c8f]/25 hover:bg-[#2c6c8f]/45"
              )}
              style={i === active ? { background: "linear-gradient(90deg,#3aa5d9,#46b877)", boxShadow: "0 0 10px rgba(70,184,119,0.6)" } : undefined}
            />
          ))}
        </div>
      </div>

      <Reveal delay={200} className="container-x relative mt-10 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2c6c8f]">
          {apps[active].name} · {apps[active].cat} · {apps[active].by}
        </p>
      </Reveal>
    </section>
  );
}
