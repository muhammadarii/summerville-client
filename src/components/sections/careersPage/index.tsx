import { Footer } from "@/components/parts/Footer";
import { HeadTitle } from "@/components/parts/HeadTitle";
import React from "react";
import { WelcomeSection } from "./WelcomeSection";
import { WorkDescriptions } from "./WorkDescriptions";
import { JobOpening } from "./JobOpening";

const CareersPageSection = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <HeadTitle
        title="Join Our Team at SquareUp"
        description="Unlock your potential and join our team of innovators and problem solvers."
      />
      <WelcomeSection />
      <WorkDescriptions />
      <JobOpening />
      <Footer />
    </div>
  );
};

export default CareersPageSection;
