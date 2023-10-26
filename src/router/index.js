import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DefaultLayout from '../layouts/default.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: '/people/:id',
      name: 'people',
      component: () => import('../views/People.vue'),
      meta: {
        layout: DefaultLayout
      },
      props: true,
    },
  ]
})

export default router
