<template>
  <div :class="name" v-if="groupInfo.list.length > 0">
    <div :class="`${name}-title`" :id="groupInfo.name">
      <p>{{ groupInfo.name }}</p>
      <span>{{ groupInfo.list.length }}</span>
    </div>

    <div :class="`${name}-container`" :id="`${groupInfo.name}-container`">
      <div :class="`${name}-item`" v-for="(icon, index) in groupInfo.list" @click="handleClick(icon)" :key="`icno-${index}`">
        <component :is="allIcons[`Icon${toPascalCase(icon)}`]" size="24"></component>
        <span :class="`${name}-item-name`">{{ splitIconName(icon) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import allIcons from "birdpaper-icon/index.ts";

const props = defineProps({
  groupInfo: { type: Object as PropType<{ name: string; list: string[] }>, default: () => {} },
});
const emits = defineEmits(["on-detail"]);

const name = "home-icon-group";

const splitIconName = (name: string) => {
  let strArr = name.split("-");
  strArr.splice(strArr.length - 1, 1);

  return strArr.join("-");
};

const toPascalCase = (string: string): string => {
  return string
    .replace(/^./, (match) => match.toLocaleUpperCase())
    .replace(/-(.)/g, (match, p1: string) => {
      return p1.toLocaleUpperCase();
    });
};
const handleClick = (icon: string) => {
  emits("on-detail", icon);
};
</script>
