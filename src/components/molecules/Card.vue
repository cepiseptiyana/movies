<script setup>
import Heading from "../atoms/Heading.vue";
import Button from "../atoms/Button.vue";
import Image from "../atoms/Image.vue";

// EMIT
defineEmits(["emit"]);

// PROPS
defineProps({
  class_Heading: String,
  class_Button: String,
  text_Heading: String,
  text_Button: String,
  image_src: String,
  image_alt: String,
  image_class: String,
});
</script>

<template>
  <div class="card">
    <Image :src="image_src" :alt="image_alt" :class="image_class" />
    <div class="card-body">
      <Heading :class="class_Heading" :text="text_Heading" />
      <Button
        :class="class_Button"
        :text="text_Button"
        @click="$emit('emit', image_class)"
      ></Button>
    </div>
  </div>
</template>
