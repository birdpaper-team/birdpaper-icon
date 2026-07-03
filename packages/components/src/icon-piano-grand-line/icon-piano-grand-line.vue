<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9 2c2.43 0 4.57 1.239 5.823 3.114.347.518.916.899 1.532 1.025C19.517 6.783 22 9.614 22 13v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a7 7 0 0 1 7-7ZM4 19h16v-5h-1v3h-2v-3h-2v3h-2v-3h-2v3H9v-3H7v3H5v-3H4v5ZM9 4a5 5 0 0 0-5 5v3h15.895c-.412-1.944-1.99-3.504-3.939-3.901a4.468 4.468 0 0 1-2.796-1.873A4.994 4.994 0 0 0 9 4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPianoGrandLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-piano-grand-line`, { [`${name}-spin`]: props.spin }]);

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

