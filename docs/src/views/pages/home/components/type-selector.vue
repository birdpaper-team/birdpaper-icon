<template>
  <div :class="`${name}`">
    <bp-trigger v-model:popupVisible="triggerVisible" position="bottom" :popup-offset="20">
      <div :class="[`${name}-container`, { 'trigger-active': triggerVisible }]">
        <span>All Icons</span>
        <IconArrowDownSLine v-if="!triggerVisible" size="20" />
        <IconSubtractLine v-else size="20" />
      </div>
      <template #content>
        <div class="icon-select-trigger">
          <ul>
            <li class="icon-select-trigger-item">
              <span>All Icons</span>
            </li>
            <li v-for="v in iconInfo" class="icon-select-trigger-item">
              <p class="icon-select-trigger-item-inner">
                <span>{{ v.name }}</span>
                <span class="icons-length">{{ v.list.length }}</span>
              </p>
            </li>
          </ul>
        </div>
      </template>
    </bp-trigger>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { iconInfo, IconArrowDownSLine, IconSubtractLine } from "birdpaper-icon";

const name = "home-page-search-select";
const triggerVisible = ref<boolean>(false);
</script>
