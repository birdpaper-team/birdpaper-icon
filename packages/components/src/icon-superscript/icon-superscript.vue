<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m5.596 5 4.904 5.928L15.404 5H18l-6.202 7.497L18 19.994V20h-2.59l-4.91-5.934L5.59 20H3v-.006l6.202-7.497L3 5h2.596ZM21.55 6.58a.8.8 0 1 0-1.32-.36l-1.155.33A2.001 2.001 0 1 1 23 6c0 .573-.24 1.09-.627 1.454L20.744 9H23v1h-4V9l2.55-2.42Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSuperscript"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-superscript`, { [`${name}-spin`]: props.spin }]);

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

