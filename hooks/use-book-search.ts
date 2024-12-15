import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { searchBooks } from "@/lib/queries";

export const useBookSearch = (query: string, page: number) => {
  return useQuery({
    queryKey: ["books", query, page],
    queryFn: () => searchBooks(query, page),
    placeholderData: keepPreviousData,
  });
};
