<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.537 13H7.33a3.001 3.001 0 0 1-5.829-1 3 3 0 0 1 5.83-1h2.206l3.464-6h3.17a3.001 3.001 0 0 1 5.83 1 3 3 0 0 1-5.829 1h-2.017l-2.886 4.999L14.156 17h2.016A3.001 3.001 0 0 1 22 18a3 3 0 0 1-5.829 1h-3.171l-3.464-6Zm9.464 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-14.5-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm14.5-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconStackshareLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-stackshare-line`, { [`${name}-spin`]: props.spin }]);

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

