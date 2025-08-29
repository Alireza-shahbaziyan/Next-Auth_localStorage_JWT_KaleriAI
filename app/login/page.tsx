import AuthLayout from "@/components/layouts/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { redirectedFrom?: string };
}) {
  return (
    <AuthLayout>
      <LoginForm redirectedFrom={searchParams?.redirectedFrom ?? null} />
    </AuthLayout>
  );
}
