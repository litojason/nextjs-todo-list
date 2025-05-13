import { useState } from "react";

import { deleteTodo } from "@/actions/todo";

export default function useDeleteTodo(id: number) {
  const [open, onOpenChange] = useState(false);

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return { open, onOpenChange, handleDeleteTodo };
}
