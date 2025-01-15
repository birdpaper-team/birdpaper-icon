<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.446 8.029 12 10.582l6.728-6.727a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414l2.554-2.554-2.554-2.554a4 4 0 1 1 1.414-1.414Zm5.38 5.379 6.73 6.73a2 2 0 0 1-2.828 0l-5.317-5.316 1.415-1.414Zm-7.412 3.175a2 2 0 1 0-2.828 2.828 2 2 0 0 0 2.828-2.829Zm0-9.172a2 2 0 1 0-2.828-2.828A2 2 0 0 0 7.414 7.41Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconScissorsLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-scissors-line`, { [`${name}-spin`]: props.spin }]);

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

