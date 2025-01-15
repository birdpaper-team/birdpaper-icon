<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m17.841 15.659.176.177.178-.177a2.25 2.25 0 1 1 3.181 3.182L18.018 22.2l-3.359-3.359a2.25 2.25 0 1 1 3.182-3.182ZM12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 7.75-7.996L12 14Zm0-13c3.315 0 6 2.685 6 6a5.998 5.998 0 0 1-5.775 5.996L12 13c-3.315 0-6-2.685-6-6a5.998 5.998 0 0 1 5.775-5.996L12 1Zm0 2C9.79 3 8 4.79 8 7s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconUserHeartLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-user-heart-line`, { [`${name}-spin`]: props.spin }]);

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

