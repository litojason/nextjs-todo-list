import { Skeleton } from "../ui/skeleton";

export default function ProfileSkeleton() {
  return (
    <>
      <Skeleton className="size-12 rounded-full" />

      <div className="flex flex-col items-center space-y-2">
        <Skeleton className="h-5 w-40 rounded" />
        <Skeleton className="h-5 w-50 rounded" />
      </div>
    </>
  );
}
