<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M2.88 18.05A35.897 35.897 0 0 1 11.41 1.728a.8.8 0 0 1 1.178 0 35.897 35.897 0 0 1 8.531 16.32c-2.141.451-4.34.747-6.584.875L12.447 23.1a.5.5 0 0 1-.894 0l-2.089-4.177a44.028 44.028 0 0 1-6.584-.875Zm6.697-1.123 1.158.066L12 19.523l1.265-2.53 1.157-.066a42.139 42.139 0 0 0 4.227-.455 33.914 33.914 0 0 0-6.65-12.387 33.913 33.913 0 0 0-6.648 12.387 42.14 42.14 0 0 0 4.226.455ZM12 14.995a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSpaceShipLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-space-ship-line`, { [`${name}-spin`]: props.spin }]);

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

