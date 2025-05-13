import { Suspense } from "react";
import { Metadata } from "next";

import SectionContainer from "@/components/container/section-container";
import { TodoListSkeleton } from "@/components/skeleton/todo-skeleton";
import TodoList from "@/components/todo/todo-list";
import AddTodoDialog from "@/components/dialog/add-todo-dialog";

export const metadata: Metadata = {
  title: "Todo",
};

export default function TodoPage() {
  return (
    <main className="w-full h-full">
      <div className="p-4 md:p-6">
        <SectionContainer title="Todo" rightButton={<AddTodoDialog />}>
          <Suspense fallback={<TodoListSkeleton />}>
            <TodoList />
          </Suspense>
        </SectionContainer>
      </div>
    </main>
  );
}
