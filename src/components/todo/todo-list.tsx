import TodoCard from "./todo-card";
import { getTodos } from "@/actions/todo";

export default async function TodoList() {
  const todos = await getTodos();

  if (!todos) {
    return <p>Failed to get todos. Try again.</p>;
  }

  if (todos.length === 0) {
    return (
      <p>
        No todo yet. Please add todo by pressing add button in the top right.
      </p>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoCard key={todo.id} data={todo} />
      ))}
    </div>
  );
}
