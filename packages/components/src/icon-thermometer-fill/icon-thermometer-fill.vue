<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M20.556 3.444a4 4 0 0 1 0 5.657l-8.2 8.2a4 4 0 0 1-2.386 1.147l-3.38.374-2.297 2.3a1 1 0 1 1-1.414-1.415l2.298-2.299.375-3.377A4 4 0 0 1 6.7 11.644l8.2-8.2a4 4 0 0 1 5.658 0Zm-9.192 9.192L9.95 14.05l2.121 2.122 1.414-1.415-2.12-2.12Zm2.829-2.828-1.415 1.414 2.122 2.121 1.414-1.414-2.121-2.121Zm2.828-2.829-1.414 1.414 2.121 2.122L19.142 9.1l-2.121-2.122Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconThermometerFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-thermometer-fill`, { [`${name}-spin`]: props.spin }]);

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

