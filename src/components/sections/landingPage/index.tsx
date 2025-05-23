import { ExperienceSection } from "./ExperienceSection";
import { FAQ } from "./FAQ";
import { HeroSection } from "./HeroSection";
import { OurServiceSection } from "./OurServiceSection";

const LandingPage = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <HeroSection />
      <OurServiceSection />
      <ExperienceSection />
      <FAQ />
    </div>
  );
};

export default LandingPage;
