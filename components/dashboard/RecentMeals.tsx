
"use client";
import { Card, CardContent } from "@/components/ui/card";

const meals = [
  { name: "Grilled Chicken", kcal: 450 },
  { name: "Avocado Toast", kcal: 320 },
  { name: "Quinoa Salad", kcal: 500 },
];

export default function RecentMeals() {
  return (
    <Card className="border-white/10 dark:bg-white/5">
      <CardContent className="p-6">
        <h3 className="mb-4 text-lg font-semibold">Recent Meals</h3>
        <ul className="space-y-2">
          {meals.map((m) => (
            <li key={m.name} className="flex justify-between text-sm">
              <span>{m.name}</span>
              <span className="text-gray-300">{m.kcal} kcal</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
