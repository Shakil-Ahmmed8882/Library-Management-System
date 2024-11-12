import { ZodError, ZodIssue } from "zod";
import { TGenericErrorResponse } from "../interfaces/error";

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const statusCode = 400;

  // Create a message that summarizes all issues

  const errorName = () => {
    let foundError: string[] = [];
    err.errors.forEach((error) => {
      foundError.push(`${error.path.pop()}`);
    });

    return foundError;
  };

  const errorCount = `Error: ${err.issues.length}, ${errorName()}`;

  // Construct an array of issue details to make it easier to log
  const message = err.issues.map(
    (issue: ZodIssue, index) => `  (${index + 1}) ----> ${issue.message}`
  );

  return {
    success: false,
    status: statusCode,
    message: `${errorCount}: ${message}`,
  };
};

export default handleZodError;
