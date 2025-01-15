<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9 2a8.002 8.002 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L17 14.07V17a2 2 0 0 1-2 2h-1.999L13 22H4v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0 1 9 2Zm12.154 16.102-1.665-1.11A8.959 8.959 0 0 0 21 12a8.958 8.958 0 0 0-1.51-4.993l1.664-1.11A10.948 10.948 0 0 1 23 12c0 2.258-.68 4.356-1.846 6.102Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSpeakFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-speak-fill`, { [`${name}-spin`]: props.spin }]);

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

