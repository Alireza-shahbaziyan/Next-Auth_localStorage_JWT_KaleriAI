"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ day: "Mon", kcal: 1500 },
	{ day: "Tue", kcal: 1700 },
	{ day: "Wed", kcal: 1800 },
	{ day: "Thu", kcal: 600 },
	{ day: "Fri", kcal: 2000 },
	{ day: "Sat", kcal: 900 },
	{ day: "Sun", kcal: 1750 },
	{ day: "Mon", kcal: 500 },
	{ day: "Tue", kcal: 2700 },
	{ day: "Wed", kcal: 1800 },
	{ day: "Thu", kcal: 1600 },
	{ day: "Fri", kcal: 1300 },
	{ day: "Sat", kcal: 1100 },
	{ day: "Sun", kcal: 1900 },
];

export default function ActivityChart() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	if (!mounted)
		return (
			<div className="h-64 rounded-xl border border-white/10 bg-white/5" />
		);

	return (
		<Card className="border-white/10 dark:bg-white/5">
			<CardContent className="p-6">
				<h3 className="mb-4 text-lg font-semibold">
					Weekly Calorie Intake
				</h3>
				<ResponsiveContainer width="100%" height={250}>
					<LineChart data={data}>
						<XAxis dataKey="day" stroke="#aaa" />
						<YAxis stroke="#aaa" />
						<Tooltip />
						<Line
							type="monotone"
							dataKey="kcal"
							stroke="#10b981"
							strokeWidth={6}
							dot={true}
						/>
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
}
