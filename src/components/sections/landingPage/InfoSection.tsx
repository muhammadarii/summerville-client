import { RevealOnScrollDown } from "@/animations/RevealOnScrollDown";
import { RevealOnScrollUp } from "@/animations/RevealOnScrollUp";
import { ContactForm } from "@/components/parts/ContactForm";
import { HeadTitle } from "@/components/parts/HeadTitle";

export const InfoSection = () => {
  return (
    <div className="mt-10">
      <RevealOnScrollDown>
        <HeadTitle
          title="Thank you for your in SquareUp."
          description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        />
      </RevealOnScrollDown>
      <RevealOnScrollUp>
        <ContactForm />
      </RevealOnScrollUp>
    </div>
  );
};
