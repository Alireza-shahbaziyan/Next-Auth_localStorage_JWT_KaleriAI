"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function CTA() {
	return (
		<section className="relative mx-auto mb-24 max-w-5xl px-6">
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="rounded-3xl border border-white/10 bg-gradient-to-br
                 from-white/10 to-white/5 p-10 text-center backdrop-blur">
				<h3 className="text-balance text-3xl font-semibold md:text-4xl">
					Try KaleriAI today
				</h3>
				<p className="mx-auto mt-2 max-w-2xl text-gray-200">
					Control your calorie intake just by taking a photo.
				</p>
				<div className="mt-6 flex justify-center">
					<Button className="h-12 px-6 text-base">
						<Camera className="mr-2 h-5 w-5" /> Get Started Free
					</Button>
				</div>
			</motion.div>
		</section>
	);
}
