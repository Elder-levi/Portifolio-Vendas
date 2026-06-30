import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',name: 'home',component: HomeView,},
    {path: '/Duvidas',name: 'about',component: AboutView,},
    {path: '/Sevices',name: 'Sevices',component: ServicesView,},

  ],
  
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return {
      top: 0,
      behavior: "smooth", // ou "auto"
    };
  },
})

export default router
