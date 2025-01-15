<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2a9 9 0 0 1 6.894 14.786c1.255.83 2.034 1.89 2.101 3.049L21 20l-9 2-9-2 .005-.165c.067-1.16.846-2.22 2.1-3.05A8.965 8.965 0 0 1 3 11a9 9 0 0 1 9-9Zm0 2a7 7 0 0 0-7 7c0 1.567.514 3.05 1.445 4.261l.192.239 1.443 1.717-1.962 1.299-.137.097L12 19.951l6.018-1.338-.049-.036-.178-.123-1.871-1.237 1.443-1.718A6.963 6.963 0 0 0 19 11a7 7 0 0 0-7-7Zm0 9c1.38 0 2.5.672 2.5 1.5S13.38 16 12 16s-2.5-.672-2.5-1.5S10.62 13 12 13ZM9 8c1.105 0 2 .672 2 1.5S10.105 11 9 11s-2-.672-2-1.5S7.895 8 9 8Zm6 0c1.105 0 2 .672 2 1.5s-.895 1.5-2 1.5-2-.672-2-1.5.895-1.5 2-1.5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCriminalLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-criminal-line`, { [`${name}-spin`]: props.spin }]);

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

