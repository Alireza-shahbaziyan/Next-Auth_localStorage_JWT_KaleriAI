"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeToggle() {

	const { theme, setTheme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	const current = theme === "system" ? systemTheme : theme;
	if (!mounted) return null;
	return (
		<Button
			variant="outline"
			size="icon"
			aria-label="Toggle theme"
			className="border-white/20 bg-white/5 text-white hover:bg-white/10"
			onClick={() => setTheme(current === "dark" ? "light" : "dark")}>
			{current === "dark" ? (
				<Sun className="h-5 w-5" />
			) : (
				<Moon className="h-5 w-5" />
			)}
		</Button>
	);
}

const links = [
	{ href: "#how-it-works", label: "How it works" },
	{ href: "#features", label: "Features" },
	{ href: "#faq", label: "FAQ" },
];

export default function Navbar() {
	return (
		<motion.header
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.45 }}
			className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10">
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
				{/* Logo */}
				<Link href="/" className="text-lg font-semibold text-white">
					<span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
						KaleriAI
					</span>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden items-center gap-6 md:flex">
					{links.map((l) => (
						<a
							key={l.href}
							href={l.href}
							onClick={() => open("Features")}
							className="text-sm text-gray-200 transition-colors hover:text-white">
							{l.label}
						</a>
					))}
				</nav>

				{/* Right actions */}
				<div className="hidden items-center gap-2 md:flex">
					<ThemeToggle />
					<Button
						asChild
						variant="outline"
						className="flex-1 border-white/20 bg-white/5 text-white hover:bg-white/15">
						<Link href="/pizza">pizza🍕</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						className="border-white/20 bg-white/5 text-white hover:bg-white/15">
						<Link href="/login">Login</Link>
					</Button>
					<Button
						asChild
						className="bg-emerald-500 text-black hover:bg-emerald-400">
						<Link href="/signup">Sign up</Link>
					</Button>
				</div>

				{/* Mobile */}
				<div className="flex items-center gap-2 md:hidden">
					<ThemeToggle />
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="border-white/20 bg-white/5 text-white">
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="bg-gradient-to-br from-gray-950 via-gray-800 to-indigo-900 text-white">
							<div className="mt-8 flex flex-col gap-4">
								{links.map((l) => (
									<a
										key={l.href}
										href={l.href}
										className="text-base text-gray-200 hover:text-white">
										{l.label}
									</a>
								))}
								<div className="mt-4 flex gap-2">
									<Button
										asChild
										variant="outline"
										className="flex-1 border-white/20 bg-white/5 text-white hover:bg-white/15">
										<Link href="/pizza">pizza🍕</Link>
									</Button>
									<Button
										asChild
										variant="outline"
										className="flex-1 border-white/20 bg-white/5 text-white hover:bg-white/15">
										<Link href="/login">Login</Link>
									</Button>
									<Button
										asChild
										className="flex-1 bg-emerald-500 text-black hover:bg-emerald-400">
										<Link href="/signup">Sign up</Link>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</motion.header>
	);
}
