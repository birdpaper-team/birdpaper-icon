<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m18.33 4.256-1.424 1.423a8.001 8.001 0 0 0-12.272 9.444l2.417-2.417a5.002 5.002 0 0 1 7.707-4.879l-1.464 1.465a3.001 3.001 0 0 0-4.001 4l-6.45 6.45c-.034-3.5-.591-4.811-.788-6.701A9.98 9.98 0 0 1 4.93 4.929c3.666-3.666 9.471-3.89 13.4-.673Zm2.83.002c.033 3.5.59 4.81.787 6.701a9.98 9.98 0 0 1-2.875 8.112c-3.666 3.666-9.471 3.89-13.4.673l1.424-1.423a8.001 8.001 0 0 0 12.272-9.444l-2.417 2.417a5.002 5.002 0 0 1-7.707 4.878l1.464-1.464a3.001 3.001 0 0 0 4.001-4l6.45-6.45Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconHonorOfKingsLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-honor-of-kings-line`, { [`${name}-spin`]: props.spin }]);

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

