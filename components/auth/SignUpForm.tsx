"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import type{ PhoneSignupForm } from "@/types/Form";

export default function PhoneSignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<PhoneSignupForm>();

  const pwd = watch("password");

  const onSubmit = async (data: PhoneSignupForm) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: data.phone,
        password: data.password,
      }),
    });
    const j = await res.json();

    if (!res.ok) {
      setError("root", { message: j.message || "Signup failed" });
      return;
    }

    router.replace("/login");
  };

  return (
    <div className="bg-gray-900/90 rounded-2xl shadow-lg p-10 w-full max-w-md min-w-60">
      <h2 className="text-3xl font-bold text-indigo-400 text-center mb-6">
        Sign Up with Phone
      </h2>

      {errors.root?.message && (
        <p className="text-red-500 text-sm mb-2">{errors.root.message}</p>
      )}
<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
  <div>
    <label htmlFor="phone" className="block text-sm text-white mb-1">Phone</label>
    <input
      id="phone"                 // ✅ matches htmlFor
      type="tel"
      className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
      placeholder="09..."
      autoComplete="tel"
      {...register("phone", {
        required: "Phone is required",
        pattern: {
          value: /^(?:\+98|0098|0)?9\d{9}$/,
          message: "Invalid Iranian phone number",
        },
      })}
    />
    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
  </div>

  <div>
    <label htmlFor="password" className="block text-sm text-white mb-1">Password</label>
    <input
      id="password"              // ✅ lower-case; must match label
      type="password"
      className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
      autoComplete="new-password"
      {...register("password", {
        required: "Password is required",
        minLength: { value: 6, message: "Min 6 chars" },
      })}
    />
    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
  </div>

  <div>
    <label htmlFor="confirmPassword" className="block text-sm text-white mb-1">Confirm Password</label>
    <input
      id="confirmPassword"       // ✅ matches htmlFor
      type="password"
      className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
      autoComplete="new-password"
      {...register("confirmPassword", {
        required: "Please confirm your password",
        validate: (v) => v === pwd || "Passwords do not match",
      })}
    />
    {errors.confirmPassword && (
      <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
    )}
  </div>

  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full py-2 bg-indigo-400 text-black font-semibold rounded-lg hover:bg-indigo-500 disabled:opacity-60"
  >
    {isSubmitting ? "Please wait..." : "Sign Up"}
  </button>
</form>

      <p className="text-sm text-gray-400 mt-4 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-indigo-400 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
}



