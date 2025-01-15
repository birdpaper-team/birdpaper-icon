<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m20.713 8.128-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.363 4.363 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.366 4.366 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.366 4.366 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.363 4.363 0 0 0-2.219 2.251ZM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10h8v-2h-1.999a10.06 10.06 0 0 0 2-2A9.956 9.956 0 0 0 22 12c0-.402-.024-.8-.07-1.19l-1.986.235A7.98 7.98 0 0 1 17.292 18 8 8 0 1 1 14 4.252l.498-1.937C13.698 2.109 12.861 2 12 2Zm-2 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm-4 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm-4 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMovie2AiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-movie2ai-line`, { [`${name}-spin`]: props.spin }]);

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

