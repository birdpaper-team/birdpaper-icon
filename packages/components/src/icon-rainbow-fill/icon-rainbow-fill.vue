<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 4c6.075 0 11 4.925 11 11v5h-3v-5a8 8 0 0 0-7.75-7.996L12 7a8 8 0 0 0-7.996 7.75L4 15v5H1v-5C1 8.925 5.925 4 12 4Zm0 4a7 7 0 0 1 7 7v5h-3v-5a4 4 0 0 0-3.8-3.995L12 11a4 4 0 0 0-3.995 3.8L8 15v5H5v-5a7 7 0 0 1 7-7Zm0 4a3 3 0 0 1 3 3v5H9v-5a3 3 0 0 1 3-3Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRainbowFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-rainbow-fill`, { [`${name}-spin`]: props.spin }]);

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

