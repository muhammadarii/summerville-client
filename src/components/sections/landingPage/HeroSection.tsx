import { Button } from "@/components/ui/button";
import Image from "next/image";
import AbstractDesign from "@/assets/images/AbstractDesign.png";
import Marquee from "react-fast-marquee";
import zapier from "@/assets/images/Zapier.png";
import zoom from "@/assets/images/Zoom.png";
import spotify from "@/assets/images/Spotify.png";
import slack from "@/assets/images/Slack.png";
import amazon from "@/assets/images/Amazon.png";
import adobe from "@/assets/images/Adobe.png";

const logos = [zapier, zoom, spotify, slack, amazon, adobe];
const repeated = [...logos, ...logos, ...logos];

export const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Image
        src={AbstractDesign}
        alt="Abstract Design"
        className="mt-[280px] md:mt-[200px] md:h-full object-fill md:object-cover"
      />
      <div className="absolute top-[-30px] md:top-[-130px] left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-2xl lg:text-5xl font-bold text-center text-white">
          Empowering your business through trusted and scalable IT services
        </h1>
        <p className="hidden md:block mt-4 text-base text-center text-gray-300">
          Discover the power of our platform and how it can transform your
          digital experience. Join us today and be part of the future.
        </p>
        <div className="hidden md:flex flex-row items-center justify-center mt-6 gap-2">
          for :
          <div className="bg-[#262626] rounded-[5px] px-2 py-1">Startup</div>
          <div className="bg-[#262626] rounded-[5px] px-2 py-1">
            Enterprise leaders
          </div>
          <div className="bg-[#262626] rounded-[5px] px-2 py-1">
            Media&Publisher
          </div>
          and
          <div className="bg-[#262626] rounded-[5px] px-2 py-1">
            Social Good
          </div>
        </div>
        <div className="md:hidden w-full md:w-[80%] h-[84px] mt-4 px-10 rounded-md bg-[#262626] flex flex-col items-center justify-center">
          <p className="flex flex-row items-center justify-between w-full h-full text-center text-gray-300">
            For startups, enterprise leaders, media & publishers, and social
            good.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center mt-6 gap-2">
          <Button variant={"secondary"}>Our Works</Button>
          <Button variant={"primary"}>Contact Us</Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[-30px]">
        <h1 className="hidden md:flex items-center justify-center bg-[#1A1A1A] w-[286px] h-[62px] text-white px-2 py-1 rounded-full border border-[#262626] mb-4">
          Trusted By 250+ Companies
        </h1>
        <div className="w-screen md:w-full overflow-hidden">
          <Marquee gradient={false} speed={50} loop={0}>
            {repeated.map((logo, idx) => (
              <Image
                key={idx}
                src={logo}
                alt={`Logo ${idx + 1}`}
                className="mr-10 opacity-50 hover:opacity-100 transition-opacity duration-300 w-[80px] h-[50px] md:w-[120px] md:h-[70px] object-contain"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};
