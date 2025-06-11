import { RevealOnScroll } from "@/animations/RevealOnScroll";
import { CareerByIdProps } from "@/types";
import Image from "next/image";

type JobDescriptionProps = {
  data?: CareerByIdProps;
};

export const JobDescription: React.FC<JobDescriptionProps> = ({ data }) => {
  return (
    <div>
      <div className="relative">
        <RevealOnScroll from={{ opacity: 0, y: -100 }}>
          <div className="w-full">
            <Image
              src={data?.career?.imageUrl ?? "/placeholder.png"}
              alt={data?.career?.title ?? "Image"}
              width={1000}
              height={1000}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full bg-black opacity-50" />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-5xl font-bold text-white">
              {data?.career?.title}
            </h1>
            <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md w-[350px] lg:w-1/2 h-[200px] rounded-2xl flex items-center justify-center text-center">
              <p className="p-4 text-black text-xs lg:text-base">
                {data?.career?.description}
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};
