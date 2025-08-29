"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
	return (
		<main className="relative flex min-h-dvh items-center justify-center bg-gradient-to-br from-gray-950 via-gray-800 to-indigo-900 text-white ">
			{/* Glow background */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/40 blur-3xl" />
				<div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-emerald-500/30 blur-3xl" />
			</div>

			<motion.div
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className=" w-full text-center">

				<h1 className=" mt-3  text-white md:text-5xl font-roboto font-bold">
                Consider this your trial task — find the missing page.😉
				</h1>

				<div className="mt-7 flex items-center justify-center gap-3">
					<Button
						asChild
						className="bg-emerald-500 text-black hover:bg-emerald-400">
						<Link href="/">
							<Home className="mr-2 h-5 w-5" /> Home
						</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						className="border-white/20 bg-white/5 text-white hover:bg-white/15">
						<Link href="/pizza">Pizza 🍕</Link>
					</Button>
				</div>

				<p className="mt-4 text-xs text-white/60">Error code: 404</p>
				<p className="mt-20 text-gray-400 ">Built with love… and a lot of coffee. ☕</p>
			</motion.div>
		</main>
	);
}
