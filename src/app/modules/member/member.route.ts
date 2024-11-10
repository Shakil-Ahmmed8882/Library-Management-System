import { Router } from "express";
import { memberControllers } from "./member.controller";

const router = Router();

router.post("/", memberControllers.createMember);

export const memberRoutes = router;
