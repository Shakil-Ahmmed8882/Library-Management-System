import { z } from "zod";

const createMemberValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    member: z.object({
      name: z.string({ required_error: "Name is required" }),
      email: z.string({ required_error: "Email is required" }),
      phone: z.string({ required_error: "Phone No. is required" }),
      membershipDate: z.string({
        required_error: "MembershipDate is required",
      }),
    }),
  }),
});
const updateMemberValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    membershipDate: z
      .string()
      .optional(),
  }),
});

export const memberValidations = {
  createMemberValidationSchema,
  updateMemberValidationSchema
};
