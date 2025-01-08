<template>
  <div :class="name">
    <div :class="`${name}-inner`">
      <div :class="`${name}-logo`">
        <img :class="`${name}-logo-inner`" src="https://cos.birdpaper.design/birdpaper-icon/v1/logo/logo-black.svg" alt="BirdpaperICON" />
        <span :class="`${name}-logo-version`">v1.0.0</span>
      </div>
      <div :class="`${name}-route`">
        <ul :class="`${name}-route-inner`">
          <li :class="[`${name}-route-item`, `${v.type}`]" v-for="v in routes">
            <component v-if="v.icon" :is="v.icon" size="20"></component>
            <span v-if="v.title">{{ v.title }}</span>
            <div v-if="v.type === 'separator'"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconGithubFill } from "birdpaper-icon";

const name = "top-bar";

interface RouteItem {
  title?: string;
  name?: string;
  icon?: Comment;
  type?: "separator";
}

const routes: RouteItem[] = [
  {
    title: "文档",
    name: "document",
  },
  {
    title: "UI 组件",
    name: "components",
  },
  {
    type: "separator",
  },
  {
    icon: IconGithubFill as unknown as Comment,
    name: "github",
  },
];
</script>
