"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminValidations = void 0;
const zod_1 = require("zod");
const createAdminValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string(),
        admin: zod_1.z.object({
            name: zod_1.z.string({ required_error: "Name is required" }),
            email: zod_1.z.string({ required_error: "Email is required" }),
            contactNumber: zod_1.z.string({ required_error: "contactNumber No. is required" }),
        }),
    }),
});
const updateAdminValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        contactNumber: zod_1.z.string().optional(),
    }),
});
exports.adminValidations = {
    createAdminValidationSchema,
    updateAdminValidationSchema,
};
