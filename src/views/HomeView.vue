<script setup>
import { onMounted } from "vue";
import AuthLayouts from "@/components/templates/AuthLayouts.vue";
import content from "@/components/organisms/ContentPages.vue";
import { movieHome } from "@/utils/index.js";
import HomeContentRow2 from "@/components/organisms/HomeContentRow2.vue";

// DB
import { film } from "@/service/index.js";

onMounted(async () => {
  const movieRandom = await film.getFilm("ave");
  const avengers = await film.getFilm("avengers");
  const callOfDuty = await film.getFilm("call of duty");
  const transformers = await film.getFilm("transformers");
  const vampire = await film.getFilm("vampire");

  movieHome.data = movieRandom;
  movieHome.avengers = avengers;
  movieHome.callOfDuty = callOfDuty;
  movieHome.transformers = transformers;
  movieHome.vampire = vampire;
});

// fetch("https://kunci-tts-api.vercel.app/api/").then((res) => console.log(res.json()));
</script>

<template>
  <AuthLayouts>
    <!-- Content -->
    <div class="content">
      <content :movieHome="movieHome.data" />
      <HomeContentRow2 :movieHome="movieHome.avengers" headContentRow2="Avengers" />
      <HomeContentRow2 :movieHome="movieHome.callOfDuty" headContentRow2="Call of duty" />
      <HomeContentRow2 :movieHome="movieHome.transformers" headContentRow2="transformers" />
      <HomeContentRow2 :movieHome="movieHome.vampire" headContentRow2="vampire" />
    </div>
  </AuthLayouts>
</template>
