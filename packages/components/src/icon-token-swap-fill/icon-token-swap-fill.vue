<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M21.5 9a6.502 6.502 0 0 1-4 6.002V15A8.5 8.5 0 0 0 9 6.5h-.002A6.502 6.502 0 0 1 21.5 9ZM7 3a4 4 0 0 0-4 4v1.5h2V7a2 2 0 0 1 2-2h1.5V3H7Zm12 12.5V17a2 2 0 0 1-2 2h-1.5v2H17a4 4 0 0 0 4-4v-1.5h-2Zm-10 6a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0-9 2.5 2.5L9 17.5 6.5 15 9 12.5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconTokenSwapFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-token-swap-fill`, { [`${name}-spin`]: props.spin }]);

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

