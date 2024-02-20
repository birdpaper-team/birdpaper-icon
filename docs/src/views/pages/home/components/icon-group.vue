<template>
  <div :class="name" v-if="groupInfo.list.length > 0">
    <div :class="`${name}-title`" :id="groupInfo.name">
      <p>{{ groupInfo.name }}</p>
      <span>{{ groupInfo.list.length }}</span>
    </div>

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
