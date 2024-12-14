import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { searchBooks } from "@/lib/api";

export const useBookSearch = (query: string, page: number) => {
  const staleTime = 1000 * 60 * 30; // 30 minutes

  return useQuery({
    queryKey: ["books", query, page],
    queryFn: () => searchBooks(query, page),
    enabled: query !== "" && page > 0,
    placeholderData: keepPreviousData,
    staleTime,
  });
};
