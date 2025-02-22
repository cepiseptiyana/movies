<script setup>
import feather from "feather-icons";

const props = defineProps({
  icon: String,
});

const icon = feather.icons[props.icon].toSvg({ color: "white" });
</script>

<template>
  <div class="svg" v-html="icon"></div>
</template>
