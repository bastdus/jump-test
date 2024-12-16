import { BackNavigationButton } from "@/components/BackNavigationButton";
import { DevIndicators } from "@/components/DevIndicators";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { BookDetails } from "@/types/book";
import Image from "next/image";

const BookPage = async ({ params: { id } }: { params: { id: string } }) => {
  const bookResponse = await fetch(`https://openlibrary.org/works/${id}.json`);
  const bookDetails = (await bookResponse.json()) as BookDetails;

  const authorKey = bookDetails.authors[0].author.key;
  const authorResponse = await fetch(
    `https://openlibrary.org${authorKey}.json`,
  );
  const authorDetails = await authorResponse.json();

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
          <div className="absolute left-4 top-4 z-10">
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
        <div className="flex w-full flex-col lg:h-full lg:w-1/2">
          <ScrollArea className="px-6 lg:px-12">
            <div className="space-y-6 py-6">
              <div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                  {bookDetails.title}
                </h1>
                <p className="mt-2 text-xl text-muted-foreground lg:text-2xl">
                  {authorDetails.name}
                </p>
              </div>

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
      </div>

      <DevIndicators />
    </>
  );
};

export default BookPage;
