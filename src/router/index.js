import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/DuvidaView.vue'
import ServicesView from '@/views/ServicesView.vue'
import SobreView from '@/views/SobreView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',name: 'home',component: HomeView,},
    {path: '/Duvidas',name: 'about',component: AboutView,},
    {path: '/Sevices',name: 'Sevices',component: ServicesView,},
    {path: '/Sobre',name: 'Sobre',component: SobreView,},

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
