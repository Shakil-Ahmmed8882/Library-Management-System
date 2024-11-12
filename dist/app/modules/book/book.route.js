"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_validation_1 = require("./book.validation");
const book_controller_1 = require("./book.controller");
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(book_validation_1.bookValidations.createBookValidationSchema), book_controller_1.bookControllers.createBook);
router.get("/", book_controller_1.bookControllers.getAllBooks);
router.get("/:bookId", book_controller_1.bookControllers.getBookById);
router.put("/:bookId", (0, validateRequest_1.default)(book_validation_1.bookValidations.updateBookValidationSchema), book_controller_1.bookControllers.updateBook);
router.delete("/:bookId", book_controller_1.bookControllers.deleteBook);
exports.bookRoutes = router;
