<template>
  <div :class="name">
    <div :class="`${name}-inner`">
      <div :class="`${name}-logo`">
        <img
          :class="`${name}-logo-inner`"
          src="https://cos.birdpaper.design/birdpaper-icon/public/birdpaper-icon_logo_text.png"
          alt="BirdpaperICON"
        />
        <span :class="`${name}-logo-version`">v0.1.0-beat</span>
      </div>
      <!-- <div :class="`${name}-route`">
        <ul :class="`${name}-route-inner`">
          <li :class="[`${name}-route-item`, `${v.type}`]" v-for="v in routes">
            <span v-if="v.type === 'text-link'">{{ v.title }}</span>
            <component v-if="v.type === 'icon-link'" :is="v.icon" size="20"></component>
            <div v-if="v.type === 'separator'"></div>
          </li>
        </ul>
      </div> -->
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
  type: "text-link" | "icon-link" | "separator";
}

const routes: RouteItem[] = [
  // {
  //   title: "文档",
  //   name: "document",
  //   type: "text-link",
  // },
  // {
  //   title: "许可",
  //   name: "license",
  //   type: "text-link",
  // },
  // {
  //   type: "separator",
  // },
  // {
  //   icon: IconGithubFill as unknown as Comment,
  //   name: "github",
  //   type: "icon-link",
  // },
];
</script>
