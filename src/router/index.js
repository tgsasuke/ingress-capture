import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RankingView from '../views/RankingView.vue'
import UploadView from '../views/UploadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingView,
    },
  //   {
  //     path: '/upload',
  //     name: 'upload',
  //     component: UploadView,
  //   },
  ],
})

export default router
