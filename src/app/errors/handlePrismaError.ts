import { Prisma } from "@prisma/client"; // Import Prisma error types
import { TGenericErrorResponse } from "../interfaces/error"; // Assuming you have a generic error response interface

const handlePrismaError = (
  err: Prisma.PrismaClientKnownRequestError
): TGenericErrorResponse => {
  let statusCode = 500;
  let message = "Something went wrong with the database operation.";

  switch (err.code) {
    //(duplicate entry)
    case "P2002":
      statusCode = 400;
      message = `${err.meta?.target} must be unique. This value is already in use.`;
      break;
    // Record not found
    case "P2025":
      statusCode = 404;
      message = "The requested record could not be found.";
      break;
    //   Foreign key constraint failure
    case "P2003":
      statusCode = 400;
      message = `Foreign key constraint violation: Unable to delete or update this record due to references.`;
      break;
    // Invalid data format
    case "P2004":
      statusCode = 400;
      message = "Invalid data format or missing required fields.";
      break;
    // Failed to connect to the database
    case "P2016":
      statusCode = 500;
      message = "Database connection error. Please try again later.";
      break;
    // Fallback for other errors
    default:
      statusCode = 500;
      message = "Database error: " + err.message;
      break;
  }

  // Return a structured error response
  return {
    success: false,
    status: statusCode,
    message,
  };
};

export default handlePrismaError;
