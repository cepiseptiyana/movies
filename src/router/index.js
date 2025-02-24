import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "@/views/ContentSearchView.vue";
import AvengersView from "@/views/AvengersView.vue";
import FastFuriousView from "@/views/FastFuriousView.vue";
import MickeyMouseView from "@/views/MickeyMouseView.vue";
import TransformersView from "@/views/TransformersView.vue";
import BirdManView from "@/views/BirdManView.vue";
import Insidious from "@/views/Insidious.vue";
import VampireView from "@/views/VampireView.vue";
import CallOfDutyView from "@/views/CallOfDutyView.vue";
import Jason13ThView from "@/views/Jason13ThView.vue";

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
      path: "/avengers",
      component: AvengersView,
    },
    {
      path: "/fastFurious",
      component: FastFuriousView,
    },
    {
      path: "/mickeyMouse",
      component: MickeyMouseView,
    },
    {
      path: "/transformers",
      component: TransformersView,
    },
    {
      path: "/birdman",
      component: BirdManView,
    },
    {
      path: "/birdman",
      component: BirdManView,
    },
    {
      path: "/insidious",
      component: Insidious,
    },
    {
      path: "/vampire",
      component: VampireView,
    },
    {
      path: "/callOfDuty",
      component: CallOfDutyView,
    },
    {
      path: "/jason13th",
      component: Jason13ThView,
    },
  ],
});

export default router;
