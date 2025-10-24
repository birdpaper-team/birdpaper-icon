<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c5.512 0 9.982 4.46 9.999 9.968v.02L22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2c-1.925 0-3.691.68-5.071 1.813A7 7 0 0 1 16 12.5a1 1 0 1 1-2-.001 5 5 0 0 0-5-5c-2.611 0-4.769 2-4.999 4.543a8 8 0 0 0 13.07 6.143A7 7 0 0 1 8 11.5a1 1 0 1 1 1.999 0 5 5 0 0 0 5 5c2.612 0 4.768-2.001 4.998-4.544A7.998 7.998 0 0 0 12 4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRemixLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-remix-line`, { [`${name}-spin`]: props.spin }]);

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

