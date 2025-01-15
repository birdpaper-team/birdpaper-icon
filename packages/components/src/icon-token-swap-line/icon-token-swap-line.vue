<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9 12.5 6.5 15 9 17.5l2.5-2.5L9 12.5Zm6-10a6.5 6.5 0 0 0-6.482 6.018 6.5 6.5 0 1 0 6.964 6.964A6.5 6.5 0 0 0 15 2.5Zm.323 10.989a6.51 6.51 0 0 0-4.812-4.812 4.5 4.5 0 1 1 4.812 4.812ZM13.5 15a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM3 7a4 4 0 0 1 4-4h1.5v2H7a2 2 0 0 0-2 2v1.5H3V7Zm16 10v-1.5h2V17a4 4 0 0 1-4 4h-1.5v-2H17a2 2 0 0 0 2-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconTokenSwapLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-token-swap-line`, { [`${name}-spin`]: props.spin }]);

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

