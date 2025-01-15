<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4.878 3.003h14.254a1 1 0 0 1 .809.412l3.822 5.256a.5.5 0 0 1-.037.633l-11.354 12.3a.5.5 0 0 1-.706.029c-.007-.006-3.801-4.116-11.383-12.329a.5.5 0 0 1-.037-.633l3.823-5.256a1 1 0 0 1 .809-.412Zm.509 2-2.8 3.849 9.418 10.202 9.417-10.202-2.8-3.85H5.388Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconVipDiamondLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-vip-diamond-line`, { [`${name}-spin`]: props.spin }]);

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

