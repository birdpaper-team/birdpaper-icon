<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m20.467 8.694.246-.566a4.363 4.363 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.366 4.366 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.366 4.366 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.363 4.363 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0ZM12 22c5.523 0 10-4.477 10-10 0-.403-.024-.8-.07-1.19l-1.986.235c.037.313.056.632.056.955 0 1.458-.39 2.824-1.071 4.001L15.464 10h2.466l-1.154-2H12l3.169-5.488A9.99 9.99 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10Zm0-18-3.464 6-2.141-3.708A7.975 7.975 0 0 1 12 4Zm-2.31 8 1.156-2h2.309l1.155 2-1.155 2h-2.31l-1.154-2ZM12 16l-2.142 3.71A8.018 8.018 0 0 1 5.07 16H12Zm0 4 3.464-6 2.141 3.708A7.974 7.974 0 0 1 12 20ZM5.071 7.999 8.536 14H4.252A8.014 8.014 0 0 1 4 12c0-1.458.39-2.824 1.071-4.001Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCameraLensAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-camera-lens-ai-line`, { [`${name}-spin`]: props.spin }]);

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

