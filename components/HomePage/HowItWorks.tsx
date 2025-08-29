"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Scan, Ruler } from "lucide-react";

const steps = [
	{
		icon: Ruler,
		title: "Depth → Volume",
		desc: "Your phone’s depth sensor estimates your food volume.",
	},
	{
		icon: Layers,
		title: "AI Segmentation",
		desc: "Our model splits the meal into parts and proportions.",
	},
	{
		icon: Scan,
		title: "Macros + Calories",
		desc: "A multi‑modal model finalizes calories, protein, carbs, and fat.",
	},
];

export default function HowItWorks() {
	return (
		<section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
			<div className="mb-10 text-center">
				<h2 className="text-3xl font-semibold md:text-4xl">
					How does KaleriAI work?
				</h2>
				<p className="mt-2 text-gray-300">
					When you take a photo, a lot happens behind the scenes.
				</p>
			</div>
			<div className="grid gap-6 md:grid-cols-3">
				{steps.map((s, i) => (
					<motion.div
						key={s.title}
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.45, delay: i * 0.1 }}>
						<Card className="border-white/10 bg-white/5 backdrop-blur">
							<CardHeader>
								<div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/15">
									<s.icon className="h-6 w-6 text-emerald-300" />
								</div>
								<CardTitle>{s.title}</CardTitle>
							</CardHeader>
							<CardContent className="text-gray-300">
								{s.desc}
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	);
}
