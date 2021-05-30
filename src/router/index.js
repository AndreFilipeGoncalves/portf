import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Projects from '@/views/Projects'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
