"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	CheckCircle2,
	UtensilsCrossed,
	BarChart3,
	BellRing,
	Sparkle,
} from "lucide-react";

const features = [
	{
		icon: UtensilsCrossed,
		title: "Photo → Calories",
		desc: "Snap a meal to estimate calories and portion sizes.",
	},
	{
		icon: BarChart3,
		title: "Macros & Trends",
		desc: "Track protein, carbs, fat; visualize weekly trends.",
	},
	{
		icon: BellRing,
		title: "Smart Reminders",
		desc: "Stay on track with gentle nudge notifications.",
	},
	{
		icon: CheckCircle2,
		title: "Diet Suggestions",
		desc: "Personalized meal ideas based on your goals.",
	},
	{
		icon: Sparkle,
		title: "AI Corrections",
		desc: "Fix results with natural language input.",
	},
];

export default function Features() {
	return (
		<section className="mx-auto max-w-7xl px-6 pb-10 pt-6">
			<div className="mb-8 text-center">
				<h3 className="text-3xl font-semibold md:text-4xl">
					Why people love KaleriAI
				</h3>
				<p className="mt-2 text-gray-300">
					Big visuals. Simple actions. Real results.
				</p>
			</div>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{features.map((f, i) => (
					<motion.div
						key={f.title}
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.45, delay: i * 0.06 }}>
						<Card className="border-white/10 bg-white/5 backdrop-blur">
							<CardHeader>
								<div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/15">
									<f.icon className="h-6 w-6 text-cyan-300" />
								</div>
								<CardTitle>{f.title}</CardTitle>
							</CardHeader>
							<CardContent className="text-gray-300">
								{f.desc}
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	);
}
