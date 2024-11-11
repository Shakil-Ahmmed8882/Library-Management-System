import prisma from "../../../shared/prisma";
import { TBook } from "./book.interface";

const createBook = async (payload: TBook) => {
  const result = await prisma.book.create({ data: payload });
  return result;
};


export const bookServices = {
    createBook,
}