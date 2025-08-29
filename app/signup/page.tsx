
import SignUpForm from "@/components/auth/SignUpForm";
import AuthLayout from "@/components/layouts/AuthLayout";


export default function Signup() {
    return (
        <AuthLayout>
          <SignUpForm />
        </AuthLayout>
      );
}
