import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../features/home/HomePage.vue'
import ArtPage from '../features/art/ArtPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/art',
      name: 'art',
      component: ArtPage,
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router
