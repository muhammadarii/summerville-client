"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/parts/Sidebar";

export const DashboardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Sidebar Toggle Button */}
          <div className="fixed top-4 left-5 z-50 md:hidden">
            <SidebarTrigger />
          </div>

          {/* Page Content */}
          <main className="w-full mt-10 md:mt-4">
            <section className="rounded-xl py-6 shadow-md min-h-[calc(100vh-80px)] container mx-auto">
              {children}
            </section>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
