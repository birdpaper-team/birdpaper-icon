<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M10 5.997c0 .732-.197 1.419-.54 2.01L12 10.581l6.728-6.727a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414l2.554-2.554-2.554-2.554A4 4 0 1 1 10 5.997Zm-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm13.556 14.142a2 2 0 0 1-2.828 0l-5.317-5.317 1.415-1.414 6.73 6.73ZM16 10.997h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-14 0h2v2H6v-2Zm-4 0h2v2H2v-2Zm4 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconScissorsCutLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-scissors-cut-line`, { [`${name}-spin`]: props.spin }]);

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

