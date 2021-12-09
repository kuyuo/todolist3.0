import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/about',
    name:'About',
    component:()=>import(/* webpackChunkName: "about" */ '@/views/about.vue')
  },
  {
    path: '/',
    name:'Start',
    component:()=>import(/* webpackChunkName: "about" */ '@/views/start.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router