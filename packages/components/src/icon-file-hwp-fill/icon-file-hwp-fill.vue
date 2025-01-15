<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m16 2 5 5v13.992A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.998 2H16ZM9.333 14.667H8V18h8v-1.333l-6.667-.001v-2ZM12 14.333a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 1.333a1.167 1.167 0 1 1 0 2.334 1.167 1.167 0 0 1 0-2.334ZM12.667 6h-1.334v1.333H8v1.334h8V7.333h-3.334V6Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconFileHwpFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-file-hwp-fill`, { [`${name}-spin`]: props.spin }]);

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

