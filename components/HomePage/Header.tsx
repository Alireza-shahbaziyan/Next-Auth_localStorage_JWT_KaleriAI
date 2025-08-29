"use client";
import ThemeToggle from "@/components/HomePage/ThemeToggle";

export default function Header() {
	return (
		<header className="fixed inset-x-0 top-0 z-40">
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
				<div className="text-lg font-semibold">KaleriAI</div>
				<nav className="hidden items-center gap-6 text-sm text-gray-200 md:flex">
					<a href="#how-it-works" className="hover:text-white">
						How it works
					</a>
					<a href="#pricing" className="hover:text-white">
						Pricing
					</a>
					<a href="#faq" className="hover:text-white">
						FAQ
					</a>
				</nav>
				<ThemeToggle />
			</div>
		</header>
	);
}
