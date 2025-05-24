import { HeadTitle } from "@/components/parts/HeadTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  {
    title: "What services does SquareUp provide?",
    description:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    title: "How can SquareUp help my business?",
    description:
      "SquareUp can help your business by providing tailored solutions that enhance your digital presence, improve user experience, and streamline operations. Our team works closely with you to understand your needs and deliver results that drive growth.",
  },
  {
    title: "What industries does SquareUp work with?",
    description:
      "SquareUp works with a diverse range of industries including e-commerce, healthcare, finance, education, and technology. Our expertise allows us to adapt our services to meet the unique challenges of each sector.",
  },
  {
    title: "How long does it take to complete a project with SquareUp?",
    description: "It takes 3-6 months to complete a project with SquareUp.",
  },
  {
    title:
      "Do you offer ongoing support and maintenance after the project is completed?",
    description:
      "Yes, we offer ongoing support and maintenance services to ensure your project continues to run smoothly and meets your evolving needs.",
  },
  {
    title: "Can you work with existing design or development frameworks?",
    description:
      "Yes, we can work with existing design or development frameworks. Our team is experienced in various technologies and can integrate with your current systems to enhance functionality and performance.",
  },
];

export const FAQSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <HeadTitle
        title="Frequently Asked Questions"
        description="Join us today and be part of the future. Our platform is designed to empower you with the tools and resources you need to succeed in the digital world."
      />
      <div className="flex flex-col lg:grid md:grid-cols-2 items-start justify-center w-full gap-x-20 gap-y-4 mt-8 px-4 md:px-0">
        {data.map((item, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value={`item-${index}`} className="w-full">
              <div className="flex flex-row items-center gap-4">
                <div className="w-[50px] h-[50px] bg-gradient-to-tr from-[#242424] to-[#4e4e4e] rounded-md flex items-center justify-center">
                  0{index + 1}
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="text-[#9EFF00]">
                    {item.title}
                  </AccordionTrigger>
                </div>
              </div>
              <AccordionContent className="ml-[68px]">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
