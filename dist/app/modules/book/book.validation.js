"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidations = void 0;
const zod_1 = require("zod");
const createBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: "Title is requiired" }),
        genre: zod_1.z.string({ required_error: "Genre is requiired" }),
        publishedYear: zod_1.z.number({ required_error: "publishedYear is requiired" }),
        totalCopies: zod_1.z.number({ required_error: "totalCopies is requiired" }),
        availableCopies: zod_1.z.number({
            required_error: "availableCopies is requiired",
        }),
    }),
});
const updateBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: "Title is requiired" }).optional(),
        genre: zod_1.z.string({ required_error: "Genre is requiired" }).optional(),
        publishedYear: zod_1.z
            .number({ required_error: "publishedYear is requiired" })
            .optional(),
        totalCopies: zod_1.z
            .number({ required_error: "totalCopies is requiired" })
            .optional(),
        availableCopies: zod_1.z
            .number({
            required_error: "availableCopies is requiired",
        })
            .optional(),
    }),
});
exports.bookValidations = {
    createBookValidationSchema,
    updateBookValidationSchema
};
