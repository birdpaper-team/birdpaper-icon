<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M15.243 4.511 8.505 11.25l-.707 2.121-1.04 1.041 2.828 2.828 1.04-1.04 2.122-.708 6.737-6.737-4.242-4.243Zm6.364 3.536a1 1 0 0 1 0 1.414l-7.778 7.778-2.122.707-1.414 1.415a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414L6.05 12.29l.707-2.122 7.779-7.778a1 1 0 0 1 1.414 0l5.657 5.657Zm-6.364-.707 1.414 1.414-4.95 4.95-1.414-1.414 4.95-4.95Zm-10.96 9.546 2.828 2.828-1.414 1.415-4.243-1.415 2.829-2.828Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMarkPenLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-mark-pen-line`, { [`${name}-spin`]: props.spin }]);

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

