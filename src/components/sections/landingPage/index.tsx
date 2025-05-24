import { ExperienceSection } from "./ExperienceSection";
import { FAQSection } from "./FAQSection";
import { HeroSection } from "./HeroSection";
import { InfoSection } from "./InfoSection";
import { OurServiceSection } from "./OurServiceSection";

const LandingPage = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <HeroSection />
      <OurServiceSection />
      <ExperienceSection />
      <FAQSection />
      <InfoSection />
    </div>
  );
};

export default LandingPage;
