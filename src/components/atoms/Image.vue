<script setup>
defineProps({
  src: String,
  alt: String,
  class_value: String,
});
</script>

<template>
  <img :src="src" :alt="alt" :class="class_value" width="100%" />
</template>
