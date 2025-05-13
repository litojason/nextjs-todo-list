import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { RegisterFormData, registerFormResolver } from "@/models/user";

export default function useRegister() {
  const router = useRouter();

  const [registerSuccessVisible, setRegisterSuccessVisible] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: registerFormResolver,
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return;
    }

    setRegisterSuccessVisible(true);
  };

  const navigateToLogin = () => {
    router.replace("/login");
  };

  return { form, onSubmit, registerSuccessVisible, navigateToLogin };
}
