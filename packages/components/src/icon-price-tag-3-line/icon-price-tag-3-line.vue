<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m10.904 2.1 9.9 1.414 1.414 9.9-9.193 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.413L10.905 2.1Zm.707 2.122L3.833 12l8.485 8.485 7.779-7.778-1.061-7.425-7.425-1.06Zm2.122 6.363a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.829Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPriceTag3Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-price-tag3line`, { [`${name}-spin`]: props.spin }]);

const innerStyle = computed(() => {
  const styles: CSSProperties = {
    width: props.size,
    height: props.size,
    transform: props.rotate ? `rotate(${props.rotate}deg)` : undefined,
  };

  return styles;
});

const onClick = (ev: MouseEvent) => emits("click", ev);
</script>

