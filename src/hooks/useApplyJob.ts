import { applyForJob } from "@/api/applyJobApi";
import { useMutation } from "@tanstack/react-query";

export const useApplyJob = (careerId?: string) => {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      if (!careerId) throw new Error("Career ID is required");
      return applyForJob(formData, careerId);
    },
    onError: (error: Error) => {
      console.error("Error applying for job:", error.message);
      alert("Failed to apply for the job. Please try again later.");
    },
    onSuccess: () => {
      alert("Application submitted successfully!");
    },
  });
};
