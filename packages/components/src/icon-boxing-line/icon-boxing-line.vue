<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M16.5 2A5.5 5.5 0 0 1 22 7.5V10c0 .888-.386 1.686-1 2.235V17a3.001 3.001 0 0 1-2 2.829V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.17A3.001 3.001 0 0 1 3 17V6a4 4 0 0 1 4-4h9.5Zm-7 9H5v6a1 1 0 0 0 .883.993L6 18h12a1 1 0 0 0 .993-.883L19 17v-4h-6.036A3.5 3.5 0 0 1 9.5 16H6v-2h3.5a1.5 1.5 0 0 0 1.493-1.355L11 12.5a1.5 1.5 0 0 0-1.356-1.493L9.5 11Zm7-7H7a2 2 0 0 0-1.995 1.85L5 6v3h4.5a3.5 3.5 0 0 1 3.163 2H19a1 1 0 0 0 .993-.883L20 10V7.5a3.5 3.5 0 0 0-3.308-3.495L16.5 4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBoxingLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-boxing-line`, { [`${name}-spin`]: props.spin }]);

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

