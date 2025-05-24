import { HeadTitle } from "@/components/parts/HeadTitle";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export const InfoSection = () => {
  return (
    <div className="mt-10 mb-20">
      <HeadTitle
        title="Thank you for your in SquareUp."
        description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
      />
      <div className="flex items-center justify-center">
        <form className="flex flex-col w-[850px] gap-4">
          <div className="flex flex-row items-center gap-4 mt-8">
            <div className="w-full h-[134px] px-4 py-8 bg-[#242424] border-[#262626] rounded-xl">
              <label>Full Name</label>
              <Input
                type="text"
                className="border-0 border-b-2 rounded-none px-0 mt-2"
                placeholder="type here"
              />
            </div>
            <div className="w-full h-[134px] px-4 py-8 bg-[#242424] border-[#262626] rounded-xl">
              <label>Email</label>
              <Input
                type="email"
                className="border-0 border-b-2 rounded-none px-0 mt-2"
                placeholder="type here"
              />
            </div>
          </div>
          <div className="relative w-full h-[200px] bg-[#242424] border-[#262626] rounded-xl">
            <div className="absolute top-[40px] left-[40px]">
              <p className="font-semibold">Why are you contacting us?</p>
              <div className="grid grid-cols-2 mt-4 gap-x-[200px] gap-y-4">
                <div className="flex flex-row gap-2 items-center">
                  <Input type="checkbox" className="w-4 h-4" />
                  <label>Web Design</label>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Input type="checkbox" className="w-4 h-4" />
                  <label>Collaboration</label>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Input type="checkbox" className="w-4 h-4" />
                  <label>Mobile App Design</label>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Input type="checkbox" className="w-4 h-4" />
                  <label>Others</label>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center px-[40px] w-full h-[200px] bg-[#242424] border-[#262626] rounded-xl">
            <div className="absolute w-full top-[40px] left-[40px]">
              <p className="font-semibold">Your Budget</p>
              <p className="font-light mt-2 text-[14px]">
                Slide to indicate your budget range
              </p>
            </div>
            <Slider
              defaultValue={[33]}
              max={100}
              step={1}
              className="w-full mt-10"
            />
          </div>
          <div className="relative w-full h-[200px] bg-[#242424] border-[#262626] rounded-xl">
            <div className="absolute top-[40px] left-[40px] pr-[80px] w-full">
              <p className="font-semibold">Your Message</p>
              <Input
                type="text"
                className="border-0 border-b-2 rounded-none px-0 mt-2 w-full"
                placeholder="type here"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
