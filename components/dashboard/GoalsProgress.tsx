
"use client";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

export default function GoalsProgress() {
  return (
    <Card className="border-white/10 dark:bg-white/5">
      <CardContent className="p-6">
        <h3 className="mb-4 text-lg font-semibold">Goals Progress</h3>
        <p className="text-sm text-gray-300">Weight Loss</p>
        <Progress value={65} className="mb-3 h-3" />
        <p className="text-sm text-gray-300">Protein Intake</p>
        <Progress value={80} className="mb-3 h-3" />
        <p className="text-sm text-gray-300">Daily Steps</p>
        <Progress value={55} className="h-3" />
      </CardContent>
    </Card>
  );
}
