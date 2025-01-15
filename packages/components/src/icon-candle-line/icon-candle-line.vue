<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.172 9.331a4 4 0 0 1 0-5.656L12 .846l2.828 2.829A4 4 0 0 1 13 10.377V12h5a1 1 0 0 1 1 1v7h2v2H3v-2h2v-7a1 1 0 0 1 1-1h5v-1.623A3.982 3.982 0 0 1 9.172 9.33Zm1.414-4.242a2 2 0 1 0 2.828 0L12 3.675l-1.414 1.414ZM7 14v6h10v-6H7Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCandleLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-candle-line`, { [`${name}-spin`]: props.spin }]);

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

