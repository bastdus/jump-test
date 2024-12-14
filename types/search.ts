import { Book } from "./book";

export type SearchResponse = {
  numFound: number;
  start: number;
  docs: Book[];
};
