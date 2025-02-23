<script setup>
import Input from "../atoms/Input.vue";
import Button from "../atoms/Button.vue";
import { RouterLink } from "vue-router";

// DEFINE
// MODEL
const datasearch = defineModel("dataSearch");
// EMITS
defineEmits(["emit"]);
// PROPS
defineProps({
  input_id: String,
  input_placeholder: String,
  input_type: String,
  input_name: String,
  vHtml: String,
  button_name: String,
  button_class: String,
  action: String,
  method: String,
});
</script>

<template>
  <form :method="method" :action="action" class="form">
    <Input
      :id="input_id"
      :placeholder_value="input_placeholder"
      :type_value="input_type"
      :input_name="input_name"
      v-model="datasearch"
    />
    <RouterLink to="/movies/product">
      <Button
        :vHtml="vHtml"
        :name_value="button_name"
        :class_value="button_class"
        @click="$emit('emit')"
      ></Button>
    </RouterLink>
  </form>
</template>
