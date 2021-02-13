import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('../views/home/index.vue')
const credentials = () => import('../views/credentials/index.vue')
const feedBacks = () => import('../views/feedbacks/index.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: credentials,
    meta: {
      hashAuth: true
    }
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: feedBacks,
    meta: {
      hashAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
