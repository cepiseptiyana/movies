<script setup>
const datasearch = defineModel("dataSearch");

defineProps({
  id: String,
  placeholder_value: String,
  type_value: String,
  input_name: String,
  class: String,
});
</script>

<template>
  <input
    :type="type_value"
    :id="id"
    :placeholder="placeholder_value"
    :name="input_name"
    :class="class"
    class="form-control"
    autocomplete="off"
    v-model="datasearch"
  />
</template>
