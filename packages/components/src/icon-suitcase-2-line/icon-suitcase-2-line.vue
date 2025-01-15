<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18 23h-2v-1H8v1H6v-1H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-1v1Zm1-16H5v13h14V7Zm-9 2v9H8V9h2Zm6 0v9h-2V9h2Zm-2-5h-4v1h4V4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSuitcase2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-suitcase2line`, { [`${name}-spin`]: props.spin }]);

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

