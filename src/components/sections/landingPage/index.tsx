import { ExperienceSection } from "./ExperienceSection";
import { HeroSection } from "./HeroSection";
import { OurServiceSection } from "./OurServiceSection";

const LandingPage = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <HeroSection />
      <OurServiceSection />
      <ExperienceSection />
    </div>
  );
};

export default LandingPage;
