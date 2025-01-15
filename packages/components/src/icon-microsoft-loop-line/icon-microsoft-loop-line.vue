<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 4a8 8 0 1 1 0 16H7.69a6.48 6.48 0 0 0 1.734-3.5H12A4.5 4.5 0 1 0 7.5 12v3.5A4.502 4.502 0 0 1 4 19.889V12a8 8 0 0 1 8-8Zm0 18c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12v10h10Zm-2.5-7.5V12a2.5 2.5 0 1 1 2.5 2.5H9.5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMicrosoftLoopLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-microsoft-loop-line`, { [`${name}-spin`]: props.spin }]);

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

