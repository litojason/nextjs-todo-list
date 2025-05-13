import { Metadata } from "next";
import Link from "next/link";

import RegisterForm from "@/components/form/register-form";

export const metadata: Metadata = {
  title: "Register",
  description: "Create new account to start.",
};

export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="flex flex-col w-full md:w-lg lg:w-xl p-4 gap-4">
        <div>
          <h1 className="text-4xl">Register</h1>
          <p>Create new account</p>
        </div>

        <RegisterForm />

        <span>
          Already have an account?{" "}
          <Link href="/login" replace className="text-primary">
            Login
          </Link>
        </span>
      </div>
    </main>
  );
}
