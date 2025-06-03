import { RevealOnScroll } from "@/animations/RevealOnScroll";
import { CardExperience } from "@/components/parts/CardDesign";
import { HeadTitle } from "@/components/parts/HeadTitle";
import { FaMedal } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { PiShieldWarningFill } from "react-icons/pi";
import { RiTrophyFill } from "react-icons/ri";

const data = [
  {
    icon: <RiTrophyFill className="text-4xl text-[#9EFF00]" />,
    title: "Certified Professionals",
    description:
      "Our team of experts is dedicated to providing you with the best solutions tailored to your needs. We leverage our extensive experience and knowledge to deliver exceptional results.",
  },
  {
    icon: <PiShieldWarningFill className="text-4xl text-[#9EFF00]" />,
    title: "Security and Privacy",
    description:
      "We prioritize the security and privacy of your data. Our platform is designed to ensure that your information is protected and accessible only to authorized users.",
  },
  {
    icon: <FaMedal className="text-4xl text-[#9EFF00]" />,
    title: "Proven Track Record",
    description:
      "We have a proven track record of delivering high-quality solutions that meet the needs of our clients. Our success is built on our commitment to excellence and customer satisfaction.",
  },
  {
    icon: <MdConnectWithoutContact className="text-4xl text-[#9EFF00]" />,
    title: "24/7 Support",
    description:
      "Our support team is available 24/7 to assist you with any questions or concerns. We are here to help you succeed and ensure that your experience with us is seamless.",
  },
];

export const ExperienceSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <RevealOnScroll from={{ opacity: 0, y: -100 }}>
        <HeadTitle
          title="Experience"
          description="Join us today and be part of the future. Our platform is designed to empower you with the tools and resources you need to succeed in the digital world."
        />
      </RevealOnScroll>

      <RevealOnScroll from={{ opacity: 0, y: 100 }}>
        <div className="flex flex-col lg:grid md:grid-cols-2 items-center justify-center gap-4 mt-8 w-full px-4 md:px-0">
          {data.map((item, index) => (
            <CardExperience
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
};
