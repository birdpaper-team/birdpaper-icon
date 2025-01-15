<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M7.05 8.047 12 3.097l4.95 4.95a7 7 0 1 1-9.9 0Zm11.314-1.414L12 .269 5.636 6.633a9 9 0 1 0 12.728 0Zm-2.121 3.538-1.414-1.414-7.072 7.071 1.415 1.415 7.07-7.072ZM8.11 11.232a1.5 1.5 0 1 0 2.121-2.121 1.5 1.5 0 0 0-2.121 2.121Zm7.778 5.657a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.12Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconWaterPercentLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-water-percent-line`, { [`${name}-spin`]: props.spin }]);

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

