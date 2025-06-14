import { fetchAllWorks, fetchWorkById } from "@/api/workApi";
import { useQuery } from "@tanstack/react-query";

export const useGetAllWorks = () => {
  return useQuery({
    queryKey: ["works"],
    queryFn: fetchAllWorks,
  });
};

export const useGetWorkById = (id: string) => {
  return useQuery({
    queryKey: ["works"],
    queryFn: () => fetchWorkById(id),
    enabled: !!id,
  });
};
