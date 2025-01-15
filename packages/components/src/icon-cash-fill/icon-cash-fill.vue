<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3.005 4.003h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1ZM6.5 6H4v2.5A2.5 2.5 0 0 0 6.5 6Zm11 0A2.5 2.5 0 0 0 20 8.5V6h-2.5ZM4 15.5V18h2.5A2.5 2.5 0 0 0 4 15.5ZM17.5 18H20v-2.5a2.5 2.5 0 0 0-2.5 2.5ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCashFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-cash-fill`, { [`${name}-spin`]: props.spin }]);

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

