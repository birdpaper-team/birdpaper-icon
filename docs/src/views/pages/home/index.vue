<template>
  <div :class="name">
    <div :class="`${name}-inner`"></div>
  </div>
</template>

<script setup lang="ts">
import { iconType } from "birdpaper-icon";

const name = "home-banner";
</script>
