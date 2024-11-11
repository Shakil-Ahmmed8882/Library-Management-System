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

const updateBookValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is requiired" }).optional(),
    genre: z.string({ required_error: "Genre is requiired" }).optional(),
    publishedYear: z
      .number({ required_error: "publishedYear is requiired" })
      .optional(),
    totalCopies: z
      .number({ required_error: "totalCopies is requiired" })
      .optional(),
    availableCopies: z
      .number({
        required_error: "availableCopies is requiired",
      })
      .optional(),
  }),
});

export const bookValidations = {
  createBookValidationSchema,
  updateBookValidationSchema
};
