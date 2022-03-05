import { getAirLinesData } from "app/queries";
import { useQuery } from "react-query";

export const useAirlinesData = () =>
  useQuery(`airlines-info`, () => getAirLinesData(), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
