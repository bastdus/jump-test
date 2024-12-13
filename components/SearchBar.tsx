"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const SearchBar = () => {
  const submit = () => {
    console.log("Search");
  };
  return (
    // <div className="sticky top-16 w-full items-center bg-gradient-to-t from-transparent to-background to-10% px-4 pb-5 pt-4">
    <div className="sticky top-16 w-full items-center bg-background px-4 pb-5 pt-4">
      <div className="flex items-center justify-center gap-2">
        <Input
          id="search"
          type="text"
          placeholder="Les Misérables, Victor Hugo..."
          className="max-w-lg"
        />
        <Button onClick={submit}>
          <Search className="sm:hidden" />
          <span className="hidden font-bold sm:block">Search</span>
        </Button>
      </div>
    </div>
  );
};
