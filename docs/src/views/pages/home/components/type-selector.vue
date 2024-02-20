<template>
  <div :class="`${name}`">
    <bp-trigger v-model:popupVisible="triggerVisible" position="bottom" :popup-offset="20">
      <div :class="[`${name}-container`, { 'trigger-active': triggerVisible }]">
        <span>{{ model }}</span>
        <IconArrowDownSLine v-if="!triggerVisible" size="20" />
        <IconSubtractLine v-else size="20" />
      </div>
      <template #content>
        <div class="icon-select-trigger">
          <ul>
            <li
              v-for="v in typeLilst"
              :class="['icon-select-trigger-item', { active: model === v.name }]"
              @click="handleSelect(v.name)"
            >
              <p class="icon-select-trigger-item-inner">
                <span>{{ v.name }}</span>
                <span v-if="v.list.length" class="icons-length">{{ v.list.length }}</span>
              </p>
            </li>
          </ul>
        </div>
      </template>
    </bp-trigger>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { iconInfo, IconArrowDownSLine, IconSubtractLine } from "birdpaper-icon";

const model = defineModel({ type: String, default: "" });

const name = "home-page-search-select";
const triggerVisible = ref<boolean>(false);
const typeLilst = [
  {
    name: "All Icons",
    list: [],
  },
  ...iconInfo,
];

const handleSelect = (name: string) => {
  model.value = name;
  var targetElement = document.getElementById(name);

  // 判断目标元素是否存在
  if (targetElement) {
    // 将页面滚动到目标元素位置
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  } else {
    console.log("未找到指定的ID！");
  }
  triggerVisible.value = false;
};
</script>
