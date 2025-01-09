<template>
  <DefaultTheme.Layout>
    <template #home-features-after>
      <home-page :lang></home-page>
    </template>
    <template #nav-bar-content-after>
      <NolebaseEnhancedReadabilitiesMenu />
    </template>
    <template #nav-screen-content-after>
      <NolebaseEnhancedReadabilitiesScreenMenu />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import DefaultTheme from "vitepress/theme";
import HomePage from "../components/home/index.vue";

import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";
import { useData } from "vitepress";

const { lang } = useData();
</script>
