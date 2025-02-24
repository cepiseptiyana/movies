<script setup>
import { showDetailMovie } from "@/utils/index.js";
import Image from "../atoms/Image.vue";
import Heading from "../atoms/Heading.vue";

// feather
import { icons } from "feather-icons";
const eye = icons["eye"].toSvg({ color: "white" });

// PROPS
defineProps({
  movieHome: Array,
});
</script>

<template>
  <div class="container p-3">
    <div class="row">
      <div class="col-md">
        <div class="wrapper-card d-flex gap-1 align-items-center">
          <div class="wrapper__card__img" v-for="movie in movieHome.slice(0, 4)">
            <Image :src="movie.Poster" :alt="movie.Title" :class_value="movie.imdbID" />
            <Heading :text="movie.Title" />
            <div class="eye" v-html="eye" @click="showDetail(movie.imdbID)"></div>
          </div>
        </div>

        <div class="wrapper-card d-flex gap-1 align-items-center">
          <div class="wrapper__card__img" v-for="movie in movieHome.slice(4, 8)">
            <Image :src="movie.Poster" :alt="movie.Title" :class_value="movie.imdbID" />
            <Heading :text="movie.Title" />
            <div class="eye" v-html="eye" @click="showDetail(movie.imdbID)"></div>
          </div>
        </div>

        <div class="wrapper-card d-flex gap-1 align-items-center">
          <div class="wrapper__card__img" v-for="movie in movieHome.slice(8, 10)">
            <Image :src="movie.Poster" :alt="movie.Title" :class_value="movie.imdbID" />
            <Heading :text="movie.Title" />
            <div class="eye" v-html="eye" @click="showDetail(movie.imdbID)"></div>
          </div>
        </div>
      </div>
      <!-- <div class="col-md" v-if="showDetailMovie.data.length != 0">
        <div class="container">
          <Image
            :src="showDetailMovie.data.Poster"
            :alt="showDetailMovie.data.imdbID"
            :class_value="showDetailMovie.data.imdbID"
          />

          <div class="wrapper_text">
            <Heading :text="'Title : ' + showDetailMovie.data.Title" class="capitalize" />
            <Heading :text="'Released : ' + showDetailMovie.data.Released" class="capitalize" />
            <Heading :text="'Country : ' + showDetailMovie.data.Country" class="capitalize" />
            <Heading :text="'Genre : ' + showDetailMovie.data.Genre" class="capitalize" />
            <Heading :text="'Director : ' + showDetailMovie.data.Director" class="capitalize" />
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
