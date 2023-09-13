import { createRouter, createWebHashHistory } from 'vue-router'
import type {RouteRecordRaw} from 'vue-router';
import MainPage from "@/components/MainPage.vue";
import NotFoundPage from "@/components/NotFoundPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
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