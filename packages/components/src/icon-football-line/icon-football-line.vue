<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm1.67 14h-3.34l-1.38 1.897.554 1.706A7.993 7.993 0 0 0 12 20c.871 0 1.71-.14 2.496-.397l.553-1.706L13.669 16Zm-8.376-5.128-1.292.938L4 12c0 1.73.549 3.331 1.482 4.64h1.91l1.323-1.82-1.028-3.17-2.393-.778Zm13.412 0-2.393.778-1.028 3.17 1.322 1.82h1.91A7.963 7.963 0 0 0 20 12l-.003-.19-1.291-.938ZM12 9.536l-2.344 1.702.896 2.762h2.895l.896-2.762L12 9.536Zm2.291-5.203L13 5.273V7.79l2.694 1.957 2.24-.727.554-1.703a8.014 8.014 0 0 0-4.196-2.984Zm-4.583 0a8.014 8.014 0 0 0-4.195 2.985l.554 1.702 2.239.727L11 7.79V5.273l-1.292-.94Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconFootballLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-football-line`, { [`${name}-spin`]: props.spin }]);

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

