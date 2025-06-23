"use client";

import { RevealOnScroll } from "@/animations/RevealOnScroll";
import { Footer } from "@/components/parts/Footer";
import { LoadingSkeletonDetailCareer } from "@/components/parts/LoadingSkeleton";
import { useGetCareerById } from "@/hooks/useCareers";
import { useParams } from "next/navigation";
import { JobDescription } from "./JobDescription";
import { JobInformation } from "./JobInformaiton";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ApplyForm } from "./ApplyForm";

const DetailCareerPageSection = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetCareerById(id as string);
  const [showApplyForm, setShowApplyForm] = useState(false);

  if (isLoading) return <LoadingSkeletonDetailCareer />;
  if (error) return <div>Error: {error.message}</div>;

  const handleToggleForm = () => setShowApplyForm(!showApplyForm);
  const handleCloseForm = () => {
    setShowApplyForm(false);
  };

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
        <div />
        <div className="flex items-center justify-end">
          <Button
            onClick={handleToggleForm}
            variant="primary"
            className="w-full mt-4"
          >
            Apply Now
          </Button>
          {showApplyForm && (
            <ApplyForm onClose={handleCloseForm} careerId={id as string} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailCareerPageSection;
