"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { DASHBOARD_MENUS } from "@/constants/dashboard";
import { cn } from "@/lib/utils";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

export default function DashboardMenus() {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {DASHBOARD_MENUS.map((menu) => {
          const isActive = pathname === menu.href;

          return (
            <SidebarMenuItem key={menu.name}>
              <SidebarMenuButton
                asChild
                isActive={isActive}
                className="data-[active=true]:text-primary"
              >
                <Link
                  href={menu.href}
                  aria-disabled={isActive}
                  tabIndex={isActive ? -1 : 0}
                  className={cn({
                    "aria-disabled:opacity-100": isActive,
                  })}
                >
                  <menu.icon />
                  {menu.name}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
