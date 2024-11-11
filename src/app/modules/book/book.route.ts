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
router.get("/", bookControllers.getAllBooks);
router.get("/:bookId", bookControllers.getBookById);
router.put(
  "/:bookId",
  validateRequest(bookValidations.updateBookValidationSchema),
  bookControllers.updateBook
);

router.delete("/:bookId", bookControllers.deleteBook);
export const bookRoutes = router;


