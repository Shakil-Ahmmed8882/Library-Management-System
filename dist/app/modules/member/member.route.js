"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const member_validation_1 = require("./member.validation");
const member_controller_1 = require("./member.controller");
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(member_validation_1.memberValidations.createMemberValidationSchema), member_controller_1.memberControllers.createMember);
router.post("/", (0, validateRequest_1.default)(member_validation_1.memberValidations.createMemberValidationSchema), member_controller_1.memberControllers.createMember);
router.get("/", member_controller_1.memberControllers.getAllMembers);
router.get("/:memberId", member_controller_1.memberControllers.getMemberById);
router.put("/:memberId", member_controller_1.memberControllers.updateMember);
router.delete("/:memberId", member_controller_1.memberControllers.deleteMember);
exports.memberRoutes = router;
