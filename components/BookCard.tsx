import { Book } from "@/types/book";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type BookCardProps = {
  book: Book;
  delay?: number;
};

export const BookCard = ({ book, delay = 0 }: BookCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 100);

    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <Card
      className={cn(
        `-z-10 flex h-full flex-col overflow-hidden transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
      )}
    >
      <CardHeader className="p-0">
        <AspectRatio ratio={3 / 4}>
          <Image
            className="object-cover"
            src={`${book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : "/images/no_cover.jpg"}`}
            alt={`Cover of ${book.title}`}
            loading="lazy"
            fill
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="line-clamp-2">{book.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {book.author_name}
        </CardDescription>
        <p className="text-xs text-muted-foreground">
          {book.first_publish_year}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href="/">Voir le livre</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
