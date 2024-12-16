"use client";

import { useSearchParams } from "next/navigation";
import { useBookSearch } from "@/hooks/use-book-search";
import { ITEMS_PER_PAGE } from "@/lib/queries";
import { BookCard, BookCardSkeleton } from "@/components/BookCard";
import { BookPagination } from "@/components/BookPagination";
import { SearchX } from "lucide-react";

export const BookList = () => {
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("p") || "1") || 1;
  const query = searchParams.get("q") || "";

  const { data, isError, isFetching, isPending } = useBookSearch(query, page);

  if (!data) {
    return null;
  }

  const maxPage = Math.ceil(data.numFound / ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto">
      {isPending || isFetching ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <BookCardSkeleton repeat={10} />
        </div>
      ) : isError ? (
        <div>Ooops! Something went wrong</div>
      ) : (
        <div>
          {data.docs.length === 0 && (
            <div className="mt-4 flex items-center justify-center gap-2">
              <SearchX />
              No books found
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {data.docs.map((doc, index) => (
              <BookCard key={doc.key} book={doc} delay={index} />
            ))}
          </div>
          {data.docs.length > 0 && (
            <BookPagination page={page} query={query} maxPage={maxPage} />
          )}
          <div />
        </div>
      )}
    </div>
  );
};
