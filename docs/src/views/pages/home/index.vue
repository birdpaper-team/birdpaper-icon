<template>
  <div :class="name">
    <div :class="`${name}-banner`">
      <div :class="`${name}-banner-content`"></div>
    </div>
    <div :class="`${name}-search`">
      <div :class="`${name}-search-cotainer`">
        <div :class="`${name}-search-inner`">
          <!-- 类型选择器 -->
          <div :class="`${name}-search-select`">
            <div :class="`${name}-search-select-container`">
              <span>All Icons</span>
              <IconArrowDownSLine size="20" />
            </div>
          </div>

          <div :class="`${name}-search-input`">
            <div :class="`${name}-search-input-icon`">
              <IconSearch2Line size="22" />
            </div>
            <div :class="`${name}-search-input-inner`">
              <input type="text" :placeholder="`Search ${Object.keys(allIcons).length - 2} Icons.`" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import allIcons, { iconType, IconArrowDownSLine, IconSearch2Line } from "birdpaper-icon";

const name = "home-page";
</script>
