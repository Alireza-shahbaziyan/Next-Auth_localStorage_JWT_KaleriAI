"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

type QA = { question: string; answer: string };
export default function FAQ({ items }: { items: QA[] }) {
	return (
		<section className="mx-auto max-w-3xl px-6 py-12">
			<h3 className="mb-4 text-center text-3xl font-semibold md:text-4xl">
				FAQ
			</h3>
			<Accordion type="single" collapsible className="w-full">
				{items.map((x, idx) => (
					<AccordionItem value={`item-${idx}`} key={idx}>
						<AccordionTrigger>{x.question}</AccordionTrigger>
						<AccordionContent>{x.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
}
