export type Book = {
  cover_i: number;
  title: string;
  author_name: string[];
  first_publish_year: number;
  key: string;
};

export type BookDetails = {
  title: string;
  description?: string | { value: string };
  first_publish_date?: string;
  links?: [{ title: string; url: string }];
  covers?: number[];
  authors: [{ author: { key: string } }];
};
