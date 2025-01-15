<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m4.713 7.128-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.363 4.363 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.366 4.366 0 0 0 3.276.931L3.53.32a.506.506 0 0 1 .942 0l.253.61a4.366 4.366 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.363 4.363 0 0 0-2.219 2.251Zm13.515-4.757-4.94 3.842c-3.946-.974-7.73 1.333-8.788 5.284-.102.38-.134.765-.167 1.169-.115 1.394-.247 3.005-3.333 5.33 2.5 1.5 7 3.002 10.502 3.002a7.505 7.505 0 0 0 7.283-9.291l3.84-4.938a1 1 0 0 0-.082-1.321l-2.994-2.994a1 1 0 0 0-1.321-.083Zm-1.333 5.914a7.48 7.48 0 0 0-.194-.194l-1.124-1.124 3.182-2.475 1.746 1.746L18.03 9.42l-1.135-1.135Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBrushAiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-brush-ai-fill`, { [`${name}-spin`]: props.spin }]);

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

