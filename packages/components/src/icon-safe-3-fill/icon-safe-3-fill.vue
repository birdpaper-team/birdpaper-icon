<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3 3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h1v2h2v-2h12v2h2v-2h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3Zm12.35 5.236 1.332-1.332 1.414 1.414-1.333 1.333a3.757 3.757 0 0 1 0 3.698l1.333 1.333-1.414 1.414-1.333-1.333a3.758 3.758 0 0 1-3.698 0l-1.333 1.333-1.414-1.414 1.333-1.333a3.757 3.757 0 0 1 0-3.698L8.904 8.318l1.414-1.414 1.333 1.332a3.757 3.757 0 0 1 3.698 0Zm-.613 2.026a1.75 1.75 0 1 0-2.474 2.475 1.75 1.75 0 0 0 2.474-2.475ZM5 8h2v7H5V8Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSafe3Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-safe3fill`, { [`${name}-spin`]: props.spin }]);

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

