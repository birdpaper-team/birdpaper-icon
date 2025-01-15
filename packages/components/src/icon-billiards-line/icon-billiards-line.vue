<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 1.75a2.5 2.5 0 0 0-1.88 4.147c-.565.457-.92 1.118-.92 1.853 0 1.38 1.254 2.5 2.8 2.5 1.546 0 2.8-1.12 2.8-2.5 0-.735-.355-1.396-.92-1.852A2.5 2.5 0 0 0 12 7.75Zm0 5c.754 0 1.3.488 1.3 1s-.546 1-1.3 1-1.3-.488-1.3-1 .546-1 1.3-1Zm0-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBilliardsLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-billiards-line`, { [`${name}-spin`]: props.spin }]);

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

