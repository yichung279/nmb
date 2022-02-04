import { PATH } from '@/constants/route'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: PATH.HOME,
      name: 'home',
      component: HomeView,
    },
    {
      path: PATH.PHOTO,
      name: 'photo',
      component: () => import('../views/PhotoView.vue'),
    },
  ],
})

export default router
