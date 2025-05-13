/* eslint-disable @typescript-eslint/no-explicit-any */

import { UseFormReturn } from "react-hook-form";

import { TodoFormData } from "@/models/todo";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { DialogFooter } from "../ui/dialog";
import InputField from "../control-field/input-field";
import CheckboxField from "../control-field/checkbox-field";

type TodoFormProps = {
  form: UseFormReturn<any>;
  onSubmit: (data: TodoFormData) => void;
  buttonTitle: string;
};

export default function TodoForm({
  form,
  onSubmit,
  buttonTitle,
}: TodoFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <InputField
          control={form.control}
          name="title"
          label="Title"
          placeholder="eg. Cook healthy food"
        />

        <InputField
          control={form.control}
          name="description"
          label="Description"
          placeholder="eg. Buy groceries, cook food."
        />

        <CheckboxField
          control={form.control}
          name="isCompleted"
          label="Completed"
        />

        <DialogFooter>
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {buttonTitle}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
