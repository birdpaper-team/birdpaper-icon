<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M16 1a1 1 0 0 1 1 1v1h5v6h-2.019l2.746 7.544a4 4 0 1 1-7.6 2.456h-4.253a4.002 4.002 0 0 1-7.8-.226A2 2 0 0 1 2 17V7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3h-3V1h4ZM7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12-.001a2 2 0 1 0 1.88 1.316l-.017-.044A2 2 0 0 0 19 16ZM17.853 9H17v3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3H4v3.354A4.002 4.002 0 0 1 10.874 17h4.252a4.002 4.002 0 0 1 4.568-2.94L17.853 9ZM9 8H4v2h5V8Zm11-3h-3v2h3V5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconEBike2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-ebike2line`, { [`${name}-spin`]: props.spin }]);

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

