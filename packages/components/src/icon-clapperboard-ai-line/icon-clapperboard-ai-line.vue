<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m20.467 8.694.246-.566a4.363 4.363 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.366 4.366 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.366 4.366 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.363 4.363 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0ZM14.307 3h.034A5.99 5.99 0 0 0 14 5c0 .701.12 1.374.341 2h-2.343l2.31-4ZM20 11v8H4V6.46L5.998 3H2.992A1 1 0 0 0 2 3.993v16.014c0 .548.444.993.992.993h18.016a1 1 0 0 0 .992-.993V11h-2ZM8.307 3 5.998 7h3.69l2.31-4h-3.69Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconClapperboardAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-clapperboard-ai-line`, { [`${name}-spin`]: props.spin }]);

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

