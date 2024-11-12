"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowValidations = void 0;
const zod_1 = require("zod");
const borrowBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        bookId: zod_1.z.string({ required_error: "bookId is required" }),
        memberId: zod_1.z.string({ required_error: "memberId is required" }),
    }),
});
exports.borrowValidations = {
    borrowBookValidationSchema,
};
