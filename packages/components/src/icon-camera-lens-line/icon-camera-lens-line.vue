<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.858 19.71 12 16H5.07a8.018 8.018 0 0 0 4.788 3.71ZM4.252 14h4.284L5.07 7.999A7.963 7.963 0 0 0 4 12c0 .69.088 1.36.252 2Zm2.143-7.708L8.535 10 12 4a7.974 7.974 0 0 0-5.605 2.292Zm7.747-2.002L12 8h6.93a8.018 8.018 0 0 0-4.788-3.71ZM19.748 10h-4.284l3.465 6.001A7.964 7.964 0 0 0 20 12c0-.69-.087-1.36-.252-2Zm-2.143 7.708L15.465 14 12 20a7.974 7.974 0 0 0 5.605-2.292ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm1.155-12h-2.31l-1.154 2 1.154 2h2.31l1.154-2-1.154-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCameraLensLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-camera-lens-line`, { [`${name}-spin`]: props.spin }]);

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

