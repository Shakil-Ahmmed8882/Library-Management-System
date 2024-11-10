import { z } from "zod";

const createAdminValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    admin: z.object({
      name: z.string({ required_error: "Name is required" }),
      email: z.string({ required_error: "Email is required" }),
      contactNumber: z.string({ required_error: "contactNumber No. is required" }),
    }),
  }),
});

const updateAdminValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    contactNumber: z.string().optional(),
  }),
});

export const adminValidations = {
  createAdminValidationSchema,
  updateAdminValidationSchema,
};
