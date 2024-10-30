import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: any }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen min-w-full">
        <AppSidebar />
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;