<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18Zm-1 2H4v14h16V5ZM9 8c1.104 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 1 0 0 2.828l1.413 1.413A4.001 4.001 0 0 1 5 12c0-2.208 1.792-4 4-4Zm7 0c1.105 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 1 0 0 2.828l1.413 1.413A4.001 4.001 0 0 1 12 12c0-2.208 1.792-4 4-4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconClosedCaptioningLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-closed-captioning-line`, { [`${name}-spin`]: props.spin }]);

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

