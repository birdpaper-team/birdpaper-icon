<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m20.713 8.128-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.363 4.363 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.366 4.366 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.366 4.366 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.363 4.363 0 0 0-2.219 2.251ZM12 2C6.477 2 2 6.477 2 12c0 1.703.425 3.306 1.176 4.709L2 22l5.291-1.176A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10 0-.402-.024-.8-.07-1.19l-1.986.235A8 8 0 0 1 12 20a7.955 7.955 0 0 1-3.766-.94l-.653-.349-2.947.655.655-2.947-.35-.653A7.955 7.955 0 0 1 4 12a8 8 0 0 1 10-7.748l.498-1.937C13.698 2.109 12.861 2 12 2ZM9 12H7a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconChatSmileAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-chat-smile-ai-line`, { [`${name}-spin`]: props.spin }]);

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

