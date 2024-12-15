"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const [query, setQuery] = useState(q);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query) {
      // add search params to the URL
      const searchParams = new URLSearchParams();
      searchParams.set("q", query);
      searchParams.set("p", "1");
      router.push(`/?${searchParams.toString()}`);
    } else {
      // remove search params from the URL
      router.push("/");
      return;
    }
  };

  return (
    <div className="sticky top-16 w-full items-center bg-background px-4 pb-5 pt-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-2"
      >
        <Input
          autoFocus
          id="search"
          type="text"
          placeholder="Les Misérables, Victor Hugo..."
          className="max-w-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">
          <Search />
          <span className="hidden font-bold sm:block">Search</span>
        </Button>
      </form>
    </div>
  );
};
