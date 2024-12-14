"use client";

import { useSearchParams } from "next/navigation";
import { useBookSearch } from "@/hooks/use-book-search";
import { ITEMS_PER_PAGE } from "@/lib/api";
import { BookCard } from "@/components/BookCard";
import { BookPagination } from "@/components/BookPagination";

export const BookList = () => {
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("p") || "1", 10);
  const query = searchParams.get("q") || "";

  const { data, isError, isFetching, error, isPending } = useBookSearch(
    query,
    page,
  );

  if (error) {
    console.error(error);
  }

  if (!data) return null;

  const maxPage = Math.ceil(data.numFound / ITEMS_PER_PAGE);

  return (
    <div>
      {isPending || isFetching ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Ooops! Something went wrong</div>
      ) : (
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {data.docs.map((doc, index) => (
              <BookCard key={doc.key} book={doc} delay={index} />
            ))}
          </div>
          <BookPagination page={page} query={query} maxPage={maxPage} />
        </div>
      )}
    </div>
  );
};
