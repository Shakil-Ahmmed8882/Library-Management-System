import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { borrowServices } from "./borrow.service";

const borrowBook = catchAsync(async (req, res) => {
  await borrowServices.borrowBook(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book borrowed successfully",
  });
});

export const borrowControllers = {
  borrowBook,
};
