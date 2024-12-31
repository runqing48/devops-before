// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginSignup from '../components/login/LoginSignup.vue'; // 导入登录注册页面组件
import Dash from '../components/dash/dash.vue'; // 仪表盘页面
import { isAuthenticated } from '@/auth/auth.js';  // 在 utils/auth.js 中封装检查是否已登录的逻辑


const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginSignup, // 默认显示登录页面
    },
    {
        path: '/register',
        name: 'Register',
        component: LoginSignup, // 注册页面
    },
    {
        path: '/dash',
        name: 'Dash',
        component: Dash, // 仪表盘页面
        meta: {requiresAuth: true}  // 此页面也需要token认证才能登录
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});


// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 检查路由是否需要认证
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 如果路由需要认证，检查用户是否已登录
        if (!isAuthenticated()) {
            // 如果没有登录，跳转到登录页
            console.log("没有登录！")
            next({ name: 'Login' });
        } else {
            // 如果已经登录，允许访问
            next();
        }
    } else {
        // 如果路由不需要认证，允许访问
        next();
    }
});

export default router;
