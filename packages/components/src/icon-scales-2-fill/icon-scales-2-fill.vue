<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5.998 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2a3 3 0 0 1-3 3h-4l.001 2.062A8.001 8.001 0 0 1 19.998 15v6a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-6a8.001 8.001 0 0 1 7-7.938V5h-4c-1.66 0-3-1.34-3-3h2Zm6 9a4 4 0 1 0 3.446 1.968l-2.739 2.74-.094.082a1 1 0 0 1-1.32-1.497l2.739-2.74A3.981 3.981 0 0 0 11.998 11Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconScales2Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-scales2fill`, { [`${name}-spin`]: props.spin }]);

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

