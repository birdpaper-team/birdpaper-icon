<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M2 4a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0v-5.667l9.223 6.149a.5.5 0 0 0 .777-.416v-5.733l9.223 6.149a.5.5 0 0 0 .777-.416V4.934a.5.5 0 0 0-.777-.416L13 10.666V4.934a.5.5 0 0 0-.777-.416L3 10.667V5a1 1 0 0 0-1-1Zm9 3.737v8.526L4.606 12 11 7.737Zm10 0v8.526L14.606 12 21 7.737Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRewindStartLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-rewind-start-line`, { [`${name}-spin`]: props.spin }]);

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

