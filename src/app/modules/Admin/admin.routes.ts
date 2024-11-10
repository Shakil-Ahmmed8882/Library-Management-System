import express from "express";
import { adminControllers } from "./admin.controller";
import validateRequest from "../../middlewares/validateRequest";
import { adminValidations } from "./admin.validations";

const router = express.Router();

router.post(
  "/",
  validateRequest(adminValidations.createAdminValidationSchema),
  adminControllers.createAdmin
);
router.get("/", adminControllers.getAllFromDB);

router.get("/:id", adminControllers.getByIdFromDB);

router.patch(
  "/:id",
  validateRequest(adminValidations.updateAdminValidationSchema),
  adminControllers.updateIntoDB
);

router.delete("/:id", adminControllers.deleteFromDB);

router.delete("/soft/:id", adminControllers.softDeleteFromDB);

export const adminRoutes = router;
