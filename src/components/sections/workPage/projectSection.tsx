"use client";

import { CardProject } from "@/components/parts/CardDesign";
import { RevealOnScroll } from "@/animations/RevealOnScroll";
import { useGetAllWorks } from "@/hooks/useWorks";
import { LoadingSkeletonWork } from "@/components/parts/LoadingSkeleton";

export const ProjectSection = () => {
  const { data, isLoading, error } = useGetAllWorks();

  if (isLoading) return <LoadingSkeletonWork />;
  if (error) return <div>Error: {error.message}</div>;
  console.log("data works:", data);

  return (
    <>
      <RevealOnScroll
        from={{ opacity: 0, x: -100 }}
        className="flex items-start justify-start"
      >
        <div className="flex flex-col py-20">
          <h1 className="text-4xl font-bold">At summerville</h1>
          <p className="text-[14px] font-light mt-2">
            We have had the privilege of working with a diverse range of clients
            and delivering exceptional digital products that drive success.
          </p>
          <div className="bg-[#262626] p-4 rounded-md w-fit mt-4 text-[12px] font-light">
            Here are ten examples of our notable works:
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll from={{ opacity: 0, y: 100 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-items-center gap-10">
          {data?.works?.map((work, index) => (
            <div key={index} className="w-full">
              <CardProject
                id={work._id}
                image={work.imageUrl}
                title={work.title}
                tag={work.tag}
                description={work.description}
                url={work.link}
              />
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </>
  );
};
