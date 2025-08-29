"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { router.replace("/login"); return; }

    fetch("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(() => setOk(true))
      .catch(() => {
        localStorage.removeItem("token");
        router.replace("/login");
      });
  }, [router]);

  if (!ok) return null; // یا Spinner
  return <>{children}</>;
}
