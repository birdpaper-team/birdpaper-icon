<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M7.094 5.68 18.32 16.906A8 8 0 0 0 7.094 5.68Zm9.812 12.64L5.68 7.094A8 8 0 0 0 16.906 18.32ZM4.929 4.929A9.972 9.972 0 0 1 12 2c5.523 0 10 4.477 10 10a9.972 9.972 0 0 1-2.929 7.071A9.972 9.972 0 0 1 12 22C6.477 22 2 17.523 2 12a9.972 9.972 0 0 1 2.929-7.071Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconProhibitedLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-prohibited-line`, { [`${name}-spin`]: props.spin }]);

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

