"use client";

import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";
import DashboardMenus from "./dashboard-menus";
import ToggleDarkMode from "../theme/toggle-dark-mode";
import LogoutDialog from "../dialog/logout-dialog";
import DashboardProfileName from "./dashboard-profile-name";

export default function DashboardSidebar() {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <div
        className={cn("flex flex-col items-center justify-between p-4", {
          "flex-row": state === "expanded",
        })}
      >
        <SidebarTrigger />

        <ToggleDarkMode />
      </div>

      <SidebarHeader className="flex flex-col items-center">
        <DashboardProfileName />
      </SidebarHeader>

      <SidebarContent>
        <DashboardMenus />
      </SidebarContent>

      <SidebarFooter>
        <LogoutDialog />
      </SidebarFooter>
    </Sidebar>
  );
}
