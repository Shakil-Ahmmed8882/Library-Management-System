"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_routes_1 = require("../modules/admin/admin.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const member_route_1 = require("../modules/member/member.route");
const book_route_1 = require("../modules/book/book.route");
const return_route_1 = require("../modules/return/return.route");
const borrow_route_1 = require("../modules/borrow/borrow.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/admins",
        route: admin_routes_1.adminRoutes,
    },
    {
        path: "/auths",
        route: auth_routes_1.authRoutes,
    },
    {
        path: "/members",
        route: member_route_1.memberRoutes,
    },
    {
        path: "/books",
        route: book_route_1.bookRoutes,
    },
    {
        path: "/borrow",
        route: borrow_route_1.borrowRoutes,
    },
    {
        path: "/return",
        route: return_route_1.returnRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
