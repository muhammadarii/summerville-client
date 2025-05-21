import { HeadTitle } from "@/components/parts/HeadTitle";
import { FaPaintBrush, FaProjectDiagram, FaPuzzlePiece } from "react-icons/fa";

export const OurServiceSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeadTitle
        title="Our Service"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
      />
      <div className="flex flex-row items-center justify-center gap-4 mt-8">
        <div className="relative w-[510px] h-[380px] rounded-md border border-[#4e4e4e]">
          <div className="w-[88px] h-[88px] bg-gradient-to-tr from-[#242424] to-[#4e4e4e] rounded-md flex items-center justify-center absolute top-[44px] left-[44px]">
            <FaPaintBrush className="text-4xl text-[#9EFF00]" />
          </div>
          <div className="absolute top-[150px] left-[44px] ">
            <h1 className="text-2xl font-semibold">Design</h1>
            <p className="text-sm text-gray-300 mt-2 pr-10">
              At Squareup, our design team is passionate about creating
              stunning, user-centric designs that captivate your audience and
              elevate your brand. We believe that great design is not just about
              aesthetics; it is about creating seamless and intuitive user
              experiences.
            </p>
          </div>
        </div>
        <div className="relative w-[510px] h-[380px] border border-[#4e4e4e] rounded-md">
          <div className="w-[88px] h-[88px] bg-gradient-to-tr from-[#242424] to-[#4e4e4e] rounded-md flex items-center justify-center absolute top-[44px] left-[44px]">
            <FaPuzzlePiece className="text-4xl text-[#9EFF00]" />
          </div>
          <div className="absolute top-[150px] left-[44px] pr-10">
            <h1 className="text-2xl font-semibold">Development</h1>
            <p className="text-sm text-gray-300 mt-2">
              Our development team is dedicated to building robust, scalable,
              and high-performance web applications that meet your business
              needs. We leverage the latest technologies and best practices to
              ensure that your application is not only functional but also
              secure and maintainable.
            </p>
          </div>
        </div>
        <div className="relative w-[510px] h-[380px] border border-[#4e4e4e] rounded-md">
          <div className="w-[88px] h-[88px] bg-gradient-to-tr from-[#242424] to-[#4e4e4e] rounded-md flex items-center justify-center absolute top-[44px] left-[44px]">
            <FaProjectDiagram className="text-4xl text-[#9EFF00]" />
          </div>
          <div className="absolute top-[150px] left-[44px] pr-10">
            <h1 className="text-2xl font-semibold">Project Management</h1>
            <p className="text-sm text-gray-300 mt-2">
              Our project management team is committed to delivering your
              projects on time and within budget. We use agile methodologies and
              effective communication to ensure that your project runs smoothly
              from start to finish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
