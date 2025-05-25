import { ExperienceSection } from "./ExperienceSection";
import { FAQSection } from "./FAQSection";
import { Footer } from "../../parts/Footer";
import { HeroSection } from "./HeroSection";
import { InfoSection } from "./InfoSection";
import { OurServiceSection } from "./OurServiceSection";

const LandingPageSection = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <HeroSection />
      <OurServiceSection />
      <ExperienceSection />
      <FAQSection />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default LandingPageSection;
