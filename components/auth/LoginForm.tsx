"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";            // ⬅️ remove useSearchParams
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";
import { FormPhone } from "@/types/Form";
import IR_PHONE from "@/utils/PhoneRegex";

type Props = { redirectedFrom?: string | null };

const LoginForm: React.FC<Props> = ({ redirectedFrom = null }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<FormPhone>();

  const router = useRouter();
  const [unregisteredMsg, setUnregisteredMsg] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormPhone> = async (data) => {
    setUnregisteredMsg(null);
    clearErrors("root");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: data.phone, password: data.password }),
    });

    const j = await res.json().catch(() => ({}));

    if (!res.ok) {
      if (res.status === 404) setUnregisteredMsg("No account for this phone. Please sign up.");
      else setError("root", { message: j.message || "Login failed" });
      return;
    }

    localStorage.setItem("token", j.token);
    router.replace(redirectedFrom || "/dashboard");     // ⬅️ use prop
  };

  return (
    <div className="bg-gray-900/90 rounded-2xl shadow-lg p-10 w-full max-w-md min-w-60">
      <h2 className="text-3xl font-bold text-indigo-400 text-center mb-6">Login</h2>

      {unregisteredMsg && (
        <Alert variant="destructive" className="mb-4">
          <CircleAlert className="h-4 w-4" />
          <AlertTitle>User not found</AlertTitle>
          <AlertDescription>{unregisteredMsg}</AlertDescription>
        </Alert>
      )}

      {errors.root?.message && (
        <p className="text-red-500 text-sm mb-2">{errors.root.message}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="phone" className="block text-sm text-white mb-1">Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="+989..."
            className="w-full min-w-44 px-4 py-2 rounded-lg bg-gray-800 text-white"
            aria-invalid={!!errors.phone}
            {...register("phone", {
              required: "Phone is required",
              pattern: { value: IR_PHONE, message: "Invalid Iranian phone number" },
            })}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm text-white mb-1">Password</label>
          <input
            id="password"
            type="password"
            className="w-full min-w-44 px-4 py-2 rounded-lg bg-gray-800 text-white"
            aria-invalid={!!errors.password}
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 bg-indigo-400 text-black font-semibold rounded-lg hover:bg-indigo-500"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-4 text-center">
        Don&apos;t have an account?{" "}
        <a href="/signup" className="text-indigo-400 hover:underline">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginForm;
