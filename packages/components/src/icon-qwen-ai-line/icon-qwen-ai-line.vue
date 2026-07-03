<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M13.442 4.499h5.486a.5.5 0 0 1 .433.25l1.155 2a.5.5 0 0 1 0 .5l-1.3 2.25 2.742 4.75a.5.5 0 0 1 0 .5l-1.155 2a.5.5 0 0 1-.433.25h-2.598l-2.742 4.75a.5.5 0 0 1-.433.25h-2.31a.5.5 0 0 1-.433-.25l-1.298-2.25H5.07a.5.5 0 0 1-.433-.25l-1.155-2a.5.5 0 0 1 0-.5l1.299-2.25L2.041 9.75a.5.5 0 0 1 0-.5l1.154-2A.5.5 0 0 1 3.628 7h2.598l2.742-4.75a.5.5 0 0 1 .433-.251h2.31a.5.5 0 0 1 .432.25l1.3 2.25ZM16.041 11l-4.042 6.999 1.155 2h.576l2.888-5h2.886l.288-.5L17.772 11h-1.731ZM4.495 9l-.29.5 2.887 4.999-1.444 2.5.29.5h4.041L10.845 16 6.803 9h-2.31Zm7.504 5 1.733-3h-3.465L12 14ZM8.246 7.5 9.112 9h8.082l1.155-2.001-.288-.5h-5.773l-1.444-2.5h-.577L8.246 7.5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconQwenAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-qwen-ai-line`, { [`${name}-spin`]: props.spin }]);

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

