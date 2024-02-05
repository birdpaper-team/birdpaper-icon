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
            <bp-trigger v-model.popupVisible="typeSelectVisible" position="bottom" :popup-offset="20">
              <div :class="[`${name}-search-select-container`, { 'trigger-active': typeSelectVisible }]">
                <span>All Icons</span>
                <IconArrowDownSLine size="20" />
              </div>
              <template #content>
                <div class="icon-select-trigger">
                  <ul>
                    <li class="icon-select-trigger-item">
                      <span>All Icons</span>
                    </li>
                    <li v-for="v in iconType" class="icon-select-trigger-item">
                      <span>{{ v }}</span>
                    </li>
                  </ul>
                </div>
              </template>
            </bp-trigger>
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
import { ref } from "vue";

const name = "home-page";

const typeSelectVisible = ref<boolean>(false);
</script>
