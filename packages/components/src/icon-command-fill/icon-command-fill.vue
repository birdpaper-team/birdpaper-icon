<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M10 8h4V6.5a3.5 3.5 0 1 1 3.5 3.5H16v4h1.5a3.5 3.5 0 1 1-3.5 3.5V16h-4v1.5A3.5 3.5 0 1 1 6.5 14H8v-4H6.5A3.5 3.5 0 1 1 10 6.5V8ZM8 8V6.5A1.5 1.5 0 1 0 6.5 8H8Zm0 8H6.5A1.5 1.5 0 1 0 8 17.5V16Zm8-8h1.5A1.5 1.5 0 1 0 16 6.5V8Zm0 8v1.5a1.5 1.5 0 1 0 1.5-1.5H16Zm-6-6v4h4v-4h-4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCommandFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-command-fill`, { [`${name}-spin`]: props.spin }]);

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

