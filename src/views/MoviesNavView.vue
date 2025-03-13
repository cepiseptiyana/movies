<script setup>
import { ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";

// COMPONENTS
import AuthLayouts from "@/components/templates/AuthLayouts.vue";
import content from "@/components/organisms/ContentPages.vue";

// LIFECYCLE HOOK

// DB
import { film } from "@/service/index.js";
import { movieHome } from "@/utils/index.js";
const params = ref("");
const loadElement = ref(false);

// FETCH DATA
onBeforeRouteUpdate(async (to, from) => {
  try {
    loadElement.value = true;
    params.value = to.params.movies;
    const movies = await film.getFilm(params.value);
    movieHome.data = movies;
    console.log(to.params.movies);
  } catch (err) {
    console.log(err);
  } finally {
    loadElement.value = false;
  }
});
</script>

<template>
  <AuthLayouts>
    <!-- Content -->
    <div class="content">
      <h1 class="loader" v-if="loadElement"></h1>
      <content :movieHome="movieHome.data" />
    </div>
  </AuthLayouts>
</template>

<style scoped>
.loader {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  color: #fff;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}

@media only screen and (max-width: 576px) {
  .loader {
    width: 10px;
    height: 10px;
  }
}

@keyframes animloader {
  0% {
    box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
  }
  25% {
    box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 2px;
  }
  50% {
    box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 2px, -38px 0 0 -2px;
  }
  75% {
    box-shadow: 14px 0 0 2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
  }
  100% {
    box-shadow: 14px 0 0 -2px, 38px 0 0 2px, -14px 0 0 -2px, -38px 0 0 -2px;
  }
}
</style>
