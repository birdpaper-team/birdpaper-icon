<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m6.365 6 8.784 9.663.72-.283c1.685-.661 2.864-2.156 3.092-3.896A6.502 6.502 0 0 1 12.078 6H6.364ZM14 5a4.5 4.5 0 0 0 6.714 3.918c.186.618.286 1.271.286 1.947 0 2.891-1.822 5.365-4.4 6.377L20 21h-17V4h11.111a4.512 4.512 0 0 0-.111 1Zm4.5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm-13.5-.03V19h10.48L5.001 7.47Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRemixiconLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-remixicon-line`, { [`${name}-spin`]: props.spin }]);

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

