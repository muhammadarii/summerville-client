"use client";
import { CardJob } from "@/components/parts/CardDesign";
import { LoadingSkeleton } from "@/components/parts/LoadingSkeleton";
import { useGetAllCareers } from "@/hooks/useCareers";
import { Career } from "@/types";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const JobOpening = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { data, isLoading, error } = useGetAllCareers();

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: -50,
            duration: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 20%",
              toggleActions: "play reset play reverse",
              markers: false,
            },
            delay: index * 0.1,
          }
        );
      }
    });
  }, []);

  if (isLoading) return <LoadingSkeleton />;
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
      <div className="flex items-center justify-center">
        <div className="mt-20 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {data?.careers?.map((career: Career) => (
            <CardJob
              key={career._id}
              image={career.imageUrl}
              title={career.title}
              description={career.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
