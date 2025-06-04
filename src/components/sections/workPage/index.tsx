import { Footer } from "@/components/parts/Footer";
import { HeadTitle } from "@/components/parts/HeadTitle";
import React from "react";
import { ProjectSection } from "./projectSection";
import { RevealOnScroll } from "@/animations/RevealOnScroll";

const WorkPageSection = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <RevealOnScroll from={{ opacity: 0, y: -100 }}>
        <HeadTitle
          title="Our Works"
          description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
        />
      </RevealOnScroll>
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default WorkPageSection;
