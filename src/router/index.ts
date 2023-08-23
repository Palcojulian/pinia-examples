import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counterOne',
      component: () => import('@/counter/pages/CounterOnePage.vue')
    },
    {
      path: '/counterTwo',
      name: 'counterTwo',
      component: ()=> import('@/counter/pages/CounterTwoPage.vue')
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import('@/clients/layout/ClientsLayout.vue'),
      redirect: {name: 'list'},
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('@/clients/pages/ListPage.vue'),
        },
        {
          path: '/clients/:id',
          name: 'client-id',
          component: () => import('@/clients/pages/ClientPage.vue')
        }
      ]
    }
  ]
})

export default router
