import Vue from "vue"
import VueRouter from "vue-router"
import LoginPage from '@/views/LoginPage.vue'
import SignupPage from '@/views/SignupPage.vue'


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/main',
        },
        {
            path: '/login',
            component: LoginPage

        },
        {
            path: '/signup',
            component: SignupPage
        },
    ]
});

export default router;