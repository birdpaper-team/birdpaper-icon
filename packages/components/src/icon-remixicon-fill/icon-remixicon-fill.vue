<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M16.53 17.53 20.001 21h-17V4h10.667v.008A7.118 7.118 0 0 1 14.137 4c-.089.37-.136.76-.136 1.166 0 2.318 2.015 4.333 4.667 4.333.724 0 1.419-.197 2.032-.538a7.002 7.002 0 0 1-4.17 8.567ZM18.501 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRemixiconFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-remixicon-fill`, { [`${name}-spin`]: props.spin }]);

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

