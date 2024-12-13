import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const Home = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <main className="flex flex-col gap-6 pt-6">
      <h1 className="mx-auto max-w-2xl px-4 text-center text-4xl font-bold sm:text-6xl">
        Discover our
        <span className="text-primary"> online&nbsp;library,</span>
        <br /> a dedicated resource for book enthusiasts!
      </h1>
      <p className="mx-auto max-w-lg px-4 text-center text-xl">
        Start your search by author, title, or keyword to find your next
        literary inspiration.
      </p>

      <SearchBar />

      {/* card grid */}
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card) => (
          <Card key={card}>
            <CardHeader>
              <CardTitle>Book title</CardTitle>
              <CardDescription>Author name</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://covers.openlibrary.org/b/id/14627060-L.jpg"
                width={300}
                height={200}
                alt="Book cover"
              />
            </CardContent>
            <CardFooter>
              <Button>Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Home;
