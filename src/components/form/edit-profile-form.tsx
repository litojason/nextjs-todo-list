"use client";

import { Form } from "../ui/form";
import { Button } from "../ui/button";
import InputField from "../control-field/input-field";
import useEditProfile from "@/hooks/user/use-edit-profile";

export default function EditProfileForm() {
  const { form, onSubmit, buttonDisabled } = useEditProfile();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col flex-1 justify-between gap-8"
      >
        <div className="space-y-4">
          <InputField
            control={form.control}
            name="name"
            label="Name"
            placeholder="eg. John Doe"
            description="* Minimum 2 characters"
          />
        </div>

        <Button
          type="submit"
          disabled={buttonDisabled}
          className="w-full lg:self-end lg:w-fit"
        >
          Update Profile
        </Button>
      </form>
    </Form>
  );
}
