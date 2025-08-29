import { NextResponse } from "next/server";
import { users, User } from "@/lib/db";
import bcrypt from "bcryptjs";

// فقط +98 / 0098 / 0 قبل از 9 مجاز است (بدون حالت bare 9)
const IR_PHONE = /^(?:\+98|0098|0)9\d{9}$/;

function normalizeIranPhone(input: string): string | null {
  if (!input) return null;
  let p = input.replace(/\s|-/g, "");
  if (!IR_PHONE.test(p)) return null;

  // 0098... -> +98...
  if (p.startsWith("0098")) p = `+98${p.slice(4)}`;
  // 0 9xxxxxxxxx -> +98 9xxxxxxxxx
  else if (p.startsWith("0")) p = `+98${p.slice(1)}`;
  // +98 already OK

  return p; // شکل استاندارد نهایی: +989xxxxxxxxx
}

export async function POST(req: Request) {
  try {
    const { phone, password, name } = await req.json();

    const normalized = normalizeIranPhone(phone);
    if (!normalized) {
      return NextResponse.json(
        { message: "Invalid Iranian phone number" },
        { status: 400 }
      );
    }

    if (!password || String(password).length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    if (users.has(normalized)) {
      return NextResponse.json(
        { message: "Phone already exists" },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const u: User = {
      id: crypto.randomUUID(),
      phone: normalized,
      name,
      passwordHash,
    };

    users.set(normalized, u);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }
}
