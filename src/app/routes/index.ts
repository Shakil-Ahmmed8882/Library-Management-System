import express from "express";
import { adminRoutes } from "../modules/admin/admin.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { memberRoutes } from "../modules/member/member.route";
import { bookRoutes } from "../modules/book/book.route";
import { returnRoutes } from "../modules/return/return.route";
import { borrowRoutes } from "../modules/borrow/borrow.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/admins",
    route: adminRoutes,
  },
  {
    path: "/members",
    route: memberRoutes,
  },
  {
    path: "/auths",
    route: authRoutes,
  },
  {
    path: "/books",
    route: bookRoutes,
  },
  {
    path: "/borrow",
    route: borrowRoutes,
  },
  {
    path: "/return",
    route: returnRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
