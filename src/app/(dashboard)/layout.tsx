import UserProvider from "@/context/user-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/sidebar/dashboard-sidebar";
import DashboardMobileBar from "@/components/sidebar/dashboard-mobile-bar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <SidebarProvider
        // className="flex flex-col"
        className="flex-col md:flex-row"
      >
        <DashboardSidebar />

        <DashboardMobileBar />
        {children}
      </SidebarProvider>
    </UserProvider>
  );
}
