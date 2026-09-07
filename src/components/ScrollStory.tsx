import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "@/hooks/useMedia";

/**
 * A cinematic scroll-scrubbed sequence — the same technique Apple product
 * pages use (pin a tall section, map scroll position to a frame of an
 * animation) except every "frame" is drawn procedurally on a <canvas> instead
 * of decoded from a video or an image sequence. That means:
 *  - zero video/image bytes shipped for the whole scene
 *  - infinite resolution (redraws crisp at any DPR)
 *  - the "frame" is only computed when scroll actually changes (rAF-throttled,
 *    dirty-flag driven) — there is no idle animation loop burning battery
 * The narrative: scattered code fragments assemble into an app-icon mosaic,
 * the club's Swift mark resolves on top, then shipped apps orbit out.
 */

const PALETTE = ["#F05138", "#FF7A5C", "#FFD3BC", "#D9CFFF", "#B9ECCD", "#BDE4FF", "#FFEDA3", "#D63F27"];
const BIRD_PATH = "M46 44c-2.5 3-8 4-14 2-8-3-15-10-19-18 5 5 11 9 16 11-6-6-11-13-13-19 6 7 13 13 20 17 1-6-1-12-4-17 7 5 12 12 13 20 0 2 0 4-1 6 3 2 5 6 2 10z";

const CAPTIONS = [
  { at: 0.02, t: "Every great app starts as scattered ideas.", tag: "Scene 01 · Fragments" },
  { at: 0.32, t: "Fourteen weeks turn fragments into structure.", tag: "Scene 02 · Assembly" },
  { at: 0.58, t: "One semester. One shipped app.", tag: "Scene 03 · Resolve" },
  { at: 0.82, t: "Welcome to the Swift Coding Club.", tag: "Scene 04 · Orbit" },
];

type Tile = {
  sx: number; sy: number; srot: number; // scattered start
  tx: number; ty: number; trot: number; // target grid position
  size: number;
  color: string;
  delay: number; // 0..1 stagger offset
};

type Orbiter = { angle: number; glyph: string; color: string; delay: number };

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp01 = (n: number) => Math.max(0, Math.min(1, n));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function buildTiles(): Tile[] {
  const cols = 9;
  const rows = 8;
  const cell = 480 / cols;
  const tiles: Tile[] = [];
  let i = 0;
  const total = cols * rows;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const gx = -240 + c * cell + cell / 2;
      const gy = -220 + r * cell + cell / 2;
      // pseudo-random but deterministic scatter based on index
      const seed = i * 137.51;
      const angle = (seed % 360) * (Math.PI / 180);
      const radius = 420 + ((seed * 3.7) % 260);
      const sx = Math.cos(angle) * radius;
      const sy = Math.sin(angle) * radius * 0.72;
      const diag = (r + c) / (rows + cols);
      const color = PALETTE[Math.floor(diag * (PALETTE.length - 1) + ((i * 13) % 3) * 0.15) % PALETTE.length];
      tiles.push({
        sx,
        sy,
        srot: ((seed % 140) - 70) * (Math.PI / 180),
        tx: gx,
        ty: gy,
        trot: 0,
        size: cell - 7,
        color,
        delay: (Math.sqrt(gx * gx + gy * gy) / 340) * 0.55 + (i / total) * 0.15,
      });
      i++;
    }
  }
  return tiles;
}

const ORBIT_GLYPHS = ["\u2665", "\u2601", "\u2605", "\u25B6", "\u2713", "\u266A"];
function buildOrbiters(): Orbiter[] {
  return ORBIT_GLYPHS.map((glyph, i) => ({
    angle: (i / ORBIT_GLYPHS.length) * Math.PI * 2,
    glyph,
    color: PALETTE[i % PALETTE.length],
    delay: i * 0.05,
  }));
}

function roundRectPath(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export function ScrollStory() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const captionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barRef = useRef<HTMLDivElement>(null);
  const timecodeRef = useRef<HTMLSpanElement>(null);
  const sceneRef = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const tiles = useMemo(buildTiles, []);
  const orbiters = useMemo(buildOrbiters, []);
  const birdPath2D = useMemo(() => (typeof Path2D !== "undefined" ? new Path2D(BIRD_PATH) : null), []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas || reduce) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(2, window.devicePixelRatio || 1);
    let raf = 0;
    let dirty = true;
    let visible = false;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      dirty = true;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) dirty = true;
      },
      { threshold: 0 }
    );
    io.observe(wrap);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const draw = (p: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const scale = Math.min(width, height) / 900;
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.scale(scale, scale);

      // ambient backdrop glow
      const glowT = clamp01((p - 0.5) / 0.4);
      if (glowT > 0) {
        const g = ctx.createRadialGradient(0, 0, 10, 0, 0, 420);
        g.addColorStop(0, `rgba(240,81,56,${0.22 * glowT})`);
        g.addColorStop(1, "rgba(240,81,56,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, 420, 0, Math.PI * 2);
        ctx.fill();
      }

      // clip to rounded "app icon" boundary once tiles are mostly assembled
      const assembleT = clamp01((p - 0.28) / 0.42);

      for (const tile of tiles) {
        const local = clamp01((assembleT - tile.delay) / (1 - tile.delay || 1));
        const e = easeOutCubic(local);
        const x = lerp(tile.sx, tile.tx, e);
        const y = lerp(tile.sy, tile.ty, e);
        const rot = lerp(tile.srot, tile.trot, e);
        const scatterOpacity = clamp01(p / 0.06);
        const size = tile.size * lerp(0.7, 1, e);

        ctx.save();
        ctx.globalAlpha = scatterOpacity;
        ctx.translate(x, y);
        ctx.rotate(rot);
        roundRectPath(ctx, -size / 2, -size / 2, size, size, 9);
        ctx.fillStyle = tile.color;
        ctx.fill();
        if (e > 0.94) {
          ctx.globalAlpha = scatterOpacity * 0.35;
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }
        ctx.restore();
      }

      // brand mark reveal
      const markT = clamp01((p - 0.56) / 0.22);
      if (markT > 0 && birdPath2D) {
        const e = easeInOutCubic(markT);
        ctx.save();
        ctx.globalAlpha = e;
        ctx.translate(0, -6);
        ctx.scale(4.6 * lerp(0.7, 1, e), 4.6 * lerp(0.7, 1, e));
        ctx.translate(-32, -32);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "rgba(240,81,56,0.55)";
        ctx.shadowBlur = 26;
        ctx.fill(birdPath2D);
        ctx.restore();
      }

      // orbiters
      const orbitT = clamp01((p - 0.78) / 0.22);
      if (orbitT > 0) {
        const radius = lerp(0, 300, easeOutCubic(orbitT));
        ctx.save();
        ctx.globalAlpha = orbitT;
        ctx.strokeStyle = "rgba(11,11,12,0.12)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 10]);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        for (const o of orbiters) {
          const local = clamp01((orbitT - o.delay) / (1 - o.delay || 1));
          const r = radius * easeOutCubic(local);
          const ox = Math.cos(o.angle) * r;
          const oy = Math.sin(o.angle) * r * 0.9;
          ctx.save();
          ctx.globalAlpha = local;
          ctx.translate(ox, oy);
          roundRectPath(ctx, -22, -22, 44, 44, 13);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = o.color;
          ctx.stroke();
          ctx.fillStyle = o.color;
          ctx.font = "600 22px system-ui, -apple-system, sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(o.glyph, 0, 1);
          ctx.restore();
        }
        ctx.restore();
      }

      ctx.restore();
    };

    let lastP = -1;
    const update = () => {
      dirty = false;
      const rect = wrap.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = clamp01(total > 0 ? -rect.top / total : 0);
      if (Math.abs(p - lastP) > 0.0008) {
        lastP = p;
        draw(p);
        // HTML overlays — written directly to avoid React re-render per scroll tick
        if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
        if (timecodeRef.current) {
          const totalFrames = 96;
          const f = Math.round(p * totalFrames);
          const sec = Math.floor(f / 24);
          timecodeRef.current.textContent = `00:0${sec}:${String(f % 24).padStart(2, "0")}`;
        }
        const activeIdx = CAPTIONS.reduce((acc, c, i) => (p >= c.at ? i : acc), 0);
        if (sceneRef.current) sceneRef.current.textContent = CAPTIONS[activeIdx].tag;
        captionRefs.current.forEach((el, i) => {
          if (!el) return;
          const c = CAPTIONS[i];
          const next = CAPTIONS[i + 1]?.at ?? 1.05;
          const fadeIn = clamp01((p - c.at) / 0.06);
          const fadeOut = 1 - clamp01((p - (next - 0.08)) / 0.08);
          const op = Math.min(fadeIn, fadeOut);
          el.style.opacity = String(op);
          el.style.transform = `translate3d(0, ${(1 - fadeIn) * 16}px, 0)`;
        });
      }
    };

    const onScroll = () => {
      if (!visible) return;
      dirty = true;
      if (!raf) raf = requestAnimationFrame(() => {
        raf = 0;
        if (dirty) update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [tiles, orbiters, birdPath2D, reduce]);

  if (reduce) {
    return (
      <section id="story" className="cv-auto relative overflow-hidden bg-warm py-24 text-center">
        <div className="container-x">
          <p className="eyebrow">Our story</p>
          <h2 className="display mx-auto mt-4 max-w-2xl text-balance text-4xl">
            Fragments become a finished app — <span className="text-gradient">every single semester.</span>
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section id="story" ref={wrapRef} className="relative h-[280vh] sm:h-[420vh]">
      <div className="sticky top-0 flex h-dvh flex-col items-center justify-center overflow-hidden bg-warm">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 dot-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden role="presentation" />

        {/* film-style HUD chrome */}
        <div className="pointer-events-none absolute inset-x-0 top-24 flex items-center justify-between px-6 sm:px-10">
          <span className="liquid rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70">
            Swift Coding Club · Reel
          </span>
          <span ref={sceneRef} className="liquid rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70">
            Scene 01 · Fragments
          </span>
        </div>

        {/* captions */}
        <div className="pointer-events-none relative z-10 mx-auto max-w-2xl px-6 text-center">
          {CAPTIONS.map((c, i) => (
            <div
              key={c.t}
              ref={(el) => { captionRefs.current[i] = el; }}
              className="absolute inset-x-0 transition-opacity"
              style={{ opacity: 0 }}
            >
              <h3 className="display text-balance text-3xl sm:text-5xl">{c.t}</h3>
            </div>
          ))}
        </div>

        {/* bottom timeline / scrubber chrome */}
        <div className="pointer-events-none absolute inset-x-0 bottom-10 px-6 sm:px-10">
          <div className="liquid mx-auto flex max-w-lg items-center gap-3 rounded-full px-4 py-2.5">
            <span ref={timecodeRef} className="font-mono text-[11px] tabular-nums text-ink/70">00:00:00</span>
            <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-ink/10">
              <div ref={barRef} className="gpu absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gradient-to-r from-swift to-swift-soft" style={{ transform: "scaleX(0)" }} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
