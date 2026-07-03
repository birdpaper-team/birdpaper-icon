<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2a9 9 0 0 1 9 9v8a1 1 0 0 1-.293.707l-2 2a1 1 0 0 1-1.262.125L15 20.202l-2.445 1.63a1 1 0 0 1-1.11 0L9 20.202l-2.445 1.63a1 1 0 0 1-1.262-.125l-2-2A1 1 0 0 1 3 19v-8a9 9 0 0 1 9-9Zm0 2a7 7 0 0 0-7 7v7.586l1.127 1.127 2.318-1.545.13-.073a1 1 0 0 1 .98.073L12 19.798l2.445-1.63.13-.073a1 1 0 0 1 .98.073l2.317 1.545L19 18.586V11a7 7 0 0 0-7-7ZM9.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGhost3Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-ghost3line`, { [`${name}-spin`]: props.spin }]);

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

