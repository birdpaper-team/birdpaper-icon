<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M7 6c0 .237.04.462.115.67a1 1 0 0 1-1 1.333 2 2 0 0 0-1.607 3.33 1 1 0 0 1 .001 1.334 2.001 2.001 0 0 0 .864 3.233 1 1 0 0 1 .67 1.135 2.5 2.5 0 1 0 4.932.824c.006-.042.014-.083.025-.123V6a2 2 0 1 0-4 0Zm6 11.736c.01.04.02.08.025.122a2.5 2.5 0 1 0 4.932-.823 1 1 0 0 1 .67-1.135 2.001 2.001 0 0 0 .864-3.233 1 1 0 0 1 0-1.334 2 2 0 0 0-1.607-3.33 1 1 0 0 1-.999-1.333A2 2 0 1 0 13 6v11.736ZM9 2a3.99 3.99 0 0 1 3 1.354 4 4 0 0 1 6.998 2.771A4.002 4.002 0 0 1 21.465 12 3.997 3.997 0 0 1 20 17.465v.035a4.5 4.5 0 0 1-8 2.828A4.5 4.5 0 0 1 4 17.5v-.035A3.997 3.997 0 0 1 2.535 12a4.002 4.002 0 0 1 2.467-5.874A4 4 0 0 1 9 2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBrain2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-brain2line`, { [`${name}-spin`]: props.spin }]);

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

