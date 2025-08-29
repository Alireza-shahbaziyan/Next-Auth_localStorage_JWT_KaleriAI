"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";


export default function ThemeToggle() {
const { theme, setTheme } = useTheme();
const isDark = theme === "dark";
return (
<Button
variant="outline" // Ensure the Button component supports this prop
size="icon"
aria-label="Toggle theme"
onClick={() => setTheme(isDark ? "light" : "dark")}
className="border-white/20 bg-white/5 text-white"
>
{isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
</Button>
);
}