"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnValidations = void 0;
const zod_1 = require("zod");
const returnbookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        borrowId: zod_1.z.string({ required_error: "borrowId is reuired" }),
    }),
});
exports.returnValidations = {
    returnbookValidationSchema,
};
