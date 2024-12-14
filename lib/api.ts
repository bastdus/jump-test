import { SearchResponse } from "@/types/search";

const API_BASE_URL = "https://openlibrary.org";
export const ITEMS_PER_PAGE = 10;

export const searchBooks = async (query: string, page: number = 1) => {
  if (!query) return null;

  const offset = (page - 1) * ITEMS_PER_PAGE;

  try {
    const response = await fetch(
      `${API_BASE_URL}/search.json?q=${encodeURIComponent(query)}&limit=${ITEMS_PER_PAGE}&offset=${offset}`,
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
