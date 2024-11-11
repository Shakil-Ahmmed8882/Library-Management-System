import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { returnValidations } from "./return.validation";
import { returnControllers } from "./return.controller";

const router = Router();
router.post(
  "/",
  validateRequest(returnValidations.returnbookValidationSchema),
  returnControllers.returnBook
);

export const returnRoutes = router;
