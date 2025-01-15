<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M2 12C2 6.477 6.477 2 12 2a9.977 9.977 0 0 1 7.553 3.446L22 3v6h-5.215c.442.45.715 1.069.715 1.75v2.5a2.5 2.5 0 0 1-5 0v-2.5a2.5 2.5 0 0 1 3.853-2.103l1.782-1.782A8 8 0 1 0 20 12h2c0 5.523-4.477 10-10 10S2 17.523 2 12Zm13-2.25a1 1 0 0 0-1 1v2.5a1 1 0 1 0 2 0v-2.5a1 1 0 0 0-1-1Zm-5 3.625a.625.625 0 0 0-.625-.625H7.5v-1.5h1.875a.625.625 0 1 0 0-1.25H6.75V8.5h2.625a2.125 2.125 0 0 1 1.62 3.5 2.125 2.125 0 0 1-1.62 3.5H6.75V14h2.625c.345 0 .625-.28.625-.625Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconForward30Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-forward30fill`, { [`${name}-spin`]: props.spin }]);

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

