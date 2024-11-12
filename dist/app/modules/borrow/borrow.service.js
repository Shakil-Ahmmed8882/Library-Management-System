"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const appError_1 = __importDefault(require("../../errors/appError"));
const http_status_1 = __importDefault(require("http-status"));
const borrowBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.$transaction((TransactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const book = yield TransactionClient.book.findUnique({
            where: { bookId: payload.bookId },
            select: { availableCopies: true },
        });
        if (!book) {
            throw new appError_1.default(http_status_1.default.NOT_FOUND, "Book not found");
        }
        if (book.availableCopies <= 0) {
            throw new appError_1.default(http_status_1.default.BAD_REQUEST, "No available copies of this book to borrow");
        }
        const memberExists = yield TransactionClient.member.findUnique({
            where: { memberId: payload.memberId },
        });
        if (!memberExists) {
            throw new appError_1.default(http_status_1.default.NOT_FOUND, "Member not found");
        }
        yield TransactionClient.book.update({
            where: { bookId: payload.bookId },
            data: { availableCopies: { increment: -1 } },
        });
        yield TransactionClient.borrowRecord.create({ data: payload });
    }));
});
exports.borrowServices = {
    borrowBook,
};
