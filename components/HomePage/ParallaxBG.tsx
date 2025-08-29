"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function ParallaxBG() {
	const ref = useRef<HTMLDivElement>(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);

	useEffect(() => {
		const onMove = (e: MouseEvent) => {
			const { innerWidth, innerHeight } = window;
			mx.set((e.clientX / innerWidth - 0.5) * 2);
			my.set((e.clientY / innerHeight - 0.5) * 2);
		};
		window.addEventListener("mousemove", onMove);
		const loop = animate(0, 1, { repeat: Infinity, duration: 20 }); // subtle shimmer timeline to keep GPU warm
		return () => {
			window.removeEventListener("mousemove", onMove);
			loop.stop();
		};
	}, [mx, my]);

	const rotate = useTransform(mx, [-1, 1], [-2, 2]);
	const translateX = useTransform(mx, [-1, 1], ["-2%", "2%"]);
	const translateY = useTransform(my, [-1, 1], ["-2%", "2%"]);

	return (
		<motion.div
			ref={ref}
			aria-hidden
			className="pointer-events-none absolute inset-0 -z-10"
			style={{ rotate }}>
			<motion.div
				className="absolute inset-0 opacity-40"
				style={{ x: translateX, y: translateY }}>
				{/* Glow Orbs */}
				<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-500 blur-3xl" />
				<div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-fuchsia-500 blur-3xl" />
				<div className="absolute top-1/2 left-1/3 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500 blur-3xl opacity-70" />
			</motion.div>
			{/* Grid overlay */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px]" />
		</motion.div>
	);
}
