"use client";

import { Trash } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import useDeleteTodo from "@/hooks/todo/use-delete-todo";

export default function DeleteTodoDialog({ id }: { id: number }) {
  const { open, onOpenChange, handleDeleteTodo } = useDeleteTodo(id);

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="destructive">
          <Trash />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Todo?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete todo? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogAction>Cancel</AlertDialogAction>

          <Button
            variant="outline"
            onClick={handleDeleteTodo}
            className="border-destructive hover:bg-destructive/90 text-destructive hover:text-primary-foreground"
          >
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
