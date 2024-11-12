"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const return_validation_1 = require("./return.validation");
const return_controller_1 = require("./return.controller");
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(return_validation_1.returnValidations.returnbookValidationSchema), return_controller_1.returnControllers.returnBook);
exports.returnRoutes = router;
