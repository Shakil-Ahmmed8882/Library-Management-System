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
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "No available copies of this book to borrow"
      );
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

// controllers/overdueController.ts
export const getOverdueBooks = async () => {
  const overdueBooks = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        // we calculate 14 days is the maximum range of duedate
        lt: new Date(new Date().setDate(new Date().getDate() - 14)),
      },
    },
    select: {
      borrowId: true,
      book: {
        select: { title: true },
      },
      member: {
        select: { name: true },
      },
      borrowDate: true,
    },
  });

  // Map the results to match the required format
  const formattedOverdueBooks = overdueBooks.map((record) => {
    const overdueDays = Math.floor(
      (new Date().getTime() - new Date(record.borrowDate).getTime()) /
        (1000 * 60 * 60 * 24)

      /*
          - getTime() gives the timestamp in milliseconds.
          - Subtraction of two timestamps gives the difference in milliseconds.
          - Dividing by 86400000 converts milliseconds into days.
          - Math.floor() ensures we get the whole number of days, ignoring fractions.
        */
      /*
        - 1000 milliseconds = 1 second.
        - 60 seconds = 1 minute.
        - 60 minutes = 1 hour.
        - 24 hours = 1 day.
      */
    );

    return {
      borrowId: record.borrowId,
      bookTitle: record.book.title,
      borrowerName: record.member.name,
      overdueDays,
    };
  });

  return formattedOverdueBooks;
};

export const borrowServices = {
  borrowBook,
  getOverdueBooks,
};
