import { z } from "zod";

const createBookValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is requiired" }),
    genre: z.string({ required_error: "Genre is requiired" }),
    publishedYear: z.number({ required_error: "publishedYear is requiired" }),
    totalCopies: z.number({ required_error: "totalCopies is requiired" }),
    availableCopies: z.number({
      required_error: "availableCopies is requiired",
    }),
  }),
});

export const bookValidations = {
  createBookValidationSchema,
};
