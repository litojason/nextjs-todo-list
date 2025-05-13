"use client";

import { Plus } from "lucide-react";

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
import useAddTodo from "@/hooks/todo/use-add-todo";

export default function AddTodoDialog() {
  const { open, onOpenChange, form, onSubmit } = useAddTodo();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button size="icon">
          <Plus />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>Plan ahead of time</DialogDescription>
        </DialogHeader>

        <TodoForm form={form} onSubmit={onSubmit} buttonTitle="Add Todo" />
      </DialogContent>
    </Dialog>
  );
}
