import { Skeleton } from "../ui/skeleton";

export function TodoListSkeleton() {
  return (
    <div className="todo-list">
      <TodoCardSkeleton />
      <TodoCardSkeleton />
      <TodoCardSkeleton />
      <TodoCardSkeleton />
      <TodoCardSkeleton />
    </div>
  );
}

export function TodoCardSkeleton() {
  return (
    <div className="todo-card">
      <Skeleton className="size-4 rounded shrink-0" />

      <div className="w-full py-1 space-y-2">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
      </div>

      <TodoButtonsSkeleton />
    </div>
  );
}

export function TodoButtonsSkeleton() {
  return (
    <>
      <Skeleton className="size-9 shrink-0" />
      <Skeleton className="size-9 shrink-0" />
    </>
  );
}
