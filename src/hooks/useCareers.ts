import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAllCarrers, fetchCareerById } from "../api/careerApi";

export const useGetAllCareers = () => {
  return useQuery({
    queryKey: ["careers"],
    queryFn: fetchAllCarrers,
  });
};

export const useGetCareerById = (id: string) => {
  return useQuery({
    queryKey: ["careers"],
    queryFn: () => fetchCareerById(id),
    enabled: !!id,
  });
};

export const useDeleteCareer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}careers/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["careers"] });
    },
    onError: (err: Error) => {
      alert("Failed to delete career. Please try again later." + err.message);
    },
  });
};
