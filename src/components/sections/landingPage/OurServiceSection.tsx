import { HeadTitle } from "@/components/parts/HeadTitle";

export const OurServiceSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeadTitle
        title="Our Service"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
      />
      <div className="grid grid-cols-3 items-center justify-center">
        <div className="w-[500px] h-full flex flex-col items-center justify-center border bg-red-500">
          <div className="w-[88px] h-[88px] bg-gradient-to-br from-[#242424] to-[#242424]/[0.5] rounded-[10px]"></div>
        </div>
        <div className="w-[500px] h-full flex flex-col items-center justify-center border bg-red-500">
          <div className="w-[88px] h-[88px] bg-gradient-to-br from-[#242424] to-[#242424]/[0.5] rounded-[10px]"></div>
        </div>
        <div className="w-[500px] h-full flex flex-col items-center justify-center border bg-red-500">
          <div className="w-[88px] h-[88px] bg-gradient-to-br from-[#242424] to-[#242424]/[0.5] rounded-[10px]"></div>
        </div>
      </div>
    </div>
  );
};
