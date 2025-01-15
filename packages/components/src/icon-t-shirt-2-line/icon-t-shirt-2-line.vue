<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M8.998 3a3 3 0 1 0 6 0h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2.001l.001 8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1l-.001-8.001L2.998 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6Zm11 1.999h-3.417l-.017.041a5.002 5.002 0 0 1-4.35 2.955L11.999 8a5.001 5.001 0 0 1-4.566-2.96L7.414 5H3.998v5l2.999-.001V19h10.001l-.001-9 3.001-.001v-5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconTShirt2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-tshirt2line`, { [`${name}-spin`]: props.spin }]);

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

