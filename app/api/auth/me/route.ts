import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/token";
import { users } from "@/lib/db";

export async function GET(req: Request) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token) return NextResponse.json({ message: "No token" }, { status: 401 });

  try {
    const payload = await verifyToken(token);
    const phone = payload.phone as string; // from JWT: signToken({ sub, phone, ... })
    if (!phone) return NextResponse.json({ message: "Invalid token" }, { status: 401 });

    const user = users.get(phone);
    if (!user) return NextResponse.json({ message: "Not found" }, { status: 404 });

    return NextResponse.json({
      user: { id: user.id, phone: user.phone, name: user.name ?? null },
    });
  } catch {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
