<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11 21v-1.07A7.001 7.001 0 0 1 5 13V8a7 7 0 0 1 14 0v5a7.001 7.001 0 0 1-6 6.93V21h4v2H7v-2h4Zm1-18a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V8a5 5 0 0 0-5-5Zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconWebcamLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-webcam-line`, { [`${name}-spin`]: props.spin }]);

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

