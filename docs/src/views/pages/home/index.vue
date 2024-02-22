<template>
  <div :class="name">
    <div :class="`${name}-banner`">
      <div :class="`${name}-banner-content`">
        <div :class="`${name}-banner-content-title`">
          <p>Vue3 Icon Component Library.</p>
        </div>
        <div :class="`${name}-banner-content-remark`">
          <p>
            This is an open source Vue3 component based on the excellent Icon library -
            <img :src="remixLogo" @click="linkToRemix" /> second development, for learning and reference use only,
            thanks to the Remix Design team.
          </p>
        </div>
        <div :class="`${name}-banner-content-option`">
          <bp-button :icon="IconGithubFill">Github</bp-button>
        </div>
      </div>
    </div>
    <div :class="`${name}-search`">
      <div :class="`${name}-search-cotainer`">
        <div :class="`${name}-search-inner`">
          <!-- 类型选择器 -->
          <type-selector v-model="currentType"></type-selector>
          <!-- 查询框 -->
          <search-input v-model="searchKey"></search-input>
        </div>
      </div>
    </div>
    <div :class="`${name}-icons`">
      <div :class="`${name}-icons-container`">
        <div id="All Icons"></div>
        <icon-group v-for="v in searchIcons" :all-icons="allIcons" :group-info="v"></icon-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import allIcons, { iconInfo, IconGithubFill } from "birdpaper-icon";
import iconGroup from "./components/icon-group.vue";
import typeSelector from "./components/type-selector.vue";
import searchInput from "./components/search-input.vue";
import { ref, computed } from "vue";
import { deepClone } from "@/utils/helper";
import remixLogo from "@/assets/remix-logo.svg";

const name = "home-page";
const currentType = ref<string>("All Icons");

const searchKey = ref<string>("");
const searchIcons = computed(() => {
  const rawIcons = deepClone(iconInfo);

  for (let i = 0; i < rawIcons.length; i++) {
    rawIcons[i].list = rawIcons[i].list.filter(item => item.includes(searchKey.value));
  }
  return rawIcons;
});

const remixHomePage = "https://remixicon.cn";
const linkToRemix = () => window.open(remixHomePage);
</script>
