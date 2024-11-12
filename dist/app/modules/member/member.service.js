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
exports.memberServices = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createMember = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcrypt_1.default.hash(data.password, 12);
    const userData = {
        email: data.member.email,
        password: hashedPassword,
        role: client_1.UserRole.MEMBER,
    };
    const result = yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield transactionClient.user.create({
            data: userData,
        });
        const createdMemberData = yield transactionClient.member.create({
            data: data.member,
        });
        return createdMemberData;
    }));
    return result;
});
const getAllMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.findMany();
    return result;
});
const getMemberById = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.findUniqueOrThrow({ where: { memberId } });
    return result;
});
const updateMember = (memberId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.update({
        where: { memberId },
        data: payload,
    });
    return result;
});
const deleteMember = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.delete({ where: { memberId } });
    return result;
});
exports.memberServices = {
    createMember,
    getAllMembers,
    getMemberById,
    updateMember,
    deleteMember,
};
