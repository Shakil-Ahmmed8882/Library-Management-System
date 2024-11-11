import prisma from "../../../shared/prisma";
import { TBook } from "./book.interface";

const createBook = async (payload: TBook) => {
  const result = await prisma.book.create({ data: payload });
  return result;
};

const getAllBooks = async () => {
  const result = await prisma.book.findMany();
  return result;
};

const getBookById = async (bookId: string) => {

  const result = await prisma.book.findUniqueOrThrow({ where: { bookId } });
  return result;
};

const updateBook = async (bookId: string, payload: Partial<TBook>) => {
  const existingBook = await prisma.book.findUnique({ where: { bookId } });
  if (!existingBook) throw new Error("Book not found");

  const result = await prisma.book.update({
    where: { bookId },
    data: payload,
  });
  return result;
};

const deleteBook = async (bookId: string) => {
  const result = await prisma.book.delete({ where: { bookId } });
  return result;
};

export const bookServices = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
