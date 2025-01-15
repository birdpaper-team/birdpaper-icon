<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4V7a1 1 0 0 1 1-1h2V2h2v4h6V2h2v4h2a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4h-3Zm-5-2h8a2 2 0 0 0 2-2v-3H6v3a2 2 0 0 0 2 2Zm10-8H6v1h12V8Zm-6 6.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM11 2h2v3h-2V2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPlug2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-plug2line`, { [`${name}-spin`]: props.spin }]);

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

