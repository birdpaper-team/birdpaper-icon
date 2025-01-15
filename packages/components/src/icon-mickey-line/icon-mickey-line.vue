<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4.617 10.913A4.501 4.501 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254A8.014 8.014 0 0 1 12 6c.693 0 1.365.088 2.007.254a4.5 4.5 0 1 1 5.376 4.66 8 8 0 1 1-14.766 0ZM3 6.5a2.5 2.5 0 0 0 2.766 2.486 8.04 8.04 0 0 1 2.158-1.871A2.5 2.5 0 1 0 3 6.5Zm15.234 2.486a2.5 2.5 0 1 0-2.158-1.871 8.039 8.039 0 0 1 2.158 1.871ZM6 14a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMickeyLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-mickey-line`, { [`${name}-spin`]: props.spin }]);

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

