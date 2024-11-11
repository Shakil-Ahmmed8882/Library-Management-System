import { z } from "zod";

const returnbookValidationSchema = z.object({
  body: z.object({
    borrowId: z.string({ required_error: "borrowId is reuired" }),
  }),
});

export const returnValidations = {
  returnbookValidationSchema,
};
