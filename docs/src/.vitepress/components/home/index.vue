<template>
  <div :class="name">
    <div :class="`${name}-banner`">
      <div :class="`${name}-banner-content`">
        <div :class="`${name}-banner-content-title`">
          <p v-html="inrto[locale].title"></p>
        </div>
        <div :class="`${name}-banner-content-remark`">
          <p>
            <span v-html="inrto[locale].remark[0]" />
            <img :src="isDark ? remixLogoWhite : remixLogo" @click="linkTo('remix')" />
            <span v-html="inrto[locale].remark[1]" />
          </p>
        </div>
        <div :class="`${name}-banner-content-option mt-20px`">
          <bp-button>{{ inrto[locale].btn.quickStart }}</bp-button>
          <bp-button :icon="IconGithubFill" type="plain" status="primary" @click="linkTo('github')">Github</bp-button>
        </div>
      </div>
    </div>
    <div :class="`${name}-search`">
      <div :class="`${name}-search-container`">
        <div :class="`${name}-search-inner`">
          <type-selector v-model="currentType"></type-selector>
          <search-input v-model="searchKey"></search-input>
        </div>
      </div>
    </div>
    <div :class="`${name}-icons`">
      <div :class="`${name}-icons-container`">
        <div id="All Icons"></div>
        <template v-for="(v, i) in searchIcons" :key="i">
          <icon-group :group-info="v" @on-detail="onDetail"></icon-group>
        </template>
      </div>
    </div>
  </div>

  <icon-detail ref="iconDetailRef"></icon-detail>
</template>

<script setup lang="ts">
import { iconInfo, IconGithubFill } from "birdpaper-icon";
import iconGroup from "./components/icon-group.vue";
import typeSelector from "./components/type-selector.vue";
import searchInput from "./components/search-input.vue";
import iconDetail from "./components/icon-detail.vue";
import { useData } from "vitepress";
import { ref, computed } from "vue";
// @ts-ignore
import remixLogo from "../../../assets/remix-logo.svg";
// @ts-ignore
import remixLogoWhite from "../../../assets/remix-logo-white.svg";

const name = "home-page";
const { lang, isDark } = useData();
const locale = computed<Locale>(() => (lang.value === "zh-CN" ? "zh-CN" : "en"));

type Locale = "zh-CN" | "en";

const inrto: Record<Locale, { title: string; remark: string[]; btn: { quickStart: string } }> = {
  "zh-CN": {
    title: `Vue3 图标组件库`,
    remark: [`这是一个基于优秀的开源图标 - `, `二次开发的 Vue3 组件库，仅供学习和参考使用, 感谢 Remix 设计团队。`],
    btn: {
      quickStart: "快速上手",
    },
  },
  en: {
    title: `Vue3 Icon <br />Component Library.`,
    remark: [
      `This is an open source Vue3 component based on the excellent Icon library - `,
      ` second development, for learning and reference use only, thanks to the Remix Design team.`,
    ],
    btn: {
      quickStart: "QuickStart",
    },
  },
};

const currentType = ref<string>("All Icons");
const searchKey = ref<string>("");
const searchIcons = computed(() => {
  const rawIcons = JSON.parse(JSON.stringify(iconInfo));

  for (let i = 0; i < rawIcons.length; i++) {
    rawIcons[i].list = rawIcons[i].list.filter((item: string | string[]) => item.includes(searchKey.value));
  }
  return rawIcons;
});

const iconDetailRef = ref();
const onDetail = (icon: string) => {
  iconDetailRef.value.open(icon);
};

const homeUrlMap = {
  remix: "https://remixicon.com",
  github: "https://github.com/birdpaper-team/birdpaper-icon",
  npm: "https://www.npmjs.com/package/birdpaper-icon",
};
const linkTo = (type: keyof typeof homeUrlMap) => window.open(homeUrlMap[type]);
</script>
