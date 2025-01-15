<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M14.178 9.766a9.981 9.981 0 0 0 4.827-2.622V4.003h-14v3.141a9.98 9.98 0 0 0 4.827 2.622 2.5 2.5 0 0 1 4.346 0Zm.208 2a2.501 2.501 0 0 1-4.762 0 11.941 11.941 0 0 1-4.62-2.015v10.252h14V9.75a11.942 11.942 0 0 1-4.618 2.016ZM4.005 2.004h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRedPacketLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-red-packet-line`, { [`${name}-spin`]: props.spin }]);

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

