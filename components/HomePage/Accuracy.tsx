"use client";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Info, Wand2 } from "lucide-react";

export default function Accuracy() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-16">
			<div className="grid items-center gap-10 md:grid-cols-2">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					<h3 className="text-3xl font-semibold md:text-4xl">
						How accurate is KaleriAI?
					</h3>
					<p className="mt-3 text-gray-300">
						About 90% from photos. Soups and smoothies are harder
						due to hidden ingredients. Use{" "}
						<span className="font-medium text-emerald-300">
							Correct with AI
						</span>{" "}
						to type details and click{" "}
						<span className="font-medium text-emerald-300">
							Correct Results
						</span>{" "}
						when something looks off.
					</p>
					<div className="mt-6">
						<div className="mb-2 flex items-center gap-2 text-sm">
							<Info className="h-4 w-4" /> Estimated photo
							accuracy
						</div>
						<Progress value={90} className="h-3" />
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.05 }}
					className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
					<div className="mb-4 inline-flex items-center gap-2">
						<Wand2 className="h-5 w-5 text-emerald-300" />
						<span className="text-sm text-gray-300">AI Assist</span>
					</div>
					<ul className="list-inside list-disc text-gray-200">
						<li>Type exactly what you ate to refine estimates.</li>
						<li>Explain mistakes with “Correct Results”.</li>
						<li>Your feedback helps KaleriAI improve.</li>
					</ul>
				</motion.div>
			</div>
		</section>
	);
}
