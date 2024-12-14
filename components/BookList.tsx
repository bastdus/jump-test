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
        <>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {data.docs.map((doc, index) => (
                <BookCard key={doc.key} book={doc} delay={index} />
              ))}
            </div>
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
        </>
      )}
    </div>
  );
};
