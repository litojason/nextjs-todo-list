import { ListTodo, LucideIcon, UserPen } from "lucide-react";

type Menu = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const DASHBOARD_MENUS: Menu[] = [
  { name: "Todo", href: "/todo", icon: ListTodo },
  { name: "Edit Profile", href: "/edit-profile", icon: UserPen },
];
