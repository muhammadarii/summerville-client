"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/parts/Sidebar";

export const DashboardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-[100vw] h-[100vh]">
          <SidebarTrigger />
          <section className="px-4 w-[100%] h-fit">{children}</section>
        </main>
      </SidebarProvider>
    </>
  );
};
