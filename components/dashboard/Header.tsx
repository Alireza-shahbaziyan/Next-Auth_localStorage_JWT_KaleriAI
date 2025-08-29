
"use client";
import ThemeToggle from "@/components/HomePage/ThemeToggle";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 dark:bg-white/5 px-6 py-3 backdrop-blur">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Image
          src="https://avatar.iran.liara.run/public"
          alt="User avatar"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
}
