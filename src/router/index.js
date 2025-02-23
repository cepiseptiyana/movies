import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/movies",
      component: HomeView,
    },
    {
      path: "/Product",
      component: ProductView,
    },
    {
      path: "/movies/Product",
      component: ProductView,
    },
  ],
});

export default router;
