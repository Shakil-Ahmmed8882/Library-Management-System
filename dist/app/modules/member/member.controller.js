"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberControllers = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const member_service_1 = require("./member.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const createMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.createMember(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Member Created successfuly!",
        data: result,
    });
}));
const getAllMembers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.getAllMembers();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Members retrieved successfully!",
        data: result,
    });
}));
const getMemberById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.memberServices.getMemberById(memberId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Member retrieved successfully",
        data: result,
    });
}));
const updateMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.memberServices.updateMember(memberId, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Member updated successfully",
        data: result,
    });
}));
const deleteMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    yield member_service_1.memberServices.deleteMember(memberId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Member successfully deleted",
    });
}));
exports.memberControllers = {
    createMember,
    getAllMembers,
    getMemberById,
    updateMember,
    deleteMember,
};
