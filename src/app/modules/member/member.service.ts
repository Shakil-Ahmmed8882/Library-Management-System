import { Member, UserRole } from "@prisma/client";
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

const getAllMembers = async () => {
  const result = await prisma.member.findMany();
  return result;
};

const getMemberById = async (memberId: string) => {
  const result = await prisma.member.findUniqueOrThrow({ where: { memberId } });
  return result;
};

const updateMember = async (memberId: string, payload: Member) => {
  const result = await prisma.member.update({
    where: { memberId },
    data: payload,
  });
  return result;
};

const deleteMember = async (memberId: string) => {
  const result = await prisma.member.delete({ where: { memberId } });
  return result;
};

export const memberServices = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
};
