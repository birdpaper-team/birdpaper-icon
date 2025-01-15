<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m20.713 8.128-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.363 4.363 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.366 4.366 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.366 4.366 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.363 4.363 0 0 0-2.219 2.251ZM20 11c.67 0 1.313-.11 1.915-.312.056.43.085.867.085 1.312 0 5.523-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2c.906 0 1.783.12 2.617.346A6 6 0 0 0 20 11ZM7 12a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0H7Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconChatSmileAiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-chat-smile-ai-fill`, { [`${name}-spin`]: props.spin }]);

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

