<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18 17.883V16l5 3-5 3v-2.09a9 9 0 0 1-6.997-5.365L11 14.54l-.003.006A9 9 0 0 1 2.725 20H2v-2h.725a7 7 0 0 0 6.434-4.243L9.912 12l-.753-1.757A7 7 0 0 0 2.725 6H2V4h.725a9 9 0 0 1 8.272 5.455L11 9.46l.003-.006A9 9 0 0 1 18 4.09V2l5 3-5 3V6.117a7 7 0 0 0-5.159 4.126L12.088 12l.753 1.757A7 7 0 0 0 18 17.883Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconShuffleLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-shuffle-line`, { [`${name}-spin`]: props.spin }]);

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

