import { UserRole } from "@prisma/client";
import prisma from "../../../shared/prisma";
import bcrypt from "bcrypt";

const createMember = async (data: any) => {
  const hashedPassword: string = await bcrypt.hash(data.password, 12);

  const userData = {
    email: data.member.email,
    password: hashedPassword,
    role: UserRole.MEMBER,
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.user.create({
      data: userData,
    });

    const createdMemberData = await transactionClient.member.create({
      data: data.member,
    });

    return createdMemberData;
  });

  return result;
};

export const memberServices = {
  createMember,
};