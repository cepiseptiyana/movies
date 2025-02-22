<script setup>
defineProps({
  text: String,
  class: String,
});
</script>

<template>
  <h1 class="text-capitalize" :class="class">{{ text }}</h1>
</template>
