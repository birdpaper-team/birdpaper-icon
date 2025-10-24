<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c5.523 0 10 4.477 10 10 0 2.71-1.08 5.17-2.83 6.97A9.973 9.973 0 0 1 12 22a9.973 9.973 0 0 1-7.17-3.03A9.972 9.972 0 0 1 2 12C2 6.477 6.477 2 12 2Zm0 14a6.977 6.977 0 0 0-5.075 2.182A7.961 7.961 0 0 0 12 20a7.96 7.96 0 0 0 5.074-1.818A6.975 6.975 0 0 0 12 16Zm0-12a8 8 0 0 0-6.452 12.73A8.972 8.972 0 0 1 12 14a8.971 8.971 0 0 1 6.451 2.73A8 8 0 0 0 12 4Zm-.47 1.32a.506.506 0 0 1 .94 0l.254.61a4.367 4.367 0 0 0 2.25 2.327l.718.318c.41.183.41.781 0 .964l-.76.338a4.362 4.362 0 0 0-2.218 2.25l-.247.566a.506.506 0 0 1-.934 0l-.246-.565a4.364 4.364 0 0 0-2.22-2.251l-.76-.338a.531.531 0 0 1 0-.964l.718-.318a4.366 4.366 0 0 0 2.251-2.326l.253-.612Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAiAgentLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-ai-agent-line`, { [`${name}-spin`]: props.spin }]);

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

