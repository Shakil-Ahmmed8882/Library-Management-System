import express from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { loginValidations } from "./auth.validation";

const router = express.Router();

router.post(
  "/login",
  validateRequest(loginValidations.loginValidationSchema),
  AuthController.loginUser
);

router.post("/refresh-token", AuthController.refreshToken);

export const authRoutes = router;
