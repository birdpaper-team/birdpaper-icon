<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m17.813 6.503-4.398 6.911-6.911 4.398A7.973 7.973 0 0 0 11 19.938V18h2v1.938a7.96 7.96 0 0 0 3.906-1.618l-1.37-1.37 1.414-1.414 1.37 1.37A7.96 7.96 0 0 0 19.939 13h-1.938v-2h1.938a7.974 7.974 0 0 0-2.126-4.497Zm-.315-.315a7.973 7.973 0 0 0-4.497-2.126V6h-2V4.062A7.96 7.96 0 0 0 7.095 5.68l1.37 1.37-1.414 1.414-1.37-1.37A7.96 7.96 0 0 0 4.063 11H6v2H4.063a7.973 7.973 0 0 0 2.126 4.497l4.398-6.911 6.911-4.398ZM12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSafariLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-safari-line`, { [`${name}-spin`]: props.spin }]);

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

