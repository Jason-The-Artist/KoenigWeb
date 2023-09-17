import { createRouter, createWebHashHistory } from 'vue-router'
import type {RouteRecordRaw} from 'vue-router';
import MainPage from "@/components/MainPage.vue";
import NotFoundPage from "@/components/NotFoundPage.vue";
import LeistungenPage from "@/components/LeistungenPage.vue";
import GaleriePage from "@/components/GaleriePage.vue";
import KontaktPage from "@/components/KontaktPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/leistungen',
    name: 'LeistungenPage',
    component: LeistungenPage
  },
  {
    path: '/galerie',
    name: 'GaleriePage',
    component: GaleriePage
  },
  {
    path: '/kontakt',
    name: 'KontaktPage',
    component: KontaktPage
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    component: NotFoundPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router