<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M20 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM7 3a4 4 0 0 0-4 4v2h2V7a2 2 0 0 1 2-2h3V3H7Zm10 18a4 4 0 0 0 4-4v-2h-2v2a2 2 0 0 1-2 2h-3v2h3ZM7 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10-7a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4ZM3 21a4 4 0 0 1 8 0H3Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconP2pFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-p2p-fill`, { [`${name}-spin`]: props.spin }]);

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

