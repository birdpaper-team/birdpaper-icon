<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m12 8.81 1.635-2.322A3.5 3.5 0 0 1 20 8.5c0 2.879-1.96 5.621-4.357 7.836A27.084 27.084 0 0 1 12 19.146a27.064 27.064 0 0 1-3.643-2.81C5.959 14.122 4 11.379 4 8.5a3.5 3.5 0 0 1 6.365-2.012L12 8.811Zm-1.444-4.884A5.5 5.5 0 0 0 2 8.5C2 16 12 21.485 12 21.485S22 16 22 8.5a5.5 5.5 0 0 0-10-3.163 5.53 5.53 0 0 0-1.444-1.41Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPokerHeartsLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-poker-hearts-line`, { [`${name}-spin`]: props.spin }]);

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

