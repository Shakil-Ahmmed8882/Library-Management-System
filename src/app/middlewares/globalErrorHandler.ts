/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

// import handleDuplicateError from '../errors/handleDuplicateError';
// import handleValidationError from '../errors/handleValidationError';
import handleZodError from "../errors/handleZodError";
import AppError from "../errors/appError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //setting default values
  let statusCode = 500;
  let message = "Something went wrong!";

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.status;
    message = simplifiedError?.message;
  }

  //   else if (err?.code === 11000) {
  //     const simplifiedError = handleDuplicateError(err);
  //     statusCode = simplifiedError?.statusCode;
  //     message = simplifiedError?.message;
  //     errorSources = simplifiedError?.errorSources;
  //   }
  
  else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err.message;
  } else if (err instanceof Error) {
    message = err.message;
  }

  //ultimate return
  return res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
  });
};

export default globalErrorHandler;
