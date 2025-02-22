<script setup>
defineProps({
  class_value: String,
  text: String,
});
</script>

<template>
  <p :class="class_value">{{ text }}</p>
</template>
