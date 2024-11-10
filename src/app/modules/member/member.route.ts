import { Router } from "express";
import { memberControllers } from "./member.controller";
import validateRequest from "../../middlewares/validateRequest";
import { memberValidations } from "./member.validation";

const router = Router();

router.post(
  "/",
  validateRequest(memberValidations.createMemberValidationSchema),
  memberControllers.createMember
);

export const memberRoutes = router;
