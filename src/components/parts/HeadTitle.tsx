import Image from "next/image";
import AbstractBackground from "@/assets/images/BackgroundAbstract.jpg";

interface HeadTitleProps {
  title: string;
  description: string;
}

export const HeadTitle: React.FC<HeadTitleProps> = ({ title, description }) => {
  return (
    <div className="relative mt-6 flex flex-col items-center justify-center w-full h-[200px]">
      <Image
        src={AbstractBackground}
        alt="Abstract Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-base text-center text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};
