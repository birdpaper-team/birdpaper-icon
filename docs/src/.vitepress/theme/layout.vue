<template>
  <DefaultTheme.Layout>
    <template #home-features-after>
      <home-page></home-page>
    </template>
    <template #nav-bar-content-after>
      <NolebaseEnhancedReadabilitiesMenu />
    </template>
    <template #nav-screen-content-after>
      <NolebaseEnhancedReadabilitiesScreenMenu />
    </template>
  </DefaultTheme.Layout>

  <the-float />

  <div class="site-footer">
    <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">粤ICP备17015354号</a>
  </div>
</template>

<script setup lang="ts">
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import DefaultTheme from "vitepress/theme";
import HomePage from "../components/home/index.vue";
import theFloat from "../components/the-float/index.vue";

import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";
</script>

<style>
.site-footer {
  text-align: center;
  padding: 16px 0 24px;
  font-size: 12px;
  color: var(--bp-gary-5);
}

.site-footer a {
  color: var(--bp-gary-5);
  text-decoration: none;
  transition: color 0.2s ease;
}

.site-footer a:hover {
  color: var(--bp-gary-7);
}
</style>
