"use client";

import { Todo } from "@/models/todo";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import EditTodoDialog from "../dialog/edit-todo-dialog";
import DeleteTodoDialog from "../dialog/delete-todo-dialog";
import useCompleteTodo from "@/hooks/todo/use-complete.todo";

type TodoCardProps = {
  data: Todo;
};

export default function TodoCard({ data }: TodoCardProps) {
  const { todo, handleCompleteTodo } = useCompleteTodo(data);

  const { id, title, description, isCompleted } = todo;

  return (
    <div className="todo-card">
      <div className="flex items-center flex-1 gap-4">
        <Checkbox checked={isCompleted} onCheckedChange={handleCompleteTodo} />

        <div className="flex-1">
          <p className={cn({ "line-through": isCompleted })}>{title}</p>
          <p className={cn("text-gray-400", { "line-through": isCompleted })}>
            {description}
          </p>
        </div>
      </div>

      <div className="flex self-end lg:self-auto gap-4">
        <EditTodoDialog id={id} data={todo} />

        <DeleteTodoDialog id={id} />
      </div>
    </div>
  );
}
