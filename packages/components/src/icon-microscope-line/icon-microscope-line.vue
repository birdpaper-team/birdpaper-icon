<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m13.196 2.268 3.25 5.63a1 1 0 0 1-.366 1.365l-1.3.75 1.001 1.732-1.732 1-1-1.733-1.299.751a1 1 0 0 1-1.366-.366L8.546 8.215a5.002 5.002 0 0 0-3.222 6.56A4.975 4.975 0 0 1 8 14c1.684 0 3.174.833 4.08 2.109l7.688-4.439 1 1.732-7.878 4.549a5.021 5.021 0 0 1 .01 2.05L21 20v2l-17 .001A4.978 4.978 0 0 1 3 19c0-1.007.298-1.945.81-2.73a7.003 7.003 0 0 1 3.717-9.82l-.393-.682a2 2 0 0 1 .732-2.732l2.598-1.5a2 2 0 0 1 2.732.732ZM8 16a3 3 0 0 0-2.83 4h5.66A3 3 0 0 0 8 16Zm3.464-12.732-2.598 1.5 2.75 4.763 2.598-1.5-2.75-4.763Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMicroscopeLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-microscope-line`, { [`${name}-spin`]: props.spin }]);

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

