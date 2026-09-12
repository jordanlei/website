import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../features/home/HomePage.vue'
import ArtPage from '../features/art/ArtPage.vue'
import ResearchPage from '../features/research/ResearchPage.vue'

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
    },
    {
      path: '/research',
      name: 'research',
      component: ResearchPage,
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
