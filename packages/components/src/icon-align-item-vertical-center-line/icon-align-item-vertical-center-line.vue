<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9 18V6H6v12h3Zm-4 2a1 1 0 0 1-1-1v-6H2v-2h2V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6h2V7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4h2v2h-2v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4h-2v6a1 1 0 0 1-1 1H5Zm10-4h3V8h-3v8Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAlignItemVerticalCenterLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-align-item-vertical-center-line`, { [`${name}-spin`]: props.spin }]);

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

