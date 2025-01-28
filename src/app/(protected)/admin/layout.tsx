import { DashboardHeader } from "@/components/common/DashboardHeader";
import { AppSidebar } from "@/components/dashboard/admin/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/shadcn/ui/sidebar";

export default function AdminLayout({
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
