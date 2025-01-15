<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m16.988 18 1.216-1.58a1.5 1.5 0 0 0-1.189-2.415H15v-3.976a1.5 1.5 0 0 0-2.69-.914l-6.365 8.281A8.002 8.002 0 0 1 9 2a8.003 8.003 0 0 1 7.458 5.099A5.5 5.5 0 1 1 17.5 18h-.512ZM13 16.005h3l-5 6.5v-4.5H8l5-6.505v4.505Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconThunderstormsFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-thunderstorms-fill`, { [`${name}-spin`]: props.spin }]);

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

