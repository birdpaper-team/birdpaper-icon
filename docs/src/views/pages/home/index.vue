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
            <bp-trigger v-model:popupVisible="typeSelectVisible" position="bottom" :popup-offset="20">
              <div :class="[`${name}-search-select-container`, { 'trigger-active': typeSelectVisible }]">
                <span>All Icons</span>
                <IconArrowDownSLine v-if="!typeSelectVisible" size="20" />
                <IconSubtractLine v-else size="20" />
              </div>
              <template #content>
                <div class="icon-select-trigger">
                  <ul>
                    <li class="icon-select-trigger-item">
                      <span>All Icons</span>
                    </li>
                    <li v-for="v in iconInfo" class="icon-select-trigger-item">
                      <p class="icon-select-trigger-item-inner">
                        <span>{{ v.name }}</span>
                        <span class="icons-length">{{ v.list.length }}</span>
                      </p>
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
              <input type="text" :placeholder="`Search ${Object.keys(allIcons).length - 3} Icons.`" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="`${name}-icons`">
      <div :class="`${name}-icons-container`">
        <icon-group v-for="v in iconInfo" :all-icons="allIcons" :group-info="v"></icon-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import allIcons, { iconInfo, IconArrowDownSLine, IconSearch2Line, IconSubtractLine } from "birdpaper-icon";
import { ref } from "vue";
import IconGroup from "./components/icon-group.vue";

const name = "home-page";

const typeSelectVisible = ref<boolean>(false);
</script>
