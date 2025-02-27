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

onBeforeRouteUpdate(async (to, from) => {
  params.value = to.params.movies;
  const movies = await film.getFilm(params.value);
  movieHome.data = movies;
  console.log(to.params.movies);
});
</script>

<template>
  <AuthLayouts>
    <!-- Content -->
    <div class="content">
      <content :movieHome="movieHome.data" />
    </div>
  </AuthLayouts>
</template>
