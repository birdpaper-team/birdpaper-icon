<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M2 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2Zm7 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-5.473 7.025-1.414-1.414A5.486 5.486 0 0 1 8.003 14c1.518 0 2.894.617 3.888 1.61l-1.414 1.415A3.486 3.486 0 0 0 8.002 16c-.967 0-1.84.39-2.475 1.025ZM13 15V9h2v6h-2Zm4 0V9h2v6h-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPassPendingFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-pass-pending-fill`, { [`${name}-spin`]: props.spin }]);

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

