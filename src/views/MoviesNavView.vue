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
    <h1 class="text-warning" v-if="loadElement">Loading ...</h1>
    <!-- Content -->
    <div class="content">
      <content :movieHome="movieHome.data" />
    </div>
  </AuthLayouts>
</template>
