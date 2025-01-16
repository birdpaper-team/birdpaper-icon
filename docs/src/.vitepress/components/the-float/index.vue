<template>
  <div :class="name">
    <div v-show="y > 100" :class="`${name}-item`" @click="backToTop">
      <IconSkipUpLine />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const name = "the-float";

const { y } = useWindowScroll({ behavior: "smooth" });
const backToTop = () => {
  y.value = 0;
};
</script>
