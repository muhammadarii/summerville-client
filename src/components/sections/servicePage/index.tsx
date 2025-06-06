import React from "react";
import { Footer } from "../../parts/Footer";
import { HeadTitle } from "@/components/parts/HeadTitle";
import { ServiceSection } from "./serviceSection";
import { RevealOnScroll } from "@/animations/RevealOnScroll";

const ServicePageSection = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <RevealOnScroll from={{ opacity: 0, y: -100 }}>
        <HeadTitle
          title="Our Services"
          description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
        />
      </RevealOnScroll>
      <ServiceSection />
      <Footer />
    </div>
  );
};

export default ServicePageSection;
