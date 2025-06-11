import { useQuery } from "@tanstack/react-query";
import { fetchAllCarrers, fetchCareerById } from "../api/careerApi";

export const useGetAllCareers = () => {
  return useQuery({
    queryKey: ["careers"],
    queryFn: fetchAllCarrers,
  });
};

export const useGetCareerById = (_id: string) => {
  return useQuery({
    queryKey: ["careers"],
    queryFn: () => fetchCareerById(_id),
    enabled: !!_id,
  });
};
