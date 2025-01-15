<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM12 8h8V6h-8v2Zm4 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM4 16v2h8v-2H4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconEqualizer2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-equalizer2line`, { [`${name}-spin`]: props.spin }]);

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

