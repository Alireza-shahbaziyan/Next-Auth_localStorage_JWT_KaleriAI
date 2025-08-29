import Hero from "@/components/HomePage/Hero";
import HowItWorks from "@/components/HomePage/HowItWorks";
import Accuracy from "@/components/HomePage/Accuracy";
import Features from "@/components/HomePage/Features";
import CTA from "@/components/HomePage/CTA";
import Testimonials from "@/components/HomePage/Testimonials";
import ParallaxBG from "@/components/HomePage/ParallaxBG";
import FAQ from "@/components/HomePage/FAQ";
import Navbar from "@/components/Navbar/Navbar";


export default function Page() {
	const faq = [
		{
			question: "How does KaleriAI work?",
			answer: "Your phone’s depth sensor estimates your food’s volume. Our AI, trained on thousands of food images, segments the meal into parts and proportions. Then a multi‑modal model finalizes calories and macros (protein, carbs, fat).",
		},
		{
			question: "How accurate is KaleriAI?",
			answer: "About 90% accurate from photos. Foods with hidden ingredients (soups, smoothies) are harder. Use ‘Correct with AI’ to type what you ate; you can also click ‘Correct Results’ to explain issues. This improves our system over time.",
		},
	];

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faq.map((f) => ({
			"@type": "Question",
			name: f.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: f.answer,
			},
		})),
	} as const;

	return (
		<main className="relative min-h-screen overflow-hidden bg-gradient-to-br  dark:from-gray-950 dark:via-gray-800 dark:to-indigo-900 text-white dark:text-white">
			<Navbar />
			<ParallaxBG />
			{/* JSON-LD for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<Hero />
			<HowItWorks />
			<Accuracy />
			<Features />
			<Testimonials />
			<FAQ items={faq} />
			<CTA />
			<div className="w-full text-center py-2 font-roboto font-bold">
				Made with love (and a few bugs).❤️
			</div>
		</main>
	);
}
