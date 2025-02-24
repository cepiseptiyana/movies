<script setup>
// EMIT
defineEmits(["navigasi"]);

defineProps({
  text: String,
  class_value: String,
});
</script>

<template>
  <h1 class="text-capitalize" :class="class_value" @click="$emit('navigasi')">{{ text }}</h1>
</template>
