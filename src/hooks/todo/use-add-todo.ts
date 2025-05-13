import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { ClientError } from "@/lib/client";
import { TodoFormData, todoFormResolver } from "@/models/todo";
import { addTodo } from "@/actions/todo";

export default function useAddTodo() {
  const [open, onOpenChange] = useState(false);

  const form = useForm<TodoFormData>({
    resolver: todoFormResolver,
    defaultValues: {
      title: "",
      description: "",
      isCompleted: false,
    },
  });

  const onSubmit = async (data: TodoFormData) => {
    try {
      await addTodo(data);
      toast.success("Add Todo Success");
      onOpenChange(false);
      form.reset();
    } catch (error) {
      toast.error((error as ClientError).message);
    }
  };

  return { open, onOpenChange, form, onSubmit };
}
