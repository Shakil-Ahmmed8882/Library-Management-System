"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberValidations = void 0;
const zod_1 = require("zod");
const createMemberValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string(),
        member: zod_1.z.object({
            name: zod_1.z.string({ required_error: "Name is required" }),
            email: zod_1.z.string({ required_error: "Email is required" }),
            phone: zod_1.z.string({ required_error: "Phone No. is required" }),
            membershipDate: zod_1.z.string({ required_error: "MembershipDate is required" }),
        }),
    }),
});
exports.memberValidations = {
    createMemberValidationSchema,
};
