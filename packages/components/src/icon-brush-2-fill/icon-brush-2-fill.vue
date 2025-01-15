<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m16.536 15.947 2.121-2.122-3.182-3.182 3.536-3.535-2.122-2.122-3.535 3.536-3.182-3.182L8.05 7.46l8.486 8.485ZM13.354 5.693l2.828-2.828a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-2.829 2.828 2.475 2.475a1 1 0 0 1 0 1.414L13 22.311a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l7.779-7.778a1 1 0 0 1 1.414 0l2.475 2.474Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBrush2Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-brush2fill`, { [`${name}-spin`]: props.spin }]);

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

