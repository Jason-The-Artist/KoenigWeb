import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/components/MainPage.vue";
import OrderPage from "@/components/OrderPage.vue";
import SuccessPage from "@/components/SuccessPage.vue";
import ProfilePage from "@/components/ProfilePage.vue";
import NewMainPage from "@/components/NewMainPage.vue";
import AdminPage from "@/components/AdminPage.vue";
import OfferPage from "@/components/OfferPage.vue";
import RequestSuccessPage from "@/components/RequestSuccessPage.vue";
import AboSuccessPage from "@/components/AboSuccessPage.vue";
import Visitenkarte from "@/components/Visitenkarte.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage,
      meta: {
        title: 'Handwerker Alex König',
        metaDescription: "Vom Gartenbau bis zu Pooldecks ist alles dabei."
      }
    },
    {
      path: '/leistungen',
      component: OrderPage,
    }
  ],
  scrollBehavior(to, from, savedPosition){
    return {top: 0}
}
})


router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = String(to.meta.title);
    console.log('Tab Title updated to:', to.meta.title);
  } else {
    document.title = 'Inforge Web Service';
    console.log('Tab Title set to default:', 'Inforge');
  }

  const metaDescriptionTag = document.querySelector('meta[name="description"]');
  if (metaDescriptionTag && to.meta.metaDescription) {
    metaDescriptionTag.setAttribute('content', String(to.meta.metaDescription));
    console.log('Meta Description updated to:', to.meta.metaDescription);
  } else if (metaDescriptionTag) {
    metaDescriptionTag.setAttribute('content', 'Standard description for Inforge');
    console.log('Meta Description set to default.');
  }
});

export default router
