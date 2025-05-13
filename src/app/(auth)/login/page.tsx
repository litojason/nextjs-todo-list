import { Metadata } from "next";
import Link from "next/link";

import LoginForm from "@/components/form/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to start managing Todo",
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="flex flex-col w-full md:w-lg lg:w-xl p-4 gap-4">
        <div>
          <h1 className="text-4xl">Welcome!</h1>
          <p>Login to start managing Todo</p>
        </div>

        <LoginForm />

        <span>
          Don&apos;t have an account?{" "}
          <Link href="/register" replace className="text-primary">
            Register
          </Link>
        </span>
      </div>
    </main>
  );
}
