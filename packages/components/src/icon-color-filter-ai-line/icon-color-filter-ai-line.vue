<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M6.007 7.297A6 6 0 0 1 15.6 2.2l-1.2 1.6a4.018 4.018 0 0 0-3.206-.718 4.001 4.001 0 0 0 .287 7.885 5.996 5.996 0 0 1 7.849-1.663A6 6 0 1 1 12 18.655a6 6 0 1 1-5.764-9.983 5.984 5.984 0 0 1-.226-1.33l-.003-.045Zm1.143 3.236a4 4 0 1 0 4.215 2.434 5.975 5.975 0 0 1-1.252-.27 6.014 6.014 0 0 1-2.963-2.164Zm6.004 6.401a4 4 0 1 0 0-4.868 6.003 6.003 0 0 1 .43 1.412 6.018 6.018 0 0 1-.43 3.456ZM18.577 7c.289.334.529.714.71 1.128l.246.566c.18.414.753.414.934 0l.246-.566a4.363 4.363 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.366 4.366 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.343 4.343 0 0 1-2.25 2.326l-.718.32a.53.53 0 0 0 0 .963l.76.338A4.313 4.313 0 0 1 18.578 7Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconColorFilterAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-color-filter-ai-line`, { [`${name}-spin`]: props.spin }]);

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

