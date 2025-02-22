<script setup>
defineProps({
  for_value: String,
  text: String,
});
</script>

<template>
  <label class="text-light" :for="for_value">{{ text }}</label>
</template>
