import { TGenericErrorResponse } from "../interfaces/error";

const handleGeneralError = (err: any): TGenericErrorResponse => {
  let statusCode = 500;
  let message = "Something went wrong!";

  if (err instanceof TypeError) {
    statusCode = 400;
    message = "Invalid data type encountered.";
  } else if (err instanceof SyntaxError) {
    statusCode = 400;
    message = `Invalid JSON syntax: ${err.message}. Please check the JSON format in the request body.`;
  } else if (err.name === "UnauthorizedError" || err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Unauthorized access or invalid token.";
  } else if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid ID format.";
  } else if (err.name === "RateLimitError") {
    statusCode = 429;
    message = "Too many requests, please try again later.";
  } else {
    message = err.message || "An unknown error occurred.";
  }

  return {
    success: false,
    status: statusCode,
    message,
  };
};

export default handleGeneralError;
