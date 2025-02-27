import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "@/views/ContentSearchView.vue";

import MoviesNavView from "@/views/MoviesNavView.vue";

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
    {
      path: "/moviesNav/:movies",
      component: MoviesNavView,
    },
  ],
});

export default router;
