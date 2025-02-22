<script setup>
defineEmits(["emit"]);

const props = defineProps({
  text: String,
  name_value: String,
  class_value: String,
  vHtml: String,
});
</script>

<template>
  <button
    class="btn"
    :class="class_value"
    :name="name_value"
    @click="$emit('emit')"
    v-html="vHtml"
  ></button>
</template>
