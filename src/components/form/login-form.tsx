"use client";

import { Form } from "../ui/form";
import { Button } from "../ui/button";
import InputField from "../control-field/input-field";
import useLogin from "@/hooks/auth/use-login";

export default function LoginForm() {
  const { form, onSubmit } = useLogin();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <InputField
          control={form.control}
          name="email"
          label="Email"
          placeholder="eg. test@gmail.com"
        />

        <InputField
          control={form.control}
          type="password"
          name="password"
          label="Password"
          placeholder="eg. pass1234"
        />

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
}
