<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m20.467 8.694.246-.566a4.363 4.363 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.366 4.366 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.366 4.366 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.363 4.363 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0ZM20 11a5.99 5.99 0 0 0 2-.341v9.348a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h3.006l-2.31 4h2.31l2.31-4h3.69l-2.31 4h2.31l2.31-4h.033A6 6 0 0 0 20 11Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconClapperboardAiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-clapperboard-ai-fill`, { [`${name}-spin`]: props.spin }]);

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

