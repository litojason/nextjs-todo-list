"use client";

import { Form } from "../ui/form";
import { Button } from "../ui/button";
import InputField from "../control-field/input-field";
import useChangePassword from "@/hooks/user/use-change-password";

export default function ChangePasswordForm() {
  const { form, onSubmit } = useChangePassword();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col flex-1 justify-between gap-8"
      >
        <div className="space-y-4">
          <InputField
            control={form.control}
            type="password"
            name="currentPassword"
            label="Current Password"
            placeholder="eg. pass1234"
          />

          <InputField
            control={form.control}
            type="password"
            name="newPassword"
            label="New Password"
            placeholder="eg. pass1234"
          />

          <InputField
            control={form.control}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="eg. pass1234"
          />
        </div>

        <Button type="submit" className="w-full lg:self-end lg:w-fit">
          Change Password
        </Button>
      </form>
    </Form>
  );
}
