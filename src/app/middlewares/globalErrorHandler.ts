import { ErrorRequestHandler } from "express";
import handleZodError from "../errors/handleZodError";
import handlePrismaError from "../errors/handlePrismaError";
import handleAppError from "../errors/handleAppError";
import handleGeneralError from "../errors/handleGeneralError";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import AppError from "../errors/appError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong!";

  // Handle Zod validation errors
  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.status;
    message = simplifiedError.message;
  }
  // Handle Prisma errors
  else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const simplifiedError = handlePrismaError(err);
    statusCode = simplifiedError.status;
    message = simplifiedError.message;
  }
  // Handle custom application errors (AppError)
  else if (err instanceof AppError) {
    const simplifiedError = handleAppError(err);
    statusCode = simplifiedError.status;
    message = simplifiedError.message;
  }
  // Handle general JavaScript errors (e.g., TypeError, SyntaxError)
  else {
    const simplifiedError = handleGeneralError(err);
    statusCode = simplifiedError.status;
    message = simplifiedError.message;
  }

  // Send the error response
  return res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
  });
};

export default globalErrorHandler;
