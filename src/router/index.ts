import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counterOne',
      name: 'counterOne',
      component: () => import("@/counter/pages/CounterOnePage.vue")
    },
    {
      path: '/counterTwo',
      name: 'counterTwo',
      component: ()=> import('@/counter/pages/CounterTwoPage.vue')
    }
  ]
})

export default router
