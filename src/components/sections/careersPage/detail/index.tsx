"use client";

import { Footer } from "@/components/parts/Footer";
import { LoadingSkeletonDetailCareer } from "@/components/parts/LoadingSkeleton";
import { useGetCareerById } from "@/hooks/useCareers";
import Image from "next/image";
import { useParams } from "next/navigation";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const DetailCareerPageSection = () => {
  const { _id } = useParams();
  const { data, isLoading, error } = useGetCareerById(_id as string);

  if (isLoading) return <LoadingSkeletonDetailCareer />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col">
      <div className="relative">
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
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
            {data?.career?.title}
          </h1>
          <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md w-1/2 h-[200px] rounded-2xl flex items-center justify-center text-center">
            <p className="p-4 text-black">{data?.career?.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-[150px] w-full h-full grid grid-cols-2 gap-4 mb-10">
        <div className="p-6 bg-[#262626] rounded-2xl shadow-2xl">
          <h1 className="text-2xl font-bold mb-4">Requirements</h1>
          {data?.career?.requirements.map((requirement, index) => (
            <div key={index} className="flex items-baseline gap-2 mb-4">
              <IoCheckmarkDoneOutline className="text-xl text-[#9EFF00] inline shrink-0" />
              <p>{requirement}</p>
            </div>
          ))}
        </div>
        <div className="p-6 bg-[#262626] rounded-2xl shadow-2xl">
          <h1 className="text-2xl font-bold mb-4">Responsibilities</h1>
          {data?.career?.responsibility.map((responsibility, index) => (
            <div key={index} className="flex items-baseline mb-4 gap-2">
              <IoCheckmarkDoneOutline className="text-xl text-[#9EFF00] inline shrink-0" />
              <p>{responsibility}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailCareerPageSection;
