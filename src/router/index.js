import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from '../constants/routes';

const routes = [
    {
        path: ROUTES.ROOT.PATH,
        name: ROUTES.ROOT.NAME,
        component: () => import(
            /* webpackChunkName: "page-home" */
            '../views/page-home.vue'
        ),
    },
    {
        path: ROUTES.CALENDAR.PATH,
        name: ROUTES.CALENDAR.NAME,
        component: () => import(
            /* webpackChunkName: "page-calendar" */
            '../views/page-calendar.vue'
        ),
        // children: [
        //     {
        //         path: '',
        //         name: ROUTES.CALENDAR.NAME,
        //         component: () => import(
        //             /* webpackChunkName: "page-calendar" */
        //             '../views/page-calendar.vue'
        //         ),
        //     },
        //     {
        //         path: ROUTES.LAUNCH_ID.PATH,
        //         name: ROUTES.LAUNCH_ID.NAME,
        //         component: () => import(
        //             /* webpackChunkName: "page-details" */
        //             '../views/page-details.vue'
        //         ),
        //         props: true,
        //     },
        // ],
    },
    {
        path: ROUTES.LAUNCH_ID.PATH,
        name: ROUTES.LAUNCH_ID.NAME,
        component: () => import(
            /* webpackChunkName: "page-details" */
            '../views/page-details.vue'
        ),
        props: true,
    },
    {
        path: ROUTES.ROCKET.PATH,
        name: ROUTES.ROCKET.NAME,
        component: () => import(
            /* webpackChunkName: "page-rocket" */
            '../views/page-rocket.vue'
        ),
        props: true,
    },
    {
        path: ROUTES.NOT_FOUND.PATH,
        name: ROUTES.NOT_FOUND.NAME,
        alias: '/:catchAll(.*)',
        component: () => import(
            /* webpackChunkName: "page-not-found" */
            '../views/page-404.vue'
        ),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});
