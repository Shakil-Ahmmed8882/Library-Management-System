import { BorrowRecord } from "@prisma/client";
import prisma from "../../../shared/prisma";
import AppError from "../../errors/appError";
import httpStatus from "http-status";

const returnBook = async (payload: BorrowRecord) => {
  await prisma.$transaction(async (TransactionClient) => {

    // Get borrow record by provided borowId
    const borrowRecord = await TransactionClient.borrowRecord.findUnique({
      where: { borrowId: payload.borrowId },
    });

    if(!borrowRecord){
        throw new AppError(httpStatus.NOT_FOUND, "Opps This record is not found")
    }
    
    // Get book from found borrow record
    const book = await TransactionClient.book.findUnique({
        where: { bookId: borrowRecord.bookId},
    });
    
    if(!book){
        throw new AppError(httpStatus.NOT_FOUND, "Opps This book is not found")
    }


    // Reurn book updating return date 
    await TransactionClient.borrowRecord.update({
      where: { borrowId: payload.borrowId },
      data: { returnDate: new Date() },
    });

    // After return, update available copy + 1 
    await TransactionClient.book.update({
      where: { bookId: borrowRecord.bookId },
      data: { availableCopies: { increment: 1 } },
    });
  });
};

export const returnServices = {
  returnBook,
};
