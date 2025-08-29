
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { users } from "@/lib/db";
import { signToken } from "@/lib/token";
import IR_PHONE from "@/utils/PhoneRegex";


function normalizeIranPhone(input: string): string | null {
  if (!input) return null;
  let p = input.replace(/\s|-/g, "");
  if (!IR_PHONE.test(p)) return null;
  if (p.startsWith("0098")) p = `+98${p.slice(4)}`;
  else if (p.startsWith("0")) p = `+98${p.slice(1)}`;
  return p; // +989xxxxxxxxx
}

export async function POST(req: Request) {
  try {
    const { phone, password } = await req.json();

    const normalized = normalizeIranPhone(phone);
    if (!normalized) {
      return NextResponse.json({ message: "Invalid Iranian phone number" }, { status: 400 });
    }
    if (!password) {
      return NextResponse.json({ message: "Password required" }, { status: 400 });
    }

    const user = users.get(normalized);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 }); // ثبت‌نام نشده
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const token = await signToken({ sub: user.id, phone: user.phone, name: user.name });
    return NextResponse.json({
      token,
      user: { id: user.id, phone: user.phone, name: user.name ?? null },
    });
  } catch {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }
}
