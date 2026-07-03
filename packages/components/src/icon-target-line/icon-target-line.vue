<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2a1 1 0 1 1 0 2 8 8 0 1 0 8 8 1 1 0 1 1 2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 4a1 1 0 1 1 0 2 4 4 0 1 0 4 4 1 1 0 1 1 2 0 6 6 0 1 1-6-6Zm5.656-3.9a1.001 1.001 0 0 1 1.415 1.415l-.708.706h.001a1 1 0 1 0 1.414 1.415l.707-.707A1 1 0 0 1 21.9 6.343l-2.12 2.122a1 1 0 0 1-.708.292h-2.414l-3.95 3.95a1 1 0 0 1-1.414-1.414l3.95-3.95V4.93a1 1 0 0 1 .292-.707L17.656 2.1Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconTargetLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-target-line`, { [`${name}-spin`]: props.spin }]);

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

