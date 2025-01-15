<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2v-2H6v2H4v-2H3a1 1 0 0 1-1-1V4Zm2 14h16V5H4v13Zm11.35-9.764a3.757 3.757 0 0 0-3.7 0l-1.332-1.332-1.414 1.414 1.333 1.333a3.757 3.757 0 0 0 0 3.698l-1.333 1.333 1.414 1.414 1.333-1.333a3.758 3.758 0 0 0 3.698 0l1.333 1.333 1.414-1.414-1.333-1.333a3.757 3.757 0 0 0 0-3.698l1.333-1.333-1.414-1.414-1.333 1.332Zm-.613 2.026a1.75 1.75 0 1 1-2.474 2.475 1.75 1.75 0 0 1 2.474-2.475ZM5 8v7h2V8H5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSafe3Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-safe3line`, { [`${name}-spin`]: props.spin }]);

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

