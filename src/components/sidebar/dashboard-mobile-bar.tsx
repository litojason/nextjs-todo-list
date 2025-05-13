"use client";

import { SidebarTrigger, useSidebar } from "../ui/sidebar";

export default function DashboardMobileBar() {
  const { isMobile } = useSidebar();

  if (!isMobile) {
    return null;
  }

  return (
    <div className="px-4 pt-4">
      <SidebarTrigger />
    </div>
  );
}
