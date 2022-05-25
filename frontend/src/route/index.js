import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Homepage.vue')
    },
    {
        path: '/postpage',
        name: 'post',
        component: () => import('../views/Postpage.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
        meta: {
            hideNavbar: true,
        }
    }
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router