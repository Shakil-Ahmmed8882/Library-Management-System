import express from 'express';
import { adminRoutes } from '../modules/admin/admin.routes';
import { authRoutes } from '../modules/auth/auth.routes';
import { memberRoutes } from '../modules/member/member.route';
import { bookRoutes } from '../modules/book/book.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/admins',
        route: adminRoutes
    },
    {
        path: '/auths',
        route: authRoutes
    },
    {
        path: '/members',
        route: memberRoutes
    },
    {
        path: '/books',
        route: bookRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;