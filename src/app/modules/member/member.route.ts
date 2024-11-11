import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { memberValidations } from "./member.validation";
import { memberControllers } from "./member.controller";

const router = Router();

router.post(
  "/",
  validateRequest(memberValidations.createMemberValidationSchema),
  memberControllers.createMember
);

router.post(
  "/",
  validateRequest(memberValidations.createMemberValidationSchema),
  memberControllers.createMember
);

router.get("/", memberControllers.getAllMembers);

router.get("/:memberId", memberControllers.getMemberById);

router.put("/:memberId", memberControllers.updateMember);

router.delete("/:memberId", memberControllers.deleteMember);

export const memberRoutes = router;
