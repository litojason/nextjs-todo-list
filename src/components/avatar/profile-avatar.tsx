import { User } from "@/models/user";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "../ui/avatar";

type ProfileAvatarProps = {
  data?: User;
  className?: string;
};

export default function ProfileAvatar({ data, className }: ProfileAvatarProps) {
  return (
    <Avatar className={cn("size-12", className)}>
      <AvatarFallback className="bg-primary text-primary-foreground">
        {data?.name[0] || "A"}
      </AvatarFallback>
    </Avatar>
  );
}
