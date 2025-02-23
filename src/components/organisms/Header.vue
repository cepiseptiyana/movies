<script setup>
import { ref } from "vue";
import { film } from "@/service/index.js";
import { RouterLink } from "vue-router";
import { dataBangsat } from "@/utils/index.js";

// COMPONENTS
import Search from "../molecules/Search.vue";
import Judul from "../atoms/Judul.vue";
import Heading from "../atoms/Heading.vue";
import IconDropDown from "../atoms/IconDropDown.vue";

const vModelSearch = ref("");
async function dataMovie(vModelSearch) {
  try {
    let dataMovies = await film.getFilm(vModelSearch);
    dataBangsat.data = dataMovies;
    console.log(dataBangsat.data);
  } catch (err) {
    alert(err);
  }
}

const iconSearch = () => {
  const elementInput = document.querySelector("#app .header .navbar .form");
  elementInput.classList.toggle("toggle");
};
</script>

<template>
  <!-- ROW 1 -->
  <nav class="navbar">
    <Judul heading="cepi" span="FILM" class="text-warning judul" />
    <Search
      action=""
      method=""
      input_id="Search"
      input_placeholder="Search"
      input_type="text"
      input_name="Search"
      vHtml="Search"
      button_name="button"
      button_class=""
      @emit="dataMovie(vModelSearch)"
      v-model:data-search="vModelSearch"
    />
    <div class="dropDown" @click="iconSearch">
      <IconDropDown icon="search" />
    </div>
  </nav>

  <!-- ROW 2 -->
  <div class="container-fluid bg-dark p-1 d-flex gap-3 RouterLink">
    <RouterLink to="/movies" class="text-decoration-none">
      <Heading text="home" class="" />
    </RouterLink>

    <RouterLink to="/movies/Product" class="text-decoration-none">
      <Heading text="Avengers" class="" />
    </RouterLink>

    <RouterLink to="/" class="text-decoration-none">
      <Heading text="HarryPotter" class="" />
    </RouterLink>

    <RouterLink to="/" class="text-decoration-none">
      <Heading text="Fast & Foriuos 8" class="" />
    </RouterLink>
    <RouterLink to="/" class="text-decoration-none">
      <Heading text="Fast & Foriuos 8" class="" />
    </RouterLink>
    <RouterLink to="/" class="text-decoration-none">
      <Heading text="Fast & Foriuos 8" class="" />
    </RouterLink>
    <RouterLink to="/" class="text-decoration-none">
      <Heading text="Fast & Foriuos 8" class="" />
    </RouterLink>
    <RouterLink to="/" class="text-decoration-none">
      <Heading text="Fast & Foriuos 8" class="" />
    </RouterLink>
    <RouterLink to="/" class="text-decoration-none">
      <Heading text="Fast & Foriuos 8" class="" />
    </RouterLink>
    <RouterLink to="/" class="text-decoration-none">
      <Heading text="Fast & Foriuos 8" class="" />
    </RouterLink>
  </div>
</template>
