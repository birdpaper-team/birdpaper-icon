<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m19.713 8.128-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.363 4.363 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.366 4.366 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.366 4.366 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.363 4.363 0 0 0-2.219 2.251ZM22.9 21l-4.4-11h-2l-4.399 11h2.154l1.199-3h4.09l1.201 3H22.9Zm-6.647-5 1.247-3.115L18.745 16h-2.492Zm-8.706-3.696A18.27 18.27 0 0 1 4.723 8h2.24a16.29 16.29 0 0 0 2.021 2.91A15.5 15.5 0 0 0 11.996 6H2V4h6V2h2v2h4.65a17.473 17.473 0 0 1-4.26 8.338 16.31 16.31 0 0 0 2.324 1.743l-.753 1.882a18.312 18.312 0 0 1-3.01-2.23 17.473 17.473 0 0 1-6.148 3.449l-.606-1.906a15.47 15.47 0 0 0 5.35-2.972Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconTranslateAi2"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-translate-ai2`, { [`${name}-spin`]: props.spin }]);

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

