<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M7.5 11a2 2 0 1 0 0-4H3v4h4.5Zm1 2H3v4h5.5a2 2 0 1 0 0-4Zm2.063-1.428A4 4 0 0 1 8.5 19H1V5h6.5a4 4 0 0 1 3.063 6.572ZM15.5 6H21v1.5h-5.5V6Zm7.5 8.5h-7.5v.25A2.75 2.75 0 0 0 20.7 16h2.134a4.752 4.752 0 0 1-9.334-1.25v-1.5a4.75 4.75 0 1 1 9.5 0v1.25Zm-2.104-2a2.751 2.751 0 0 0-5.293 0h5.293Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBehanceLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-behance-line`, { [`${name}-spin`]: props.spin }]);

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

