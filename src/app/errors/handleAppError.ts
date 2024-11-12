import AppError from "../errors/appError";
import { TGenericErrorResponse } from "../interfaces/error";

const handleAppError = (err: AppError): TGenericErrorResponse => {
  return {
    success: false,
    status: err.statusCode,
    message: err.message,
  };
};

export default handleAppError;
