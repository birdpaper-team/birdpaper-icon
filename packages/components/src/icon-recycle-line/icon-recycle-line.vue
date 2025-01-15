<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m19.56 12.098 1.532 2.652A3.5 3.5 0 0 1 18.061 20h-2.063v2.5l-5-3.5 5-3.5V18h2.063a1.5 1.5 0 0 0 1.299-2.25l-1.532-2.652 1.733-1ZM7.304 9.133l.53 6.08-2.165-1.25-1.03 1.786A1.5 1.5 0 0 0 5.937 18h3.062v2H5.937a3.5 3.5 0 0 1-3.032-5.25l1.031-1.787-2.165-1.249 5.532-2.58Zm6.446-6.165a3.5 3.5 0 0 1 1.28 1.281l1.032 1.786 2.165-1.25-.531 6.08-5.531-2.58 2.165-1.25-1.031-1.786a1.5 1.5 0 0 0-2.598 0L9.168 7.903l-1.732-1L8.968 4.25a3.5 3.5 0 0 1 4.78-1.281Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRecycleLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-recycle-line`, { [`${name}-spin`]: props.spin }]);

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

