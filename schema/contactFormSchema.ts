import * as z from "zod";

export const contactFormSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters.")
    .max(100, "Title must not exceed 100 characters."),
  email: z.string().email("Please enter a valid email address."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description must not exceed 1000 characters"),
});
