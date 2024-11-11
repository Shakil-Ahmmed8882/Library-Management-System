import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { bookServices } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const result = await bookServices.createBook(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

export const bookControllers = {
  createBook,
};
