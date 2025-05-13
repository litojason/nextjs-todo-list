"use client";

import { Edit } from "lucide-react";

import { TodoFormData } from "@/models/todo";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import TodoForm from "../form/todo-form";
import useEditTodo from "@/hooks/todo/use-edit-todo";

export default function EditTodoDialog({
  id,
  data,
}: {
  id: number;
  data: TodoFormData;
}) {
  const { open, onOpenChange, form, onSubmit } = useEditTodo(id, data);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button size="icon">
          <Edit />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>Change or update todo</DialogDescription>
        </DialogHeader>

        <TodoForm form={form} onSubmit={onSubmit} buttonTitle="Edit Todo" />
      </DialogContent>
    </Dialog>
  );
}
