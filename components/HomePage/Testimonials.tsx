"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const items = [
	{
		name: "Sarah",
		quote: "It’s wild. A single photo gives me calories and macros. I finally stay consistent!",
		avatar: "https://avatar.iran.liara.run/public/girl",
	},
	{
		name: "Omid",
		quote: "The AI corrections are clutch for soups and stews. Accuracy keeps getting better.",
		avatar: "https://avatar.iran.liara.run/public/boy",
	},
	{
		name: "Lina",
		quote: "Trends and reminders helped me lose 4kg in 6 weeks.",
		avatar: "https://avatar.iran.liara.run/public/girl",
	},
];

export default function Testimonials() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-20">
			<div className="mb-10 text-center">
				<h3 className="text-3xl font-semibold md:text-4xl">
					Loved by busy humans
				</h3>
				<p className="mt-2 text-gray-300">
					Real stories. Real progress.
				</p>
			</div>
			<div className="grid gap-6 md:grid-cols-3">
				{items.map((t, i) => (
					<motion.div
						key={t.name}
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.45, delay: i * 0.08 }}>
						<Card className="border-white/10 bg-white/5 min-h-36  p-6 text-left backdrop-blur">
							<CardContent className="flex items-center gap-4 p-0">
								<Image
									src={t.avatar}
									alt={t.name}
									width={56}
									height={56}
									className="h-14 w-14 rounded-full object-cover"
								/>
								<div>
									<p className="text-gray-200">“{t.quote}”</p>
									<p className="mt-2 text-sm text-gray-400 font-bold">
										{t.name}
									</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	);
}
