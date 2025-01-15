<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18 3a3 3 0 1 1 0 6h-3a3.001 3.001 0 0 1-2.829-2H11c-1.1 0-2 .9-2 2v.171a3.001 3.001 0 0 1 0 5.658V15c0 1.1.9 2 2 2h1.17A3.001 3.001 0 0 1 15 15h3a3 3 0 1 1 0 6h-3a3.001 3.001 0 0 1-2.829-2H11c-2.21 0-4-1.79-4-4H5a3 3 0 1 1 0-6h2a4 4 0 0 1 4-4h1.17A3.001 3.001 0 0 1 15 3h3Zm0 14h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2ZM8 11H5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Zm10-6h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMindMap"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-mind-map`, { [`${name}-spin`]: props.spin }]);

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

