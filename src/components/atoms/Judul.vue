<script setup>
const props = defineProps({
  heading: String,
  span: String,
  class: String,
});
</script>

<template>
  <h1 class="text-light text-capitalize">
    {{ props.heading }}<span class="text-uppercase" :class="class">{{ props.span }}</span>
  </h1>
</template>
