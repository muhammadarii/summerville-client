import { AppSidebar } from "@/components/parts/Sidebar";
import DashboardSection from "@/components/sections/dashboardSection";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const DashboardPage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <DashboardSection />
      </main>
    </SidebarProvider>
  );
};

export default DashboardPage;
