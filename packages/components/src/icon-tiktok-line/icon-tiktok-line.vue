<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11 2v6.414a6.85 6.85 0 1 0 5.6 6.736v-3.736a8.603 8.603 0 0 0 3.4.686h1V6.5h-1c-1.903 0-3.4-1.537-3.4-3.5V2H11Zm2 2h1.688c.394 2.22 2.08 3.996 4.312 4.41v1.618c-1.038-.152-1.975-.542-2.843-1.123L14.6 7.863v7.287a4.85 4.85 0 1 1-4.6-4.844v1.604a3.25 3.25 0 1 0 3 3.24V4ZM8.5 15.15a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconTiktokLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-tiktok-line`, { [`${name}-spin`]: props.spin }]);

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

