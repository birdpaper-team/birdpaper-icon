<template>
  <div :class="clsBlockName">
    <bp-avatar size="large" shape="circle" image-url="https://avatars.githubusercontent.com/u/24250934?v=4"></bp-avatar>
    <div class="support-text">Sponsor Sam on GitHub Sponsors.</div>
    <bp-button :icon="IconHeart3Line" type="plain" status="gray" @click="goTo">Sponsor</bp-button>
  </div>
</template>

<script setup lang="ts">
import { IconHeart3Line } from "birdpaper-icon";
const clsBlockName = "github-sponsors";

const goTo = () => {
  window.open("https://github.com/sponsors/liluanhui");
};
</script>
