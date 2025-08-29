
"use client";
import { Home, BarChart3, Settings, LogOut } from "lucide-react";

const items = [
  { icon: Home, label: "Dashboard" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col border-r border-white/10 dark:bg-white/5 p-4 md:flex">
      <h2 className="mb-8 text-xl font-bold">KaleriAI</h2>
      <nav className="flex flex-1 flex-col gap-3">
        {items.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-300 hover:bg-white/10"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </a>
        ))}
      </nav>
      <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-300 hover:bg-white/10">
        <LogOut className="h-5 w-5" /> Logout
      </button>
    </aside>
  );
}
