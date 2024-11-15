"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (err) => {
    const statusCode = 400;
    // Create a message that summarizes all issues
    const errorCount = `Error: ${err.issues.length}`;
    // Construct an array of issue details to make it easier to log
    const message = err.issues.map((issue, index) => `  (${index + 1}) ----> ${issue.message}`);
    return {
        success: false,
        status: statusCode,
        message: `${errorCount}: ${message}`,
    };
};
exports.default = handleZodError;
