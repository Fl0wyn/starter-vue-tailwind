import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/project',
      name: 'Project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/PageNotFound.vue')
    }
  ]
})

export default router
