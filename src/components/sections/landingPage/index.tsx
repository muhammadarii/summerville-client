import { AbstractDesign } from "@/assets/svg/AbstractDesign";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="w-full h-full">
      <div className="relative flex flex-col items-center justify-center">
        <AbstractDesign className="mt-[250px]" />
        <div className="absolute top-[-90px] left-0 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-center text-white">
            Empowering your business through trusted and scalable IT services.
          </h1>
          <p className="mt-4 text-lg text-center text-gray-300">
            Discover the power of our platform and how it can transform your
            digital experience. Join us today and be part of the future.
          </p>
          <div className="flex flex-row items-center justify-center mt-6 gap-2">
            for :
            <div className="bg-[#262626] rounded-[5px] px-2 py-1">Startups</div>
            <div className="bg-[#262626] rounded-[5px] px-2 py-1">
              Enterprise leaders
            </div>
            <div className="bg-[#262626] rounded-[5px] px-2 py-1">
              Media&Publisher
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mt-6 gap-2">
            <Button variant={"secondary"}>Our Works</Button>
            <Button variant={"primary"}>Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
