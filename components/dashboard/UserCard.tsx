
"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function UserCard() {
  return (
    <Card className="border-white/10 dark:bg-white/5 ">
      <CardContent className="flex items-center gap-6 p-6">
        <Image
          src="https://avatar.iran.liara.run/public"
          alt="User"
          width={80}
          height={80}
          className="h-20 w-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">Sarah Connor</h2>
          <p className="text-sm text-indigo-400">my kung fu is stronger than yours</p>
        </div>
      </CardContent>
    </Card>
  );
}
