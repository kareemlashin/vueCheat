import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//route
import Base from '../views/Base.vue'
import Route from '../views/Route.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    //lazy loading
    {
        path: '/basic',
        name: 'basic',
        component: () =>
            import ('../views/Basic.vue'),
    },
    {
        path: '/Form',
        name: 'Form',
        component: () =>
            import ('../views/Form.vue'),
    },
    //route 
    {
        path: '/base',
        name: 'base',
        component: Base,
        children: [

        ]
    },
    {
        path: '/Route/:id',
        name: 'Route',
        component: Route,
        children: [

        ]
    },

]

const router = new VueRouter({
    routes
})

export default router