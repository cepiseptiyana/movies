<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import Header from "./components/organisms/Header.vue";
import Jumbotron from "./components/organisms/Jumbotron.vue";
</script>

<template>
  <!-- Navbar -->
  <div class="container-fluid header bg-dark">
    <Header></Header>
  </div>

  <div class="container-fluid jumbotron bg-light">
    <div class="container">
      <Jumbotron />
    </div>
  </div>

  <!-- VIEWS -->
  <div class="container-fluid bg-dark">
    <RouterView />
  </div>
</template>
