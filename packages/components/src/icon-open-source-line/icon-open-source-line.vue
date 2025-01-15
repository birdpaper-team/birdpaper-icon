<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.001 2c5.523 0 10 4.477 10 10 0 4.4-2.841 8.136-6.789 9.473l-.226.074-2.904-7.55A2.016 2.016 0 0 0 14.001 12a2 2 0 1 0-2.083 1.998l-2.903 7.549-.225-.074C4.842 20.136 2 16.4 2 12c0-5.523 4.477-10 10-10Zm0 2a8 8 0 0 0-4.099 14.872l1.48-3.849a4 4 0 1 1 5.239 0c.565 1.474 1.059 2.757 1.479 3.85A8 8 0 0 0 12 4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconOpenSourceLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-open-source-line`, { [`${name}-spin`]: props.spin }]);

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

