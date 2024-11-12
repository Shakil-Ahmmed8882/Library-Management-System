"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const admin_validations_1 = require("./admin.validations");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(admin_validations_1.adminValidations.createAdminValidationSchema), admin_controller_1.adminControllers.createAdmin);
router.get("/", admin_controller_1.adminControllers.getAllFromDB);
router.get("/:id", admin_controller_1.adminControllers.getByIdFromDB);
router.patch("/:id", (0, validateRequest_1.default)(admin_validations_1.adminValidations.updateAdminValidationSchema), admin_controller_1.adminControllers.updateIntoDB);
router.delete("/:id", admin_controller_1.adminControllers.deleteFromDB);
router.delete("/soft/:id", admin_controller_1.adminControllers.softDeleteFromDB);
exports.adminRoutes = router;
