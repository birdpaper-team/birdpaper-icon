<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M22 19v2h-2v-2H4v2H2v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10.528A5.985 5.985 0 0 1 17 3c1.777 0 3.374.772 4.472 2H22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1ZM11.341 7H3v10h18v-3.528A6 6 0 0 1 11.341 7ZM17 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 13h2v2H5v-2Zm3 0h2v2H8v-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconProjector2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-projector2line`, { [`${name}-spin`]: props.spin }]);

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

