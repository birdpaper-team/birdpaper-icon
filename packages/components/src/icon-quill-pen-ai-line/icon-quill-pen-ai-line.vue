<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m4.713 7.128-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.363 4.363 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.366 4.366 0 0 0 3.276.931L3.53.32a.506.506 0 0 1 .942 0l.253.61a4.366 4.366 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.363 4.363 0 0 0-2.219 2.251Zm1.621 8.687c.176-.582.373-1.159.605-1.782 2.056-5.527 5.48-8.951 11.074-9.818-.513 1.143-.998 1.938-1.427 2.367l-1.001 1.002L14.172 9l1.456 1.454c-1.13 2.085-3.363 3.745-5.876 4.059-1.317.165-2.459.607-3.418 1.303ZM18 9.997l-1-1 1.003-1.003c.999-1.001 1.998-3 2.997-5.997-14.689 0-16.911 13.425-17.936 19.616L3 21.997h1.998c.666-3.334 2.333-5.167 5.002-5.5 4-.5 7-3.5 8-6.5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconQuillPenAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-quill-pen-ai-line`, { [`${name}-spin`]: props.spin }]);

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

