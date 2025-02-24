<script setup>
import AuthLayouts from "@/components/templates/AuthLayouts.vue";
import { dataSearch } from "@/utils/index.js";
import Content from "@/components/organisms/ContentSearch.vue";
</script>

<template>
  <!-- <TheWelcome /> -->
  <AuthLayouts>
    <div class="content">
      <Content :dataSearch="dataSearch.data" />
    </div>
  </AuthLayouts>
</template>
