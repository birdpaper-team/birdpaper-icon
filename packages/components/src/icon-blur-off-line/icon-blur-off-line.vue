<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18.154 19.565A9 9 0 0 1 5.432 6.843L1.394 2.804 2.808 1.39l19.799 19.8-1.415 1.413-3.038-3.038ZM6.848 8.258a7 7 0 0 0 9.89 9.891l-9.89-9.89Zm13.566 7.939-1.598-1.599a6.995 6.995 0 0 0-1.866-6.55L12 3.097 9.658 5.44 8.243 4.026 12 .269l6.364 6.364a9.002 9.002 0 0 1 2.05 9.564Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBlurOffLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-blur-off-line`, { [`${name}-spin`]: props.spin }]);

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

