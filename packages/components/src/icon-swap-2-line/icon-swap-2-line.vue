<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m17.207 2.293-1.414 1.414L18.086 6H13v2h5.086l-2.293 2.293 1.414 1.414L21.914 7l-4.707-4.707ZM9.5 7a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM5.914 18l2.293 2.293-1.414 1.414L2.086 17l4.707-4.707 1.414 1.414L5.914 16H11v2H5.914ZM15 19h4v-4h-4v4Zm-2-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSwap2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-swap2line`, { [`${name}-spin`]: props.spin }]);

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

