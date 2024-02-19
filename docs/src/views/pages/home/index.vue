<template>
  <div :class="name">
    <div :class="`${name}-banner`">
      <div :class="`${name}-banner-content`"></div>
    </div>
    <div :class="`${name}-search`">
      <div :class="`${name}-search-cotainer`">
        <div :class="`${name}-search-inner`">
          <!-- 类型选择器 -->
          <type-selector></type-selector>
          <!-- 查询框 -->
          <search-input v-model="searchKey"></search-input>
        </div>
      </div>
    </div>
    <div :class="`${name}-icons`">
      <div :class="`${name}-icons-container`">
        <icon-group v-for="v in iconInfo" :all-icons="allIcons" :group-info="v"></icon-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import allIcons, { iconInfo } from "birdpaper-icon";
import iconGroup from "./components/icon-group.vue";
import typeSelector from "./components/type-selector.vue";
import searchInput from "./components/search-input.vue";
import { ref } from "vue";

const name = "home-page";

const searchKey = ref<string>("");
</script>
