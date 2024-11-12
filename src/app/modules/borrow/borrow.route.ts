import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { borrowValidations } from "./borrow.validation";
import { borrowControllers } from "./borrow.controller";

const router = Router();

router.post(
  "/",
  validateRequest(borrowValidations.borrowBookValidationSchema),
  borrowControllers.borrowBook
);

router.get("/overdue", borrowControllers.getOverdueBooks);

export const borrowRoutes = router;
