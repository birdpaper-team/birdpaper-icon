<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m20.713 7.128-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.363 4.363 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.366 4.366 0 0 0 19.276.931L19.53.32a.506.506 0 0 1 .942 0l.253.61a4.366 4.366 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.363 4.363 0 0 0-2.219 2.251ZM9 2a8.002 8.002 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L17 14.07V17a2 2 0 0 1-2 2h-1.999L13 22H4v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0 1 9 2Zm0 2a6 6 0 0 0-4.684 9.75C5.41 15.114 6 16.667 6 18.306V20h5l.002-3H15v-4.248l1.55-.664-1.543-2.425-.057-.442A6.001 6.001 0 0 0 9 4Zm10.49 12.993 1.664 1.11A10.948 10.948 0 0 0 23 12c0-.683-.062-1.351-.181-2l-1.943.5c.081.488.124.989.124 1.5a8.959 8.959 0 0 1-1.51 4.993Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSpeakAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-speak-ai-line`, { [`${name}-spin`]: props.spin }]);

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

