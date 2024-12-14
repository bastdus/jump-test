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
import { useState } from "react";
import { Button } from "./ui/button";

export const BookCard = ({ book }: { book: Book }) => {
  const [error, setError] = useState(false);

  return (
    <Card key={book.key}>
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>{book.author_name}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={`${error ? "/images/no_cover.jpg" : `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg?default=false`}`}
          width={300}
          height={200}
          alt="Book cover"
          onError={() => setError(true)}
          loading="lazy"
        />
      </CardContent>
      <CardFooter>
        <Button>Details</Button>
      </CardFooter>
    </Card>
  );
};
