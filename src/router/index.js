import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "@/views/ContentSearchView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/product",
      component: ProductView,
    },
    {
      path: "/movies/product",
      component: ProductView,
    },
  ],
});

export default router;
