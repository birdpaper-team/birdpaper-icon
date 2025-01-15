<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M21.005 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5V4a1 1 0 0 1 1-1h18Zm-1 2h-16v2.968l.156.08a4.5 4.5 0 0 1 2.339 3.74l.005.212a4.499 4.499 0 0 1-2.344 3.95l-.156.08V19h16v-2.97l-.156-.08a4.5 4.5 0 0 1-2.34-3.738L17.506 12c0-1.704.947-3.187 2.344-3.951l.156-.081V5Zm-4 4v6h-8V9h8Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconTicket2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-ticket2line`, { [`${name}-spin`]: props.spin }]);

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

