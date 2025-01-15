<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5.5 12H4V7H2V5h6v2H6v2.795l9.813-2.629L15.233 5H12V3h3.978a1 1 0 0 1 .988.741l1.553 5.796-1.932.517-.256-.956L5.5 12ZM5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm13-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBikeLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-bike-line`, { [`${name}-spin`]: props.spin }]);

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

