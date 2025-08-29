"use client";
import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  depth: number;
  size: number;
  vx: number;
  vy: number;
  tw: number;
};

export default function Starfield({
  density = 0.00025,
  maxSize = 2.2,
  parallax = 35,       
  speed = 12,          
  className = "",
}: {
  density?: number;
  maxSize?: number;
  parallax?: number;
  speed?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let stars: Star[] = [];
    let width = 0, height = 0, dpr = 1;
    let mouseX = 0, mouseY = 0;        // -1..1
    let viewParallaxX = 0, viewParallaxY = 0;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    function resize() {
      const { clientWidth, clientHeight } = canvas.parentElement!;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = clientWidth;
      height = clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // تعداد ستاره‌ها بر اساس مساحت
      const target = Math.max(60, Math.floor(width * height * density));
      stars = new Array(target).fill(0).map<Star>(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        depth: Math.random(),                        // 0 نزدیک، 1 دور
        size: rand(0.6, maxSize),
        vx: rand(-1, 1),
        vy: rand(-1, 1),
        tw: Math.random() * Math.PI * 2,
      }));
    }

    function onMouse(e: MouseEvent) {
      const r = canvas.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width;   // 0..1
      const ny = (e.clientY - r.top) / r.height;   // 0..1
      mouseX = nx * 2 - 1;                         // -1..1
      mouseY = ny * 2 - 1;
    }

    function tick() {
      // نرم‌کردن پارالاکس
      viewParallaxX = lerp(viewParallaxX, mouseX * parallax, 0.06);
      viewParallaxY = lerp(viewParallaxY, mouseY * parallax, 0.06);

      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        // حرکت آرام با توجه به عمق
        const k = lerp(1.4, 0.35, s.depth); // نزدیک‌ها سریع‌تر
        s.x += (s.vx * speed * 0.01) * k;
        s.y += (s.vy * speed * 0.01) * k;

        // پیچیدن از لبه‌ها (wrap)
        if (s.x < -20) s.x = width + 20;
        if (s.x > width + 20) s.x = -20;
        if (s.y < -20) s.y = height + 20;
        if (s.y > height + 20) s.y = -20;

        // چشمک‌زدن ملایم
        s.tw += 0.03 + s.depth * 0.02;
        const twinkle = 0.65 + Math.sin(s.tw) * 0.25; // 0.4..0.9

        // پارالاکس: دورترها کمتر جابه‌جا می‌شوند
        const px = viewParallaxX * (1 - s.depth);
        const py = viewParallaxY * (1 - s.depth);

        ctx.globalAlpha = twinkle;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(s.x + px, s.y + py, Math.max(0.4, s.size * (1 - s.depth * 0.6)), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [density, maxSize, parallax, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
}
