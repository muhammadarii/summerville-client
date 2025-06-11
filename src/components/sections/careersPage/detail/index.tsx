"use client";

import { RevealOnScroll } from "@/animations/RevealOnScroll";
import { Footer } from "@/components/parts/Footer";
import { LoadingSkeletonDetailCareer } from "@/components/parts/LoadingSkeleton";
import { useGetCareerById } from "@/hooks/useCareers";
import { useParams } from "next/navigation";
import { JobDescription } from "./JobDescription";
import { JobInformation } from "./JobInformaiton";

const DetailCareerPageSection = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetCareerById(id as string);

  if (isLoading) return <LoadingSkeletonDetailCareer />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col overflow-x-hidden">
      <JobDescription data={data} />

      <div className="mt-[150px] w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10 items-start">
        <RevealOnScroll from={{ opacity: 0, x: -100 }}>
          <JobInformation
            title="Responsibilities"
            data={data?.career?.responsibility ?? []}
          />
        </RevealOnScroll>

        <RevealOnScroll from={{ opacity: 0, x: 100 }}>
          <JobInformation
            title="Requirements"
            data={data?.career?.requirements ?? []}
          />
        </RevealOnScroll>
      </div>
      <Footer />
    </div>
  );
};

export default DetailCareerPageSection;
