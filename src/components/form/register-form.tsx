"use client";

import { Form } from "../ui/form";
import { Button } from "../ui/button";
import InputField from "../control-field/input-field";
import RegisterSuccessDialog from "../dialog/register-success-dialog";
import useRegister from "@/hooks/auth/use-register";

export default function RegisterForm() {
  const { form, onSubmit, registerSuccessVisible, navigateToLogin } =
    useRegister();

  return (
    <>
      <RegisterSuccessDialog
        visible={registerSuccessVisible}
        onButtonPress={navigateToLogin}
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <InputField
            control={form.control}
            name="name"
            label="Name"
            placeholder="eg. John Doe"
            description="* Minimum 2 characters"
          />

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

          <InputField
            control={form.control}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="eg. pass1234"
          />

          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </Form>
    </>
  );
}
