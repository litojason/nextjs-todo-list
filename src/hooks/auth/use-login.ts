import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { LoginFormData, loginFormResolver } from "@/models/user";

export default function useLogin() {
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: loginFormResolver,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return;
    }

    router.replace("/todo");
  };

  return { form, onSubmit };
}
