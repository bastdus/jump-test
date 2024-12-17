"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { searchBarSchema } from "@/schema/searchBarSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

export const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof searchBarSchema>>({
    resolver: zodResolver(searchBarSchema),
    defaultValues: {
      query: searchParams.get("q") || "",
    },
  });

  const onSubmit = (values: z.infer<typeof searchBarSchema>) => {
    if (values.query === "") {
      router.push("/");
    } else {
      const searchParams = new URLSearchParams();
      searchParams.set("q", values.query);
      searchParams.set("p", "1");
      router.push(`/?${searchParams.toString()}`);
    }
    return;
  };

  return (
    <div className="sticky top-16 z-10 w-full items-center bg-background px-4 pb-5 pt-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center justify-center gap-2"
        >
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="w-full max-w-lg">
                <FormControl>
                  <Input
                    {...field}
                    autoFocus
                    id="query"
                    type="text"
                    placeholder="Les Misérables, Victor Hugo..."
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">
            <Search />
            <span className="hidden font-bold sm:block">Search</span>
          </Button>
        </form>
      </Form>
    </div>
  );
};
