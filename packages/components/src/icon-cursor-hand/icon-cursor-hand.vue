<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.5.5A2.5 2.5 0 0 1 12 3v3.803a2.976 2.976 0 0 1 1.803-.062l5 1.389A3 3 0 0 1 21 11.02v4.481a7.5 7.5 0 0 1-7.5 7.5c-2.458 0-4.329-.693-5.817-1.999-1.45-1.273-2.458-3.064-3.35-5.1-.929-2.126-1.444-3.421-1.724-4.178-.356-.964.137-2.311 1.477-2.405l.248-.01a4.011 4.011 0 0 1 2.666.95V3A2.5 2.5 0 0 1 9.5.5Zm0 2A.5.5 0 0 0 9 3v11h-.995l-.986.197c-.348-1.74-1.334-2.746-2.422-2.872.285.745.765 1.938 1.569 3.775.859 1.962 1.725 3.422 2.838 4.399 1.074.943 2.455 1.502 4.496 1.502 3.037 0 5.5-2.463 5.5-5.5v-4.48a1 1 0 0 0-.733-.964l-5-1.389A1 1 0 0 0 12 9.631V11h-2V3a.5.5 0 0 0-.5-.5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCursorHand"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-cursor-hand`, { [`${name}-spin`]: props.spin }]);

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

