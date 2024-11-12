"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// import handleDuplicateError from '../errors/handleDuplicateError';
// import handleValidationError from '../errors/handleValidationError';
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
const appError_1 = __importDefault(require("../errors/appError"));
const globalErrorHandler = (err, req, res, next) => {
    //setting default values
    let statusCode = 500;
    let message = "Something went wrong!";
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.status;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
    }
    //   else if (err?.code === 11000) {
    //     const simplifiedError = handleDuplicateError(err);
    //     statusCode = simplifiedError?.statusCode;
    //     message = simplifiedError?.message;
    //     errorSources = simplifiedError?.errorSources;
    //   }
    else if (err instanceof appError_1.default) {
        statusCode = err === null || err === void 0 ? void 0 : err.statusCode;
        message = err.message;
    }
    else if (err instanceof Error) {
        message = err.message;
    }
    //ultimate return
    return res.status(statusCode).json({
        success: false,
        status: statusCode,
        message,
    });
};
exports.default = globalErrorHandler;
