import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Show from '../views/Smartphone/Show.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/smartphone/:id/show',
    name: 'Show',
    component: Show,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component:  About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
