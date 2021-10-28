import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import Activity from '@/views/Activity'

const history = createWebHistory()

export default createRouter({
  history,

  routes: [
    {
      path: '/actividades',
      name: 'actividades',
      component: Home,
    },

    {
      path: '/actividades/:id',
      name: 'actividades-id',
      component: Activity,
    },

    {
      path: '/:catchAll(.*)',
      name: 'actividades',
      component: Home,
    },
  ],
})
