<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11.71 1.999c.179 0 .345.095.434.25l1.299 2.25h5.485a.5.5 0 0 1 .433.25l1.154 2a.5.5 0 0 1 0 .5l-1.299 2.25 2.742 4.75a.5.5 0 0 1 0 .5l-1.154 2a.501.501 0 0 1-.433.25h-2.598l-2.742 4.75a.5.5 0 0 1-.433.25h-2.31a.501.501 0 0 1-.433-.25l-1.299-2.25H5.072a.501.501 0 0 1-.434-.25l-1.154-2a.5.5 0 0 1 0-.5l1.299-2.25L2.04 9.75a.501.501 0 0 1 0-.5l1.156-2A.5.5 0 0 1 3.628 7h2.599l2.741-4.751a.501.501 0 0 1 .434-.25h2.308ZM6.587 7.625l-2.166-.001 5.052 8.75H6.587l-1.443 2.5h5.772L12 20.75 17.052 12l1.443 2.5 2.886-.001-2.886-5 1.083-1.874H9.474l1.443-2.501-1.443-2.499-2.887 5ZM15.464 10 12 16l-3.464-6h6.928Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconQwenAiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-qwen-ai-fill`, { [`${name}-spin`]: props.spin }]);

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

