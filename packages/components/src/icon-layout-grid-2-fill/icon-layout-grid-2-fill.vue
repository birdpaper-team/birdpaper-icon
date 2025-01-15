<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3 3a1 1 0 0 0-1 1v4h5.5V3H3Zm6.5 0v5h5V3h-5Zm7 0v5H22V4a1 1 0 0 0-1-1h-4.5Zm5.5 7h-5.5v4H22v-4Zm0 6h-5.5v5H21a1 1 0 0 0 1-1v-4Zm-7.5 5v-5h-5v5h5Zm-7 0v-5H2v4a1 1 0 0 0 1 1h4.5ZM2 14h5.5v-4H2v4Zm7.5-4h5v4h-5v-4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconLayoutGrid2Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-layout-grid2fill`, { [`${name}-spin`]: props.spin }]);

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

