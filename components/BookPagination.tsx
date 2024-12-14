import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type BookPaginationProps = {
  page: number;
  query: string;
  maxPage: number;
};

export const BookPagination = ({
  page,
  query,
  maxPage,
}: BookPaginationProps) => {
  return (
    <Pagination className="my-8">
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
  );
};
