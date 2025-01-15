<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3.497 8.065 4.784 19h14.443l1.286-10.935-4.01 2.673-4.498-6.297-4.498 6.297-4.01-2.673ZM2.806 5.2 7.005 8l4.186-5.861a1 1 0 0 1 1.628 0l4.186 5.86 4.2-2.799a1 1 0 0 1 1.547.949L21.11 20.116a1 1 0 0 1-.993.884H3.894a1 1 0 0 1-.993-.884L1.258 6.15A1 1 0 0 1 2.806 5.2Zm9.2 9.8a2 2 0 1 1-.001-4 2 2 0 0 1 0 4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconVipCrown2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-vip-crown2line`, { [`${name}-spin`]: props.spin }]);

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

