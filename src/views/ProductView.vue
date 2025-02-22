<script setup>
import AuthLayouts from "@/components/templates/AuthLayouts.vue";
import { dataBangsat } from "@/utils/index.js";
import Content from "@/components/organisms/Content.vue";
</script>

<template>
  <!-- <TheWelcome /> -->
  <AuthLayouts>
    <div class="content">
      <Content :dataBangsat="dataBangsat" class_Button="" />
    </div>
  </AuthLayouts>
</template>
