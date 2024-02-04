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
              <IconArrowDownSLine />
            </div>
          </div>

          <div :class="`${name}-search-input`">
            <div :class="`${name}-search-input-icon`"></div>
            <div :class="`${name}-search-input-inner`">
              <input type="text" name="" id="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { iconType, IconArrowDownSLine } from "birdpaper-icon";

const name = "home-page";
</script>
