// middleware/auth.ts

import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";

const auth = (...requiredRoles: (keyof typeof USER_ROLE)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    const { decodedUser } = await validateTokenAndFetchUser(token!);

    // Check if role matches required roles
    if (
      requiredRoles.length &&
      !requiredRoles.includes(decodedUser.role as keyof typeof USER_ROLE)
    ) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    // Attach the user and role to the request object for further use
    req.user = {
      ...decodedUser,
      role: decodedUser.role,
    };

    next();
  });
};

export default auth;

// utils/authUtils.ts
import jwt, { JwtPayload } from "jsonwebtoken";

import AppError from "../errors/appError";
import config from "../../config";
import prisma from "../../shared/prisma";
import { USER_ROLE, USER_STATUS } from "../constants";

// Utility to validate token and fetch user
export const validateTokenAndFetchUser = async (token: string) => {
  if (!token) {
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
  }

  let decodedUser;
  try {
    // Verify the token
    decodedUser = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;
  } catch (error) {
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
  }

  const { email } = decodedUser;

  // Check if the user exists
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found!");
  }

  if (user.status !== USER_STATUS.ACTIVE ) {
    throw new AppError(httpStatus.NOT_FOUND, "Opps! This user is not active.");
  }

  return {
    decodedUser
  };
};
