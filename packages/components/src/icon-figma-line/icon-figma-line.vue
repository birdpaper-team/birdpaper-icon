<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 2.646 7A4 4 0 0 1 13 15.465V18a4 4 0 1 1-6.646-3A3.99 3.99 0 0 1 5 12a3.99 3.99 0 0 1 1.354-3A3.99 3.99 0 0 1 5 6Zm6 4H9a2 2 0 1 0 0 4h2v-4Zm2 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2-4a2 2 0 1 0 0-4h-2v4h2ZM9 4a2 2 0 1 0 0 4h2V4H9Zm2 12H9a2 2 0 1 0 2 2v-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconFigmaLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-figma-line`, { [`${name}-spin`]: props.spin }]);

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

