import { RevealOnScrollDown } from "@/animations/RevealOnScrollDown";
import { RevealOnScrollUp } from "@/animations/RevealOnScrollUp";
import { CardService } from "@/components/parts/CardDesign";
import { HeadTitle } from "@/components/parts/HeadTitle";
import { FaPaintBrush, FaProjectDiagram, FaPuzzlePiece } from "react-icons/fa";

const data = [
  {
    icon: <FaPaintBrush className="text-4xl text-[#9EFF00]" />,
    title: "Digital Marketing",
    description:
      "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it is about creating seamless and intuitive user experiences.",
  },
  {
    icon: <FaPuzzlePiece className="text-4xl text-[#9EFF00]" />,
    title: "Development",
    description:
      "Our development team is dedicated to building robust, scalable, and high-performance web applications that meet your business needs. We leverage the latest technologies and best practices to ensure that your application is not only functional but also secure and maintainable.",
  },
  {
    icon: <FaProjectDiagram className="text-4xl text-[#9EFF00]" />,
    title: "Project Management",
    description:
      "Our project management team is committed to delivering your projects on time and within budget. We use agile methodologies and effective communication to ensure that your project runs smoothly from start to finish.",
  },
];

export const OurServiceSection = () => {
  return (
    <div id="service" className="flex flex-col items-center justify-center">
      <RevealOnScrollDown>
        <HeadTitle
          title="Our Service"
          description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        />
      </RevealOnScrollDown>
      <RevealOnScrollUp>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-8 w-full px-4 md:px-0">
          {data.map((item, index) => (
            <CardService
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </RevealOnScrollUp>
    </div>
  );
};
