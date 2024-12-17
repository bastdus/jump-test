import { AuthorDetails } from "@/types/author";
import { Book, BookDetails } from "@/types/book";
import { SearchResponse } from "@/types/search";

const API_BASE_URL = "https://openlibrary.org";

const fieldList: (keyof Book)[] = [
  "key",
  "title",
  "author_name",
  "first_publish_year",
  "cover_i",
];

export const ITEMS_PER_PAGE = 10;

/**
 * Use for searching books from OpenLibrary API
 */
export const searchBooks = async (query: string, page: number = 1) => {
  if (!query) return null;

  const offset = (page - 1) * ITEMS_PER_PAGE;

  try {
    const response = await fetch(
      `${API_BASE_URL}/search.json?q=${encodeURIComponent(query)}&limit=${ITEMS_PER_PAGE}&offset=${offset}&fields=${fieldList.join(",")}`,
    );

    if (!response.ok) {
      throw new Error(
        `Http error on 'searchBook' query. Status: ${response.status}`,
      );
    }

    const data: SearchResponse = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error on 'searchBook' query: ${error}`);
  }
};

/**
 * Use for fetching book details from OpenLibrary API
 * @param key - ex: "OL45883W"
 */
export const fetchBook = async (key: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/works/${key}.json`);

    const data: BookDetails = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error on 'fetchBook' query: ${error}`);
  }
};

/**
 * Use for fetching auhtor details from OpenLibrary API
 * @param key - ex: "/authors/OL34184A"
 */
export const fetchAuthor = async (key: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}${key}.json`);

    const data: AuthorDetails = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error on 'fetchBook' query: ${error}`);
  }
};
