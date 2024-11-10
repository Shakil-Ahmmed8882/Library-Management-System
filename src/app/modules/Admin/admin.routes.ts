import express from "express";
import { adminControllers } from "./admin.controller";
import validateRequest from "../../middlewares/validateRequest";
import { adminValidationSchemas } from "./admin.validations";

const router = express.Router();

router.post("/", adminControllers.createAdmin);
router.get("/", adminControllers.getAllFromDB);

router.get("/:id", adminControllers.getByIdFromDB);

router.patch(
  "/:id",
  validateRequest(adminValidationSchemas.update),
  adminControllers.updateIntoDB
);

router.delete("/:id", adminControllers.deleteFromDB);

router.delete("/soft/:id", adminControllers.softDeleteFromDB);

export const adminRoutes = router;
