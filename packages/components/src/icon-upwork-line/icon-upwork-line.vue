<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm4.152 4.295a3.314 3.314 0 0 1 3.341 3.39 3.307 3.307 0 0 1-3.337 3.409h-.138a3.394 3.394 0 0 1-1.689-.522 4.5 4.5 0 0 1-.555-.408l-.526 3.23H11.73l.8-4.559c-.682-1-1.187-2.112-1.493-3.284v2.178c0 1.978-1.26 3.36-3.058 3.36a2.967 2.967 0 0 1-2.26-.957 3.513 3.513 0 0 1-.862-2.44V8.47h1.494v3.222c0 1.175.591 2.04 1.631 2.04s1.57-.869 1.57-2.04V8.47h2.6c.173.791.437 1.561.787 2.293a3.17 3.17 0 0 1 2.944-2.48l.27.012Zm.008 1.35c-1.052 0-1.848.677-2.12 2.855a2.67 2.67 0 0 0 1.953 1.234l.167-.01c1.036 0 1.852-.816 1.853-2.04 0-1.223-.8-2.04-1.853-2.04Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconUpworkLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-upwork-line`, { [`${name}-spin`]: props.spin }]);

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

