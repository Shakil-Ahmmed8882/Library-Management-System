import { BorrowRecord } from "@prisma/client";
import prisma from "../../../shared/prisma";
import AppError from "../../errors/appError";
import httpStatus from "http-status";

const borrowBook = async (payload: BorrowRecord) => {
  await prisma.$transaction(async (TransactionClient) => {
    const book = await TransactionClient.book.findUnique({
      where: { bookId: payload.bookId },
      select: { availableCopies: true },
    });

    if (!book) {
      throw new AppError(httpStatus.NOT_FOUND, "Book not found");
    }
    if (book.availableCopies <= 0) {
      throw new AppError(httpStatus.BAD_REQUEST, "No available copies of this book to borrow");
    }


      
    const memberExists = await TransactionClient.member.findUnique({
      where: { memberId: payload.memberId },
    });
    if (!memberExists) {
      throw new AppError(httpStatus.NOT_FOUND, "Member not found");
    }


    await TransactionClient.book.update({
      where: { bookId: payload.bookId },
      data: { availableCopies: { increment: -1 } },
    });

    await TransactionClient.borrowRecord.create({ data: payload });
  });
};

export const borrowServices = {
  borrowBook,
};
