import express from 'express';
import { adminRoutes } from '../modules/admin/admin.routes';
import { authRoutes } from '../modules/auth/auth.routes';
import { memberRoutes } from '../modules/member/member.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/admin',
        route: adminRoutes
    },
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/members',
        route: memberRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;