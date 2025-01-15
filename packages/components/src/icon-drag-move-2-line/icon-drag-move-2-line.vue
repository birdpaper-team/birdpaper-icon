<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M11 11V5.828L9.172 7.657 7.757 6.243 12 2l4.243 4.243-1.415 1.414L13 5.828V11h5.172l-1.829-1.828 1.414-1.415L22 12l-4.243 4.243-1.414-1.415L18.172 13H13v5.172l1.828-1.829 1.415 1.414L12 22l-4.243-4.243 1.415-1.414L11 18.172V13H5.828l1.829 1.828-1.414 1.415L2 12l4.243-4.243 1.414 1.415L5.828 11H11Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconDragMove2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-drag-move2line`, { [`${name}-spin`]: props.spin }]);

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

