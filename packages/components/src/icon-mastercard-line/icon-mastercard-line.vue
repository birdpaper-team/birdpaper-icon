<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12.001 18.294a7.3 7.3 0 1 1 0-12.588 7.3 7.3 0 1 1 0 12.588Zm1.702-1.384a5.3 5.3 0 1 0 0-9.82A7.273 7.273 0 0 1 15.6 12c0 1.89-.719 3.614-1.898 4.91Zm-3.404-9.82a5.3 5.3 0 1 0 0 9.82A7.273 7.273 0 0 1 8.401 12c0-1.89.719-3.614 1.898-4.91Zm1.702 1.115a5.284 5.284 0 0 0-1.6 3.795c0 1.488.613 2.832 1.6 3.795a5.284 5.284 0 0 0 1.6-3.795 5.284 5.284 0 0 0-1.6-3.795Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMastercardLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-mastercard-line`, { [`${name}-spin`]: props.spin }]);

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

