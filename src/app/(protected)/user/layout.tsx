import { DashboardHeader } from "@/components/common/DashboardHeader";
import { AppSidebar } from "@/components/dashboard/user/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/shadcn/ui/sidebar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
