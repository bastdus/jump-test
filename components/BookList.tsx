"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useBookSearch } from "@/hooks/use-book-search";
import { ITEMS_PER_PAGE } from "@/lib/api";
import { useSearchParams } from "next/navigation";
import { BookCard } from "./BookCard";

export const BookList = () => {
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("p") || "1", 10);
  const query = searchParams.get("q") || "";

  const { data, isError, isFetching, error, isPending } = useBookSearch(
    query,
    page,
  );

  if (!data || isError) return null;

  const maxPage = Math.ceil(data.numFound / ITEMS_PER_PAGE);

  console.log("DATA", data);

  return (
    <div>
      {isPending && <p>Loading...</p>}
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {data.docs.map((doc) => (
          <BookCard key={doc.key} book={doc} />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          {/* Previous Button */}
          {page > 1 && (
            <PaginationItem>
              <PaginationPrevious href={`?q=${query}&p=${page - 1}`} />
            </PaginationItem>
          )}

          {/* First page anchor */}
          {page >= 3 && (
            <PaginationItem>
              <PaginationLink href={`?q=${query}&p=1`}>1</PaginationLink>
            </PaginationItem>
          )}

          {/* Start ellipsis */}
          {page >= 4 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {/* Page - 1 */}
          {page > 1 && (
            <PaginationItem>
              <PaginationLink href={`?q=${query}&p=${page - 1}`}>
                {page - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Current */}
          <PaginationItem>
            <PaginationLink href={`?q=${query}&p=${page}`} isActive>
              {page}
            </PaginationLink>
          </PaginationItem>

          {/* Page + 1 */}
          {page < maxPage && (
            <PaginationItem>
              <PaginationLink href={`?q=${query}&p=${page + 1}`}>
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {page < maxPage - 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {/* Last page anchor */}
          {page <= maxPage - 2 && (
            <PaginationItem>
              <PaginationLink href={`?q=${query}&p=${maxPage}`}>
                {maxPage}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Next Button */}
          {page < maxPage && (
            <PaginationItem>
              <PaginationNext href={`?q=${query}&p=${page + 1}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};
