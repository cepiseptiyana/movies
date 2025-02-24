<script setup>
import { ref } from "vue";
import { film } from "@/service/index.js";
import { RouterLink } from "vue-router";
import { dataSearch } from "@/utils/index.js";

// COMPONENTS
import Search from "../molecules/Search.vue";
import Judul from "../atoms/Judul.vue";
import Heading from "../atoms/Heading.vue";
import IconDropDown from "../atoms/IconDropDown.vue";

// EMIT
defineEmits(["navigasi"]);

const vModelSearch = ref("");
async function dataMovie(vModelSearch) {
  try {
    let dataMovies = await film.getFilm(vModelSearch);
    dataSearch.data = dataMovies;
    console.log(dataSearch.data);
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
    <RouterLink to="/" class="text-decoration-none">
      <Heading text="home" class_value="navigasi" />
    </RouterLink>

    <RouterLink to="/avengers" class="text-decoration-none">
      <Heading text="Avengers" class="navigasi" />
    </RouterLink>

    <RouterLink to="/fastFurious" class="text-decoration-none">
      <Heading text="fast & Furious" class="" />
    </RouterLink>

    <RouterLink to="/mickeyMouse" class="text-decoration-none">
      <Heading text="mickeyMouse" class="" />
    </RouterLink>

    <RouterLink to="/transformers" class="text-decoration-none">
      <Heading text="transformers" class="" />
    </RouterLink>

    <RouterLink to="/birdman" class="text-decoration-none">
      <Heading text="birdman" class="" />
    </RouterLink>

    <RouterLink to="/insidious" class="text-decoration-none">
      <Heading text="insidious" class="" />
    </RouterLink>

    <RouterLink to="/vampire" class="text-decoration-none">
      <Heading text="vampire" class="" />
    </RouterLink>

    <RouterLink to="/callOfDuty" class="text-decoration-none">
      <Heading text="callOfDuty" class="" />
    </RouterLink>

    <RouterLink to="/jason13th" class="text-decoration-none">
      <Heading text="jason13th" class="" />
    </RouterLink>
  </div>
</template>
