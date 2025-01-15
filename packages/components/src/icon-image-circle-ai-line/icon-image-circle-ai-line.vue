<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m20.467 8.694.246-.566a4.363 4.363 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.366 4.366 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.366 4.366 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.363 4.363 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0ZM12 4a8 8 0 0 0-5.135 14.135l7.428-7.428a1 1 0 0 1 1.414 0l3.87 3.87a7.992 7.992 0 0 0 .368-3.531l1.985-.237c.046.391.07.789.07 1.191 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c.861 0 1.699.11 2.498.315L14 4.252A8.016 8.016 0 0 0 12 4Zm-1.187 15.913a7.993 7.993 0 0 0 7.825-3.446L15 12.828l-6.41 6.41.003.003a7.942 7.942 0 0 0 2.22.672ZM11 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconImageCircleAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-image-circle-ai-line`, { [`${name}-spin`]: props.spin }]);

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

