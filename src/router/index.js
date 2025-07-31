import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/components/MainPage.vue";
import LeistungenPage from "@/components/LeistungenPage.vue";
import GalleryPage from "@/components/GalleryPage.vue"
import ProjectPage from "@/components/ProjectPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage,
      meta: {
        title: 'Handwerker Alexander König',
        metaDescription: "Von der Idee bis zum perfekten Ergebnis – ich verwandle Ihre Visionen in greifbare Meisterwerke. Handwerk mit Herz und Verstand."
      }
    },
    {
      path: '/leistungen',
      component: LeistungenPage
    },
    {
      path: '/galerie',
      component: GalleryPage
    },
    {
      path: '/galerie/:project',
      component: ProjectPage
    }
  ]
})

export default router
