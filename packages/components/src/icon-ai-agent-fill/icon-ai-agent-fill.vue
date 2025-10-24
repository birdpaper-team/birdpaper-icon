<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 13c-2.287 0-4.35.961-5.808 2.5A7.976 7.976 0 0 0 12 20a7.976 7.976 0 0 0 5.807-2.5A7.976 7.976 0 0 0 12 15Zm.47-9.68a.506.506 0 0 0-.94 0l-.254.61a4.367 4.367 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.365 4.365 0 0 1 2.22 2.25l.245.566c.18.414.753.414.934 0l.247-.565a4.363 4.363 0 0 1 2.219-2.251l.76-.338a.53.53 0 0 0 0-.963l-.718-.32a4.367 4.367 0 0 1-2.251-2.325l-.253-.612Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAiAgentFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-ai-agent-fill`, { [`${name}-spin`]: props.spin }]);

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

