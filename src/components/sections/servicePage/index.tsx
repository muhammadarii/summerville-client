import React from "react";
import { Footer } from "../../parts/Footer";
import { HeadTitle } from "@/components/parts/HeadTitle";
import { ServiceSection } from "./serviceSection";

const ServicePageSection = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <HeadTitle
        title="Our Services"
        description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
      />
      <ServiceSection />
      <Footer />
    </div>
  );
};

export default ServicePageSection;
