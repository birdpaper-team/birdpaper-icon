<template>
  <div :class="name">
    <div :class="`${name}-banner`">
      <div :class="`${name}-banner-content`"></div>
    </div>
    <div :class="`${name}-search`">
      <div :class="`${name}-search-cotainer`">
        <div :class="`${name}-search-inner`"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { iconType } from "birdpaper-icon";
// console.log('[ iconType ]-16', iconType);

const name = "home-page";
</script>
