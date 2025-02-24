<script setup>
// ATOMS
import Image from "../atoms/Image.vue";

// PROPS
defineProps({
  movieHome: Array,
  headContentRow2: String,
});
</script>

<template>
  <div class="container p-3">
    <div class="row">
      <h1 class="text-light">{{ headContentRow2 }}</h1>
      <!-- COLUMN 1 -->
      <div class="col-md column__1">
        <div class="wrapper-card d-flex gap-1 align-items-center">
          <div class="contentRow2__wrapper__card__img" v-for="movie in movieHome">
            <Image :src="movie.Poster" :alt="movie.Title" :class_value="movie.imdbID" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
