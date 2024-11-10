import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { memberServices } from "./member.service";

const createMember = catchAsync(async (req: Request, res: Response) => {
  const result = await memberServices.createMember(req.body);
  res.status(200).json({
    success: true,
    message: "Member Created successfuly!",
    data: result,
  });
});

export const memberControllers = {
  createMember,
};
