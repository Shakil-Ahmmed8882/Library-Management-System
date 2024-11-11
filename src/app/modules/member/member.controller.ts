import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { memberServices } from "./member.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createMember = catchAsync(async (req: Request, res: Response) => {
  const result = await memberServices.createMember(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member Created successfuly!",
    data: result,
  });
});

const getAllMembers = catchAsync(async (req: Request, res: Response) => {
  const result = await memberServices.getAllMembers();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Members retrieved successfully!",
    data: result,
  });
});

const getMemberById = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await memberServices.getMemberById(memberId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await memberServices.updateMember(memberId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  await memberServices.deleteMember(memberId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member successfully deleted",
  });
});

export const memberControllers = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
};
