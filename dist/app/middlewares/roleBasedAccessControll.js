"use strict";
// middleware/auth.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTokenAndFetchUser = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const auth = (...requiredRoles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        const { decodedUser } = yield (0, exports.validateTokenAndFetchUser)(token);
        // Check if role matches required roles
        if (requiredRoles.length &&
            !requiredRoles.includes(decodedUser.role)) {
            throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
        }
        // Attach the user and role to the request object for further use
        req.user = Object.assign(Object.assign({}, decodedUser), { role: decodedUser.role });
        next();
    }));
};
exports.default = auth;
// utils/authUtils.ts
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const appError_1 = __importDefault(require("../errors/appError"));
const config_1 = __importDefault(require("../../config"));
const prisma_1 = __importDefault(require("../../shared/prisma"));
const constants_1 = require("../constants");
// Utility to validate token and fetch user
const validateTokenAndFetchUser = (token) => __awaiter(void 0, void 0, void 0, function* () {
    if (!token) {
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
    }
    let decodedUser;
    try {
        // Verify the token
        decodedUser = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
    }
    catch (error) {
        throw new appError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
    }
    const { email } = decodedUser;
    // Check if the user exists
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "This user is not found!");
    }
    if (user.status !== constants_1.USER_STATUS.ACTIVE) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Opps! This user is not active.");
    }
    return {
        decodedUser
    };
});
exports.validateTokenAndFetchUser = validateTokenAndFetchUser;
