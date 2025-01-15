<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M18.364 18.364a9 9 0 0 0 0-12.728l1.414-1.414c4.296 4.296 4.296 11.26 0 15.556l-1.414-1.414ZM5.636 5.636a9 9 0 0 0 0 12.728l-1.414 1.414c-4.296-4.295-4.296-11.26 0-15.556l1.414 1.414Zm9.9 9.9a5 5 0 0 0 0-7.072L16.95 7.05a7 7 0 0 1 0 9.9l-1.414-1.414ZM8.463 8.463a5 5 0 0 0 0 7.072L7.05 16.95a7 7 0 0 1 0-9.9l1.414 1.414ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRfidLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-rfid-line`, { [`${name}-spin`]: props.spin }]);

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

