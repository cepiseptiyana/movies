<script setup>
import { onBeforeMount } from "vue";
import AuthLayouts from "@/components/templates/AuthLayouts.vue";
import content from "@/components/organisms/ContentPages.vue";
import { movieHome } from "@/utils/index.js";

// DB
import { film } from "@/service/index.js";

onBeforeMount(async () => {
  const avengers = await film.getFilm("vampire");
  movieHome.data = avengers;
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
