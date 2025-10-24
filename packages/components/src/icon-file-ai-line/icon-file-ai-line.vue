<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M13 4h-2v5a1 1 0 0 1-1 1H5v10h14V10h2v11.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997V2h4v2ZM5.83 8H9V4.83L5.83 8ZM19.47.33a.507.507 0 0 0-.94 0l-.254.61a4.366 4.366 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.364 4.364 0 0 1 2.22 2.25l.245.566c.18.415.753.415.934 0l.247-.565a4.363 4.363 0 0 1 2.219-2.251l.76-.338a.53.53 0 0 0 0-.963l-.718-.32A4.367 4.367 0 0 1 19.724.942L19.47.329Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconFileAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-file-ai-line`, { [`${name}-spin`]: props.spin }]);

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

