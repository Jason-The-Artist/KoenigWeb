import { createRouter, createWebHashHistory } from 'vue-router'
import type {RouteRecordRaw} from 'vue-router';
import MainPage from "@/components/MainPage.vue";
import NotFoundPage from "@/components/NotFoundPage.vue";
import LeistungenPage from "@/components/LeistungenPage.vue";
import GaleriePage from "@/components/GaleriePage.vue";
import KontaktPage from "@/components/KontaktPage.vue";
import AGBPage from "@/components/AGBPage.vue";
import DatenschutzPage from "@/components/DatenschutzPage.vue";
import ImpressumPage from "@/components/ImpressumPage.vue";
import ProjektPage from "@/components/ProjektPage.vue";

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
    path: '/agb',
    name: 'AGBPage',
    component: AGBPage
  },
  {
    path: '/datenschutz',
    name: 'DatenschutzPage',
    component: DatenschutzPage
  },
  {
    path: '/impressum',
    name: 'ImpressumPage',
    component: ImpressumPage
  },
  {
    path: '/:id/:projekt',
    name: 'ProjektPage',
    component: ProjektPage
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