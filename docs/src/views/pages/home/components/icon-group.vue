<template>
  <div :class="name">
    <p :class="`${name}-title`">{{ groupInfo.name }}</p>
    <div :class="`${name}-container`">
      <div :class="`${name}-item`" v-for="icon in groupInfo.list">
        <component :is="allIcons[`Icon${toPascalCase(icon)}`]" size="22"></component>
        <span :class="`${name}-item-name`">{{ splitIconName(icon) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toPascalCase } from "@/utils/helper";
import { PropType } from "vue";

const props = defineProps({
  allIcons: { type: Object, default: () => {} },
  groupInfo: { type: Object as PropType<{ name: string; list: string[] }>, default: () => {} },
});

const name = "home-icon-group";

const splitIconName = (name: string) => {
  let strArr = name.split("-");
  strArr.splice(strArr.length - 1, 1);

  return strArr.join("-");
};
</script>
