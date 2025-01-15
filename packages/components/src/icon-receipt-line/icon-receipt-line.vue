<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9 4 6 2 3 4v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3h-2V4l-3-2-3 2-3-2-3 2Zm10 12H7v3a1 1 0 1 1-2 0V5.07l1-.666 3 2 3-2 3 2 3-2 1 .666V16Zm1 4H8.83c.11-.313.17-.65.17-1v-1h12v1a1 1 0 0 1-1 1Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconReceiptLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-receipt-line`, { [`${name}-spin`]: props.spin }]);

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

