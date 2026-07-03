<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11.5 1c1.06 0 1.964.662 2.327 1.594A2.5 2.5 0 0 1 17 5v1.05a2.5 2.5 0 0 1 3 2.45v5a8.5 8.5 0 0 1-17 0v-2a2.5 2.5 0 0 1 3-2.45V5.5a2.5 2.5 0 0 1 3.04-2.44A2.5 2.5 0 0 1 11.5 1Zm0 2a.5.5 0 0 0-.5.5V11a1 1 0 1 1-2 0V5.5a.5.5 0 0 0-1 0v8a1 1 0 1 1-2 0v-2a.5.5 0 0 0-1 0v2a6.5 6.5 0 1 0 13 0v-5a.5.5 0 0 0-1 0V11a1 1 0 1 1-2 0V5a.5.5 0 0 0-1 0v6a1 1 0 1 1-2 0V3.5a.5.5 0 0 0-.5-.5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconHand2"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-hand2`, { [`${name}-spin`]: props.spin }]);

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

