import { cn } from "@/lib/utils";
import { useUserContext } from "@/context/user-provider";
import { useSidebar } from "../ui/sidebar";
import ProfileSkeleton from "../skeleton/profile-skeleton";
import ProfileAvatar from "../avatar/profile-avatar";

export default function DashboardProfileName() {
  const { profile, profileLoading } = useUserContext();
  const { state } = useSidebar();
  const isExpanded = state === "expanded";

  if (profileLoading || !profile) {
    return <ProfileSkeleton />;
  }

  return (
    <>
      <ProfileAvatar data={profile} className={cn({ "size-8": !isExpanded })} />

      {isExpanded && (
        <div className="text-center">
          <span className="block">{profile?.name}</span>
          <span className="block">{profile?.email}</span>
        </div>
      )}
    </>
  );
}
