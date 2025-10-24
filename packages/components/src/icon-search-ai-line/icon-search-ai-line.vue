<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11 2c.264 0 .525.013.783.036a5.958 5.958 0 0 0-.699 1.966L11 4c-3.867 0-7 3.132-7 7 0 3.867 3.133 7 7 7a6.978 6.978 0 0 0 4.875-1.976l.15-.15A6.979 6.979 0 0 0 18 11c0-.029-.003-.057-.003-.085a5.955 5.955 0 0 0 1.966-.7 8.962 8.962 0 0 1-1.932 6.401l4.283 4.283-1.415 1.414-4.282-4.282A8.961 8.961 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9Zm5.53-.681a.507.507 0 0 1 .94 0l.254.611a4.367 4.367 0 0 0 2.25 2.326l.718.32a.53.53 0 0 1 0 .963l-.76.338a4.363 4.363 0 0 0-2.218 2.25l-.247.566a.506.506 0 0 1-.934 0l-.246-.565a4.364 4.364 0 0 0-2.22-2.251l-.76-.338a.53.53 0 0 1 0-.963l.718-.32a4.366 4.366 0 0 0 2.251-2.326l.253-.611Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSearchAiLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-search-ai-line`, { [`${name}-spin`]: props.spin }]);

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

