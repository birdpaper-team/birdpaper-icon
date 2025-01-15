<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M20.998 3v2c0 9.627-5.373 14-12 14H5.241a17.14 17.14 0 0 0-.243 3h-2c0-1.363.116-2.6.346-3.732-.23-1.294-.346-3.05-.346-5.268 0-5.523 4.477-10 10-10 2 0 4 1 8 0Zm-8 2a8 8 0 0 0-8 8c0 .362.003.711.01 1.046 1.254-1.978 3.091-3.541 5.494-4.914l.992 1.736C8.64 12.5 6.746 14.354 5.774 17h3.224c6.015 0 9.871-3.973 9.997-11.612-1.372.133-2.647.048-4.22-.188-1.15-.173-1.376-.2-1.777-.2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconLeafLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-leaf-line`, { [`${name}-spin`]: props.spin }]);

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

