<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M16.425 17.839A8.941 8.941 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11h2.016a7.002 7.002 0 0 0 9.87 5.354l-1.55-1.55A5 5 0 0 1 7 10V8.414L1.393 2.808l1.414-1.415 19.799 19.8-1.415 1.414-4.767-4.768Zm2.95-2.679-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.949 8.949 0 0 1-1.57 4.16Zm-2.91-2.909-8.78-8.78A5 5 0 0 1 17 6v4c.001.81-.191 1.575-.533 2.251Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMicOffFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-mic-off-fill`, { [`${name}-spin`]: props.spin }]);

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

