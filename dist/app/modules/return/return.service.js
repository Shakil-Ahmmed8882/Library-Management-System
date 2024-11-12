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
exports.returnServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const appError_1 = __importDefault(require("../../errors/appError"));
const http_status_1 = __importDefault(require("http-status"));
const returnBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.$transaction((TransactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        // Get borrow record by provided borowId
        const borrowRecord = yield TransactionClient.borrowRecord.findUnique({
            where: { borrowId: payload.borrowId },
        });
        if (!borrowRecord) {
            throw new appError_1.default(http_status_1.default.NOT_FOUND, "Opps This record is not found");
        }
        // Get book from found borrow record
        const book = yield TransactionClient.book.findUnique({
            where: { bookId: borrowRecord.bookId },
        });
        if (!book) {
            throw new appError_1.default(http_status_1.default.NOT_FOUND, "Opps This book is not found");
        }
        // Reurn book updating return date 
        yield TransactionClient.borrowRecord.update({
            where: { borrowId: payload.borrowId },
            data: { returnDate: new Date() },
        });
        // After return, update available copy + 1 
        yield TransactionClient.book.update({
            where: { bookId: borrowRecord.bookId },
            data: { availableCopies: { increment: 1 } },
        });
    }));
});
exports.returnServices = {
    returnBook,
};
