<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M14 4.5V9c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81a9.002 9.002 0 0 0-7.655-4.805L16 15h-2v4.5L6 12l8-7.5Zm-6 0v2.737L2.92 12l5.079 4.761L8 19.5 0 12l8-7.5Zm4 4.616L8.924 12 12 14.883V13h4.034l.347.007c1.285.043 2.524.31 3.676.766A7.982 7.982 0 0 0 14 11h-2V9.116Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconReplyAllLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-reply-all-line`, { [`${name}-spin`]: props.spin }]);

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

