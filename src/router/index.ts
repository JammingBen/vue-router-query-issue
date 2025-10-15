import HomeView from '@/views/HomeView.vue'
import qs from 'qs'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  parseQuery(query) {
    console.log('query from parseQuery method:', query)
    return qs.parse(query)
  },
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
