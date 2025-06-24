import React from "react";
import { DashboardWrapper } from "../dashboardwrapper";
import ServiceDashboardSection from "@/components/sections/Dashboard/serviceDashboardSection";

const ServicesDashboardPage = () => {
  return (
    <DashboardWrapper>
      <ServiceDashboardSection />
    </DashboardWrapper>
  );
};

export default ServicesDashboardPage;
