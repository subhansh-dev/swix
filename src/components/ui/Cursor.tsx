import { useEffect, useRef, useState, useCallback } from "react";
import { useCanHover, useReducedMotion } from "@/hooks/useMedia";

const TRAIL_COUNT = 30;
const ORBIT_DOTS = 8;
const SPARKLE_COUNT = 14;
const BLUR_LAYERS = 5;

export function Cursor() {
  const canHover = useCanHover();
  const reduce = useReducedMotion();
  const enabled = canHover && !reduce;

  const blob = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const trailPathRef = useRef<SVGPathElement>(null);
  const trailGlowRef = useRef<SVGPathElement>(null);
  const trailWideRef = useRef<SVGPathElement>(null);
  const orbitRefs = useRef<(SVGCircleElement | null)[]>([]);
  const ringRefs = useRef<(SVGCircleElement | null)[]>([]);
  const blurRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sparklesRef = useRef<(HTMLDivElement | null)[]>([]);
  const target = useRef({ x: -100, y: -100 });
  const blobPos = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -100, y: -100 });
  const trailPositions = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }))
  );
  const blurPositions = useRef(
    Array.from({ length: BLUR_LAYERS }, () => ({ x: -100, y: -100 }))
  );
  const sparkleData = useRef(
    Array.from({ length: SPARKLE_COUNT }, () => ({
      x: 0, y: 0, vx: 0, vy: 0, life: 0, active: false,
    }))
  );
  const morphRef = useRef(0);
  const orbitAngle = useRef(0);
  const frameRef = useRef(0);
  const gradAngle = useRef(0);
  const [hot, setHot] = useState(false);
  const [pressed, setPressed] = useState(false);

  const spawnSparkles = useCallback((x: number, y: number, speed: number) => {
    const count = Math.min(Math.floor(speed * 0.5), 4);
    for (let i = 0; i < count; i++) {
      const s = sparkleData.current.find((sp) => !sp.active);
      if (!s) break;
      const a = Math.random() * Math.PI * 2;
      const v = 1 + Math.random() * 2.5;
      s.x = x;
      s.y = y;
      s.vx = Math.cos(a) * v;
      s.vy = Math.sin(a) * v - 0.8;
      s.life = 1;
      s.active = true;
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;

    const loop = () => {
      frameRef.current++;
      const f = frameRef.current;

      const b = blob.current;
      const g = glow.current;
      const svg = svgRef.current;
      const tp = trailPathRef.current;
      const tg = trailGlowRef.current;
      const tw = trailWideRef.current;
      if (!b || !g || !svg || !tp || !tg || !tw) { raf = requestAnimationFrame(loop); return; }

      const dx = target.current.x - blobPos.current.x;
      const dy = target.current.y - blobPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      const stretch = Math.min(speed * 0.012, 0.5);

      // Morphing — multiple frequencies for organic chaos
      morphRef.current += 0.035;
      orbitAngle.current += hot ? 0.05 : 0.025;
      gradAngle.current += 0.8;

      // Positions
      blobPos.current.x += (target.current.x - blobPos.current.x) * 0.18;
      blobPos.current.y += (target.current.y - blobPos.current.y) * 0.18;
      glowPos.current.x += (target.current.x - glowPos.current.x) * 0.035;
      glowPos.current.y += (target.current.y - glowPos.current.y) * 0.035;

      // Blur layers follow — each slower
      for (let i = 0; i < BLUR_LAYERS; i++) {
        const ease = 0.08 - i * 0.013;
        blurPositions.current[i].x += (target.current.x - blurPositions.current[i].x) * Math.max(ease, 0.01);
        blurPositions.current[i].y += (target.current.y - blurPositions.current[i].y) * Math.max(ease, 0.01);
      }

      // Trail follow — snappy so the trail collapses fast when you stop
      for (let i = TRAIL_COUNT - 1; i > 0; i--) {
        const prev = trailPositions.current[i - 1];
        const ease = 0.24 - i * 0.005;
        trailPositions.current[i].x += (prev.x - trailPositions.current[i].x) * Math.max(ease, 0.05);
        trailPositions.current[i].y += (prev.y - trailPositions.current[i].y) * Math.max(ease, 0.05);
      }
      trailPositions.current[0].x += (target.current.x - trailPositions.current[0].x) * 0.3;
      trailPositions.current[0].y += (target.current.y - trailPositions.current[0].y) * 0.3;

      // Build smooth SVG catmull-rom trail (relative to cursor)
      const pts = trailPositions.current;
      const cx = blobPos.current.x;
      const cy = blobPos.current.y;
      let d = `M ${pts[0].x - cx} ${pts[0].y - cy}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[Math.max(i - 1, 0)];
        const p1 = pts[i];
        const p2 = pts[Math.min(i + 1, pts.length - 1)];
        const p3 = pts[Math.min(i + 2, pts.length - 1)];
        const cp1x = (p1.x + (p2.x - p0.x) / 6) - cx;
        const cp1y = (p1.y + (p2.y - p0.y) / 6) - cy;
        const cp2x = (p2.x - (p3.x - p1.x) / 6) - cx;
        const cp2y = (p2.y - (p3.y - p1.y) / 6) - cy;
        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x - cx} ${p2.y - cy}`;
      }
      tp.setAttribute("d", d);
      tg.setAttribute("d", d);
      tw.setAttribute("d", d);

      // Spawn sparkles
      if (speed > 1.5 && f % 2 === 0) {
        spawnSparkles(target.current.x, target.current.y, speed);
      }

      // Update sparkles
      const sel = sparklesRef.current;
      for (let i = 0; i < SPARKLE_COUNT; i++) {
        const s = sparkleData.current[i];
        const el = sel[i];
        if (!s.active || !el) { if (el) el.style.opacity = "0"; continue; }
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.06;
        s.vx *= 0.98;
        s.life -= 0.025;
        if (s.life <= 0) { s.active = false; }
        el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) translate(-50%, -50%) scale(${s.life})`;
        el.style.opacity = String(s.life);
      }

      // ——— RENDER CENTER BLOB ———
      const t = morphRef.current;
      // 8 sine waves for wild organic shape
      const r1 = Math.sin(t * 1.0) * 16;
      const r2 = Math.cos(t * 1.4) * 14;
      const r3 = Math.sin(t * 0.6 + 1) * 18;
      const r4 = Math.cos(t * 1.8 + 2) * 12;
      const r5 = Math.sin(t * 0.9 + 3) * 15;
      const r6 = Math.cos(t * 1.2 + 4) * 13;
      const r7 = Math.sin(t * 2.1 + 5) * 10;
      const r8 = Math.cos(t * 0.7 + 6) * 16;
      const baseSize = hot ? 22 : 16;
      const pressScale = pressed ? 0.6 : 1;
      const blurAmount = Math.min(speed * 0.1, 8);

      // Rotating gradient angle
      const ga = gradAngle.current % 360;

      b.style.transform = `translate3d(${blobPos.current.x}px, ${blobPos.current.y}px, 0) translate(-50%, -50%) scale(${(1 + stretch * 0.7) * pressScale}, ${(1 - stretch * 0.5) * pressScale})`;
      b.style.borderRadius = `${50 + r1}% ${50 - r2}% ${50 + r3}% ${50 - r4}% / ${50 - r5}% ${50 + r6}% ${50 - r7}% ${50 + r8}%`;
      b.style.width = `${baseSize}px`;
      b.style.height = `${baseSize}px`;
      b.style.filter = `blur(${blurAmount}px) saturate(1.8)`;
      b.style.background = hot
        ? `linear-gradient(${ga}deg, #fff 0%, #ffd3bc 30%, #d9cfff 60%, #fff 100%)`
        : `conic-gradient(from ${ga}deg at 50% 50%, #f05138, #ff7a5c, #d9cfff, #b9eccd, #ffd3bc, #f05138)`;

      // ——— RENDER BLUR LAYERS ———
      const bEls = blurRefs.current;
      for (let i = 0; i < BLUR_LAYERS; i++) {
        const el = bEls[i];
        if (!el) continue;
        const p = blurPositions.current[i];
        const prog = (i + 1) / BLUR_LAYERS;
        const sz = (hot ? 55 : 40) + i * 8;
        const bm1 = Math.sin(t * 0.7 + i * 1.5) * 22;
        const bm2 = Math.cos(t * 0.9 + i * 0.8) * 18;
        const bm3 = Math.sin(t * 1.1 + i * 2.2) * 20;
        const bm4 = Math.cos(t * 0.5 + i * 1.7) * 16;
        el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%) scale(${(1 - prog * 0.2) * (1 + stretch * 0.2)}, ${(1 - prog * 0.15)})`;
        el.style.borderRadius = `${50 + bm1}% ${50 - bm2}% ${50 + bm3}% ${50 - bm4}% / ${50 + bm4}% ${50 - bm1}% ${50 + bm2}% ${50 - bm3}%`;
        el.style.width = `${sz}px`;
        el.style.height = `${sz}px`;
        el.style.filter = `blur(${10 + i * 5}px)`;
        el.style.opacity = String((1 - prog * 0.6) * (pressed ? 0.25 : 0.55));
      }

      // ——— RENDER GLOW ———
      const glowSize = hot ? 200 : 140;
      g.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0) translate(-50%, -50%)`;
      g.style.width = `${glowSize}px`;
      g.style.height = `${glowSize}px`;

      // ——— SVG ———
      svg.style.transform = `translate3d(${blobPos.current.x}px, ${blobPos.current.y}px, 0) translate(-50%, -50%)`;

      // Orbit dots
      const oRefs = orbitRefs.current;
      const orbitR = hot ? 38 : 30;
      for (let i = 0; i < ORBIT_DOTS; i++) {
        const el = oRefs[i];
        if (!el) continue;
        const a = orbitAngle.current + (i * Math.PI * 2) / ORBIT_DOTS;
        const wobble = Math.sin(t + i * 2.3) * 4;
        const ox = Math.cos(a) * (orbitR + wobble);
        const oy = Math.sin(a) * (orbitR + wobble);
        el.setAttribute("cx", String(ox));
        el.setAttribute("cy", String(oy));
        const dotOp = 0.25 + Math.sin(t * 2 + i) * 0.2;
        el.setAttribute("opacity", String(pressed ? 0.1 : dotOp));
      }

      // Ring dash offsets
      const rRefs = ringRefs.current;
      for (let i = 0; i < rRefs.length; i++) {
        const el = rRefs[i];
        if (!el) continue;
        const offset = f * (0.3 + i * 0.12) * (i % 2 === 0 ? 1 : -1);
        el.setAttribute("stroke-dashoffset", String(offset));
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    let lastEl: EventTarget | null = null;
    let lastHot = false;
    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (e.target !== lastEl) {
        lastEl = e.target;
        const h = !!(e.target as HTMLElement | null)?.closest(
          "a, button, [data-cursor='hot'], input, textarea, select"
        );
        if (h !== lastHot) { lastHot = h; setHot(h); }
      }
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [enabled, hot, pressed, spawnSparkles]);

  if (!enabled) return null;

  const ringData = [
    { r: 26, sw: 1.2, dash: "8 180", color: "rgba(240,81,56,0.5)", dur: "8s" },
    { r: 30, sw: 0.7, dash: "3 198", color: "rgba(217,207,255,0.4)", dur: "12s" },
    { r: 34, sw: 1.4, dash: "18 172", color: "rgba(240,81,56,0.3)", dur: "5.5s" },
    { r: 38, sw: 0.5, dash: "2 202", color: "rgba(185,236,205,0.35)", dur: "15s" },
    { r: 42, sw: 0.9, dash: "10 190", color: "rgba(255,211,188,0.4)", dur: "10s" },
    { r: 46, sw: 0.6, dash: "5 195", color: "rgba(217,207,255,0.25)", dur: "18s" },
  ];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[70] hidden md:block">
      {/* Ambient glow */}
      <div
        ref={glow}
        className="gpu absolute left-0 top-0 rounded-full"
        style={{
          width: 140, height: 140,
          background: hot
            ? "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(240,81,56,0.1) 30%, rgba(217,207,255,0.06) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(240,81,56,0.14) 0%, rgba(255,122,92,0.08) 25%, rgba(217,207,255,0.05) 45%, transparent 65%)",
          opacity: pressed ? 0.2 : 0.9,
          filter: "blur(10px)",
        }}
      />

      {/* Blur morphing layers */}
      {Array.from({ length: BLUR_LAYERS }).map((_, i) => (
        <div
          key={`blur-${i}`}
          ref={(el) => { blurRefs.current[i] = el; }}
          className="gpu absolute left-0 top-0"
          style={{
            width: 40, height: 40,
            background: `radial-gradient(circle, rgba(240,81,56,${0.35 - i * 0.05}) 0%, rgba(255,122,92,${0.18 - i * 0.03}) 30%, rgba(217,207,255,${0.1 - i * 0.015}) 55%, transparent 70%)`,
            filter: "blur(12px)",
            opacity: 0,
          }}
        />
      ))}

      {/* SVG layer */}
      <svg
        ref={svgRef}
        className="absolute left-0 top-0"
        style={{ width: 240, height: 240, overflow: "visible" }}
        viewBox="-120 -120 240 240"
      >
        <defs>
          <linearGradient id="trail-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={hot ? "#fff" : "#f05138"} stopOpacity="0.95" />
            <stop offset="30%" stopColor="#ff7a5c" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#d9cfff" stopOpacity="0.4" />
            <stop offset="85%" stopColor="#b9eccd" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="trail-wide-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={hot ? "#fff" : "#f05138"} stopOpacity="0.25" />
            <stop offset="40%" stopColor="#d9cfff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="trail-glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={hot ? "#fff" : "#f05138"} stopOpacity="0.5" />
            <stop offset="50%" stopColor="#d9cfff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <filter id="trail-blur"><feGaussianBlur stdDeviation="4" /></filter>
          <filter id="trail-wide-blur"><feGaussianBlur stdDeviation="8" /></filter>
          <filter id="ring-glow"><feGaussianBlur stdDeviation="1.5" /></filter>
        </defs>

        {/* Wide blurred trail ribbon */}
        <path
          ref={trailWideRef}
          fill="none"
          stroke="url(#trail-wide-grad)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#trail-wide-blur)"
          opacity="0.5"
        />

        {/* Medium glow trail */}
        <path
          ref={trailGlowRef}
          fill="none"
          stroke="url(#trail-glow-grad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#trail-blur)"
          opacity="0.7"
        />

        {/* Thin sharp trail */}
        <path
          ref={trailPathRef}
          fill="none"
          stroke="url(#trail-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={pressed ? 0.35 : 0.85}
        />

        {/* Ring arcs */}
        {ringData.map((rd, i) => (
          <circle
            key={`ring-${i}`}
            ref={(el) => { ringRefs.current[i] = el; }}
            cx="0" cy="0" r={hot ? rd.r + 7 : rd.r}
            fill="none"
            stroke={rd.color}
            strokeWidth={rd.sw}
            strokeDasharray={hot ? rd.dash.replace(/\d+/g, (m) => String(Number(m) * 2)) : rd.dash}
            strokeLinecap="round"
            style={{ transition: "r 0.5s, stroke-dasharray 0.5s" }}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={i % 2 === 0 ? "0 0 0" : "360 0 0"}
              to={i % 2 === 0 ? "360 0 0" : "0 0 0"}
              dur={hot ? rd.dur.replace(/[\d.]+/, (m) => String(Math.round(Number(m) * 0.4))) : rd.dur}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Glow ring */}
        <circle
          cx="0" cy="0" r={hot ? 38 : 30}
          fill="none"
          stroke="rgba(240,81,56,0.12)"
          strokeWidth="4"
          filter="url(#ring-glow)"
          opacity={pressed ? 0.15 : 0.45}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 0 0" to="360 0 0"
            dur="22s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Orbit dots */}
        {Array.from({ length: ORBIT_DOTS }).map((_, i) => (
          <circle
            key={`orbit-${i}`}
            ref={(el) => { orbitRefs.current[i] = el; }}
            cx="0" cy="0"
            r={i % 2 === 0 ? 2.5 : 1.5}
            fill={i % 3 === 0 ? "#f05138" : i % 3 === 1 ? "#d9cfff" : "#b9eccd"}
            opacity="0.35"
          />
        ))}
      </svg>

      {/* Center morphing blob */}
      <div
        ref={blob}
        className="gpu absolute left-0 top-0"
        style={{
          width: 16, height: 16,
          background: "conic-gradient(from 0deg, #f05138, #ff7a5c, #d9cfff, #b9eccd, #ffd3bc, #f05138)",
          boxShadow: hot
            ? "0 0 28px rgba(240,81,56,0.7), 0 0 56px rgba(240,81,56,0.3), 0 0 90px rgba(217,207,255,0.15), inset 0 0 10px rgba(255,255,255,0.9)"
            : "0 0 16px rgba(240,81,56,0.6), 0 0 36px rgba(240,81,56,0.25), 0 0 60px rgba(217,207,255,0.1), inset 0 0 8px rgba(255,255,255,0.5)",
        }}
      />

      {/* Sparkle particles */}
      {Array.from({ length: SPARKLE_COUNT }).map((_, i) => (
        <div
          key={`sparkle-${i}`}
          ref={(el) => { sparklesRef.current[i] = el; }}
          className="gpu absolute left-0 top-0 rounded-full"
          style={{
            width: 2.5, height: 2.5,
            background: i % 3 === 0
              ? "radial-gradient(circle, #fff, rgba(240,81,56,0.7), transparent)"
              : i % 3 === 1
              ? "radial-gradient(circle, #f05138, rgba(255,122,92,0.5), transparent)"
              : "radial-gradient(circle, #d9cfff, rgba(185,236,205,0.6), transparent)",
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
