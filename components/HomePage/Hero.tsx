"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import hero from '@/public/img/hero.webp'
import { Camera, Sparkles, ShieldCheck } from "lucide-react";

export default function Hero() {
	return (
		<section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-2 pt-28 text-center">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="flex flex-col items-center gap-6">
				<Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30">
					<Sparkles className="mr-1 h-4 w-4" />
					Track calories from a photo
				</Badge>
				<h1 className="text-balance text-4xl font-oswald leading-tight md:text-6xl lg:text-9xl  font-black">
					Meet{" "}
					<span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
						Kaleri AI
					</span>
				</h1>
				<p className="text-pretty max-w-2xl text-base text-gray-400 md:text-xl">
					Just snap your meal. We estimate calories and macros, then
					suggest a personalized plan.
				</p>
				<div className="flex flex-wrap items-center justify-center gap-3">
					<Button size="lg" className="h-12 px-6 text-base">
						<Camera className="mr-2 h-5 w-5" /> Try it now
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="h-12 border-white/20 bg-white/5 px-6 text-base text-white">
						<ShieldCheck className="mr-2 h-5 w-5" /> See how it
						works
					</Button>
				</div>
				<motion.div
					initial={{ opacity: 0, scale: 0.98 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="relative  w-full max-w-4xl">
					<Image
						src={hero}
						alt="AI calorie scan demo"
						width={1600}
						height={900}
						priority
						className=" rounded-xl object-cover object-center"
					/>
				</motion.div>
			</motion.div>
		</section>
	);
}
