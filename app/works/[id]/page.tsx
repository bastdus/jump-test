import { BackNavigationButton } from "@/components/BackNavigationButton";
import { DevIndicators } from "@/components/DevIndicators";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { fetchAuthor, fetchBook } from "@/lib/queries";
import Image from "next/image";

const BookPage = async ({ params: { id } }: { params: { id: string } }) => {
  const bookDetails = await fetchBook(id);
  const authorKey = bookDetails.authors[0].author.key;

  const authorDetails = await fetchAuthor(authorKey);

  const regex = /\r\n|\n|\r|\r\n|\n\r/g;

  const getDescription = (): string[] | null => {
    if (
      typeof bookDetails.description === "object" &&
      "value" in bookDetails.description
    ) {
      return bookDetails.description.value.split(regex).filter(Boolean);
    }
    if (typeof bookDetails.description === "string") {
      return bookDetails.description.split(regex).filter(Boolean);
    }
    return null;
  };

  const description = getDescription();

  return (
    <>
      <div className="-mt-12 lg:flex lg:h-[calc(100vh-4rem)] lg:flex-row">
        {/* Image Section */}
        <div className="relative h-[calc(100vh/2)] w-full lg:h-full lg:w-1/2">
          <div className="fixed left-2 top-20 z-10 lg:absolute lg:-left-2 lg:top-4">
            <BackNavigationButton />
          </div>

          <Image
            src={`${bookDetails.covers?.[0] ? `https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg` : "/images/no_cover.jpg"}`}
            alt="Couverture du livre"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent to-40% lg:bg-gradient-to-l" />
        </div>

        {/* Content Section */}
        <ScrollArea className="w-full px-6 lg:h-full lg:w-1/2 lg:px-8">
          <div className="space-y-4 py-6">
            <h1 className="line-clamp-2 text-4xl font-bold tracking-tight lg:text-6xl">
              {bookDetails.title}
            </h1>
            <p className="mt-2 line-clamp-2 text-xl text-muted-foreground lg:text-2xl">
              {authorDetails.name}
            </p>

            <Badge variant="secondary" className="rounded-full text-base">
              {bookDetails.first_publish_date}
            </Badge>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Description</h2>
              {description ? (
                description.map((desc, index) => (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-muted-foreground"
                  >
                    {desc}
                  </p>
                ))
              ) : (
                <p>No description available</p>
              )}
            </div>
          </div>
        </ScrollArea>
      </div>

      <DevIndicators />
    </>
  );
};

export default BookPage;
