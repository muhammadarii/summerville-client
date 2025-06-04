import { Footer } from "@/components/parts/Footer";
import { HeadTitle } from "@/components/parts/HeadTitle";
import { AboutSummerville } from "./AboutSummerville";
import { OurStory } from "./OurStory";
import { RevealOnScroll } from "@/animations/RevealOnScroll";

const AboutPageSection = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <RevealOnScroll from={{ opacity: 0, y: -100 }}>
        <HeadTitle
          title="About US"
          description="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
        />
      </RevealOnScroll>
      <AboutSummerville />
      <OurStory />
      <Footer />
    </div>
  );
};

export default AboutPageSection;
