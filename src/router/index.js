import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/movies/",
      component: HomeView,
    },
    {
      path: "/movies/Product/",
      component: ProductView,
    },
  ],
});

export default router;
