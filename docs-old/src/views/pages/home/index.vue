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
            <img :src="remixLogo" @click="linkTo('remix')" /> second development, for learning and reference use only, thanks to the Remix
            Design team.
          </p>
        </div>
        <div :class="`${name}-banner-content-option mt-20px`">
          <bp-button> 快速上手 </bp-button>
          <bp-button :icon="IconGithubFill" type="plain" status="gary" @click="linkTo('github')">Github</bp-button>
        </div>
      </div>
    </div>
    <div :class="`${name}-search`">
      <div :class="`${name}-search-cotainer`">
        <div :class="`${name}-search-inner`">
          <type-selector v-model="currentType"></type-selector>
          <search-input v-model="searchKey"></search-input>
        </div>
      </div>
    </div>
    <div :class="`${name}-icons`">
      <div :class="`${name}-icons-container`">
        <div id="All Icons"></div>
        <icon-group v-for="v in searchIcons" :all-icons="allIcons" :group-info="v" @on-detail="onDetail"></icon-group>
      </div>
    </div>
  </div>

  <icon-detail ref="iconDetailRef"></icon-detail>
</template>

<script setup lang="ts">
import allIcons, { iconInfo, IconGithubFill } from "birdpaper-icon/index.ts";
import iconGroup from "./components/icon-group.vue";
import typeSelector from "./components/type-selector.vue";
import searchInput from "./components/search-input.vue";
import iconDetail from "./components/icon-detail.vue";
import { ref, computed } from "vue";
import { deepClone } from "@/utils/helper";
import remixLogo from "@/assets/remix-logo.svg";

const name = "home-page";
const currentType = ref<string>("All Icons");

const searchKey = ref<string>("");
const searchIcons = computed(() => {
  const rawIcons = deepClone(iconInfo);

  for (let i = 0; i < rawIcons.length; i++) {
    rawIcons[i].list = rawIcons[i].list.filter((item) => item.includes(searchKey.value));
  }
  return rawIcons;
});

const iconDetailRef = ref();
const onDetail = (icon: string) => {
  iconDetailRef.value.open(icon);
};

const homeUrlMap = {
  remix: "https://remixicon.cn",
  github: "https://github.com/birdpaper-team/birdpaper-icon",
  npm: "https://www.npmjs.com/package/birdpaper-icon",
};
const linkTo = (type: string) => window.open(homeUrlMap[type]);
</script>
