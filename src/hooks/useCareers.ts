import { useQuery } from "@tanstack/react-query";
import { fetchCarrers } from "../api/careerApi";

export const useGetAllCareers = () => {
  return useQuery({
    queryKey: ["careers"],
    queryFn: fetchCarrers,
  });
};
