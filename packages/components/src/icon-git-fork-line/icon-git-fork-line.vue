<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM3 6a3 3 0 1 1 4 2.83V9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17a3.001 3.001 0 1 1 2 0V9a4 4 0 0 1-4 4h-2v2.17a3.001 3.001 0 1 1-2 0V13H9a4 4 0 0 1-4-4v-.17A3.001 3.001 0 0 1 3 6Zm15-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-6 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGitForkLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-git-fork-line`, { [`${name}-spin`]: props.spin }]);

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

