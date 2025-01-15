<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18.001 20.003V15h2v7.003h-16V15h2v5.003h12ZM7.501 18v-2h9v2h-9Zm.077-4.38.347-1.97 8.864 1.563-.348 1.97-8.863-1.563Zm1.634-5.504 1-1.732 7.794 4.5-1 1.732-7.794-4.5Zm3.417-4.613 1.532-1.285 5.785 6.894-1.532 1.286-5.785-6.895Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconStackOverflowLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-stack-overflow-line`, { [`${name}-spin`]: props.spin }]);

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

