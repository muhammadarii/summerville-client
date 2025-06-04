import { RevealOnScroll } from "@/animations/RevealOnScroll";
import { ContactForm } from "@/components/parts/ContactForm";
import { HeadTitle } from "@/components/parts/HeadTitle";

export const InfoSection = () => {
  return (
    <div className="mt-10">
      <RevealOnScroll from={{ opacity: 0, y: -100 }}>
        <HeadTitle
          title="Thank you for your in SquareUp."
          description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        />
      </RevealOnScroll>
      <RevealOnScroll from={{ opacity: 0, y: 100 }}>
        <ContactForm />
      </RevealOnScroll>
    </div>
  );
};
