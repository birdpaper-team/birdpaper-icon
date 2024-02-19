<template>
  <div :class="`${name}`">
    <div :class="`${name}-icon`">
      <IconSearch2Line size="22" />
    </div>
    <div :class="`${name}-inner`">
      <input type="text" :placeholder="`Search ${Object.keys(allIcons).length - 3} Icons.`" />
    </div>
  </div>
</template>

<script setup lang="ts">
import allIcons, { IconSearch2Line } from "birdpaper-icon";
import { ref } from "vue";

const name = "home-page-search-input";
</script>
