import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { completeTodo } from "@/actions/todo";
import { Todo } from "@/models/todo";

export default function useCompleteTodo(todo: Todo) {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const handleDebounceCompleteTodo = useDebouncedCallback((value: boolean) => {
    completeTodo(todo.id, value);
  }, 2000);

  const handleCompleteTodo = (value: boolean) => {
    setIsCompleted(value);

    handleDebounceCompleteTodo(value);
  };

  const updatedTodo = { ...todo, isCompleted };

  return { todo: updatedTodo, handleCompleteTodo };
}
