"use client";
import { RevealOnScroll } from "@/animations/RevealOnScroll";
import { CardJob } from "@/components/parts/CardDesign";
import { LoadingSkeletonCareer } from "@/components/parts/LoadingSkeleton";
import { useGetAllCareers } from "@/hooks/useCareers";

export const JobOpening = () => {
  const { data, isLoading, error } = useGetAllCareers();

  if (isLoading) return <LoadingSkeletonCareer />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col mt-10 px-4 lg:px-0">
      <h1 className="text-3xl">Current Openings</h1>
      <p className="text-[12px] font-extralight mt-4 lg:pr-8">
        We are always on the lookout for talented individuals who are passionate
        about creating exceptional digital experiences. Whether your a designer,
        engineer, project manager, or have skills that align with our agency
        mission, we encourage you to explore our open positions.
      </p>
      <RevealOnScroll from={{ opacity: 0, y: 100 }}>
        <div className="flex items-center justify-center">
          <div className="mt-20 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {data?.careers?.map((career, index) => (
              <div key={index} className="w-full">
                <CardJob
                  id={career._id}
                  image={career.imageUrl}
                  title={career.title}
                  description={career.description}
                />
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};
