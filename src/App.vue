<script setup>
import { RouterView } from "vue-router";
import Header from "./components/organisms/Header.vue";
import Jumbotron from "./components/organisms/Jumbotron.vue";

const navigasi = () => {
  console.log("ok");
  const wrapper__card__img = Array.from(
    document.querySelectorAll(".wrapper-card .wrapper__card__img")
  );
  console.log(wrapper__card__img);

  // wrapper__card__img.forEach((element) => {
  //   element.classList.add("responsive_Large");
  //   element.classList.add("responsive_Medium");
  //   element.classList.add("responsive_Small");
  // });
};
</script>

<template>
  <!-- Navbar -->
  <div class="container-fluid header bg-dark">
    <Header @navigasi="navigasi"></Header>
  </div>

  <div class="container-fluid jumbotron bg-light">
    <div class="container">
      <Jumbotron />
    </div>
  </div>

  <!-- VIEWS -->
  <!-- Content -->
  <div class="container-fluid bg-dark">
    <RouterView />
  </div>
</template>
