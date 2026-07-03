<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M22 12c0 5.523-4.477 10-10 10a9.982 9.982 0 0 1-7.781-3.719L2 20.5v-6h6l-2.357 2.357A8 8 0 0 0 20 12h2Zm-10-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-8a9.982 9.982 0 0 1 7.781 3.719L22 3.5v6h-6l2.357-2.357A8 8 0 0 0 4 12H2C2 6.477 6.477 2 12 2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconIssuesReopenFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-issues-reopen-fill`, { [`${name}-spin`]: props.spin }]);

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

