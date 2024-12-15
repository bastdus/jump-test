import { BookList } from "@/components/BookList";
import { SearchBar } from "@/components/SearchBar";

const Home = () => {
  return (
    <div className="flex flex-col gap-6">
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
      <BookList />
    </div>
  );
};

export default Home;
