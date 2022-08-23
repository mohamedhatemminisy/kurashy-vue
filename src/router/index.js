import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ServicesView from '../views/ServicesView.vue'
import BlogsView from '../views/BlogsView.vue'
import SingleBlog from '../views/SingleBlog.vue'
import SingleService from '../views/SingleService.vue'
import Error404 from '@/views/Error404.vue'

let lang = window.location.pathname.replace(/^\/([^/]+).*/i, "$1") || 'en';

const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/services',
        name: 'Services',
        component: ServicesView
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: BlogsView
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView
    },
    {
        path: '/single-blog/:id',
        name: 'SingleBlog',
        component: SingleBlog,
        params: true
    },
    {
        path: '/single-service/:id',
        name: 'SingleService',
        component: SingleService,
        params: true
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Error404",
        component: Error404
    }

]


const router = createRouter({
    history: createWebHistory(lang),
    routes,
})




export default router