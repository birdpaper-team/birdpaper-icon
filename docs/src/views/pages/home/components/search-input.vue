<template>
  <div :class="`${name}`">
    <div :class="`${name}-icon`">
      <IconSearch2Line size="22" />
    </div>
    <div :class="`${name}-inner`">
      <input v-model.trim="model" type="text" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">
import allIcons, { IconSearch2Line } from "birdpaper-icon";

const name = "home-page-search-input";
const placeholder = `Search ${Object.keys(allIcons).length - 3} Icons.`;

const model = defineModel({ type: String, default: "" });
</script>
