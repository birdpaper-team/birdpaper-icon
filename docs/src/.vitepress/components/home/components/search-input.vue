<template>
  <div :class="`${name}`">
    <div :class="[`${name}-icon`, { 'search-active': isFocus }]">
      <IconSearch2Line size="22" />
    </div>
    <div :class="`${name}-inner`">
      <input v-model.trim="model" type="text" :placeholder="placeholder" @focus="onFocus" @blur="onBlur" />
    </div>
  </div>
</template>

<script setup lang="ts">
import allIcons, { IconSearch2Line } from "birdpaper-icon/index.ts";
import { ref } from "vue";

const name = "home-page-search-input";
const placeholder = `Search ${Object.keys(allIcons).length - 3} Icons.`;
const isFocus = ref<boolean>(false);

const model = defineModel({ type: String, default: "" });

const onFocus = () => (isFocus.value = true);
const onBlur = () => (isFocus.value = false);
</script>
