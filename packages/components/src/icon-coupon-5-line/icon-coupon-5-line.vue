<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M21.005 14v7a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-7a2 2 0 1 0 0-4V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 1 0 0 4Zm-2 1.465a3.999 3.999 0 0 1-2-3.465c0-1.48.804-2.773 2-3.465V4h-14v4.535c1.195.692 2 1.984 2 3.465 0 1.48-.805 2.773-2 3.465V20h14v-4.535ZM9.005 6h6v2h-6V6Zm0 10h6v2h-6v-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCoupon5Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-coupon5line`, { [`${name}-spin`]: props.spin }]);

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

