import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { bookValidations } from "./book.validation";
import { bookControllers } from "./book.controller";

const router = Router();

router.post(
  "/",
  validateRequest(bookValidations.createBookValidationSchema),
  bookControllers.createBook
);
export const bookRoutes = router;
