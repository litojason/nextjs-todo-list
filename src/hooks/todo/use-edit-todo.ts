import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { ClientError } from "@/lib/client";
import { TodoFormData, todoFormResolver } from "@/models/todo";
import { updateTodo } from "@/actions/todo";

export default function useEditTodo(id: number, data: TodoFormData) {
  const [open, onOpenChange] = useState(false);

  const form = useForm<TodoFormData>({
    resolver: todoFormResolver,
    defaultValues: {
      title: data.title || "",
      description: data.description || "",
      isCompleted: data.isCompleted,
    },
  });

  useEffect(() => {
    if (open) {
      form.reset({
        title: data.title || "",
        description: data.description || "",
        isCompleted: data.isCompleted,
      });
    }
  }, [data, open, form]);

  const onSubmit = async (data: TodoFormData) => {
    try {
      await updateTodo(id, data);
      toast.success("Edit Todo Success");
      onOpenChange(false);
    } catch (error) {
      toast.error((error as ClientError).message);
    }
  };

  return { open, onOpenChange, form, onSubmit };
}
