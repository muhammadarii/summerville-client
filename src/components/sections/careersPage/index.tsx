import { Footer } from "@/components/parts/Footer";
import { HeadTitle } from "@/components/parts/HeadTitle";
import React from "react";
import { WelcomeSection } from "./WelcomeSection";
import { WorkDescriptions } from "./WorkDescriptions";
import { JobOpening } from "./JobOpening";
import { RevealOnScroll } from "@/animations/RevealOnScroll";

const CareersPageSection = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <RevealOnScroll from={{ opacity: 0, y: -100 }}>
        <HeadTitle
          title="Join Our Team at summerville"
          description="Unlock your potential and join our team of innovators and problem solvers."
        />
      </RevealOnScroll>
      <WelcomeSection />
      <WorkDescriptions />
      <JobOpening />
      <Footer />
    </div>
  );
};

export default CareersPageSection;
