<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M21 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1ZM4 9.86 7.032 12 4 14.14V9.86Zm-1.5 7.675a.5.5 0 0 0 .288-.092l7.133-5.035a.5.5 0 0 0 0-.817L2.788 6.556A.5.5 0 0 0 2 6.965v10.07a.5.5 0 0 0 .5.5ZM16.032 12 13 14.14V9.86L16.032 12Zm-4.94-5.323a.5.5 0 0 0-.092.288v10.07a.5.5 0 0 0 .788.408l7.133-5.035a.5.5 0 0 0 0-.817l-7.133-5.035a.5.5 0 0 0-.697.12Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconForwardEndMiniLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-forward-end-mini-line`, { [`${name}-spin`]: props.spin }]);

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

