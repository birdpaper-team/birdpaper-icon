<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M10.005 21h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a2 2 0 1 0 4 0h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7a2 2 0 1 0-4 0ZM8.54 19a3.998 3.998 0 0 1 3.465-2c1.48 0 2.773.804 3.465 2h4.535V5H15.47a3.999 3.999 0 0 1-3.465 2A3.998 3.998 0 0 1 8.54 5H4.005v14H8.54ZM6.005 8h2v8h-2V8Zm10 0h2v8h-2V8Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCoupon4Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-coupon4line`, { [`${name}-spin`]: props.spin }]);

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

