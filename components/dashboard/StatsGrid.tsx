
"use client";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Calories Today", value: "1,560 kcal" },
  { label: "Protein", value: "85 g" },
  { label: "Carbs", value: "200 g" },
  { label: "Fat", value: "55 g" },
];

export default function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      {stats.map((s) => (
        <Card key={s.label} className="border-white/10 dark:bg-white/5 text-center">
          <CardContent className="p-6">
            <p className="text-sm text-gray-400">{s.label}</p>
            <p className="mt-2 text-2xl font-bold">{s.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
