import { FileInputWithIcon } from "@/components/parts/InputFile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  onClose: () => void;
};

export const ApplyForm: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        onClick={onClose}
        className="absolute w-screen h-screen bg-black/50 z-10"
      />
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="relative z-10 w-full max-w-lg px-8 py-10 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <Input
              type="text"
              className="border-0 border-b-2 rounded-none px-1 mt-2"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              type="email"
              className="border-0 border-b-2 rounded-none px-1 mt-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Phone
            </label>
            <Input
              type="text"
              className="border-0 border-b-2 rounded-none px-1 mt-2"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="resume" className="block text-sm font-medium mb-1">
              Resume
            </label>
            <FileInputWithIcon />
          </div>
          <Button variant={"primary"} type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
