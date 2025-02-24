<script setup>
import { onBeforeMount, ref } from "vue";
import AuthLayouts from "@/components/templates/AuthLayouts.vue";
import content from "@/components/organisms/ContentPages.vue";
import { movieHome } from "@/utils/index.js";

// DB
import { film } from "@/service/index.js";

onBeforeMount(async () => {
  const avengers = await film.getFilm("ave");
  movieHome.data = avengers;
});

// fetch("https://kunci-tts-api.vercel.app/api/").then((res) => console.log(res.json()));
</script>

<template>
  <AuthLayouts>
    <!-- Content -->
    <div class="content">
      <content :movieHome="movieHome.data" />
    </div>
  </AuthLayouts>
</template>
