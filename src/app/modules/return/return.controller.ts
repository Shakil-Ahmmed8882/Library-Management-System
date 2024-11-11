import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { returnServices } from "./return.service";
import sendResponse from "../../../shared/sendResponse";

const returnBook = catchAsync(async (req, res) => {
  await returnServices.returnBook(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book returned successfully",
  });
});

export const returnControllers = {
  returnBook,
};
