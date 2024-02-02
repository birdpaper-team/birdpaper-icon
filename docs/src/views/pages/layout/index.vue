<template>
  <div class="app-layout">
    <top-bar></top-bar>

    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup lang="ts">
import topBar from "./components/top-bar.vue";
</script>
