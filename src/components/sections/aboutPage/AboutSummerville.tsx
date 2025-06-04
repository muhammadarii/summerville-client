import Image from "next/image";
import ImageBackground from "@/assets/images/ImageBackground.png";
import Logo from "@/assets/images/summerville2.png";
import { RevealOnScroll } from "@/animations/RevealOnScroll";

export const AboutSummerville = () => {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center justify-center gap-10 mt-[100px] mx-8 lg:mx-[100px]">
      <RevealOnScroll from={{ opacity: 0, x: -100 }}>
        <div className="flex flex-col w-full gap-4 items-center lg:items-start">
          <h1 className="text-3xl font-semibold">About SummerVille</h1>
          <p className="text-[12px] text-center lg:text-start">
            SummerVille is an innovative startup company dedicated to building a
            dynamic platform that connects developers with highly skilled and
            passionate individuals ready to contribute to cutting-edge projects.
            Our mission is to empower creators and visionaries by providing them
            with access to top-tier talent from diverse backgrounds, enabling
            the realization of groundbreaking ideas. At SummerVille, we believe
            that true innovation emerges from the collaboration of unique
            perspectives, and we are deeply committed to cultivating an
            inclusive, supportive, and forward-thinking environment where
            creativity is not just encouraged but celebrated. Whether your
            looking to bring your next big idea to life or contribute your
            expertise to meaningful digital initiatives, SummerVille offers the
            tools, community, and opportunities to help you thrive. Join us on
            our journey to shape the future of digital experiences and make a
            lasting impact in the tech world.
          </p>
        </div>
      </RevealOnScroll>
      <RevealOnScroll from={{ opacity: 0, x: 100 }}>
        <div className="relative">
          <Image
            src={ImageBackground}
            alt="Summerville"
            width={500}
            height={500}
          />
          <Image
            src={Logo}
            alt="Summerville"
            width={200}
            height={200}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-3xl p-4"
          />
        </div>
      </RevealOnScroll>
    </div>
  );
};
