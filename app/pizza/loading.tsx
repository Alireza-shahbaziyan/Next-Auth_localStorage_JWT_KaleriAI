"use client";
import { useEffect, useState } from "react";

const lines = [
  "پیش‌گرم کردن فر…",
  "چیدن پپرونی‌ها با دقت مهندسی 🧪",
  "افزودن پنیر اضافه (قول می‌دم آخرین باره!) 🧀",
  "چرخوندن پیتزا برای سوزاندن کالری (شوخی بود!) 😂",
  "محاسبهٔ کالری… شاید بعداً 😅",
  "یافتن بزرگ‌ترین برش… 🔎",
];

export default function Loading() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % lines.length), 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-[70vh] grid place-items-center">
      <div className="flex flex-col items-center gap-6" role="status" aria-live="polite">
        <div className="relative">
          <div className="h-28 w-28 rounded-full border-4 border-indigo-400/40 border-t-indigo-400 animate-spin" />
          <div className="absolute inset-0 grid place-items-center text-5xl animate-pulse">🍕</div>
        </div>
        <p className="text-center text-sm text-white/80">{lines[i]}</p>
      </div>
    </div>
  );
}
