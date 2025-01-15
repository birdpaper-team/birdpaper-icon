<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M2 5h20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1v2a1 1 0 0 1-1 1h-7.414l-1-1h-1.172l-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm2 11v1h5.586l1-1H4Zm9.414 0 1 1H20v-1h-6.586ZM7 9H5v3h2V9Zm2 0v3h2V9H9Zm6 0h-2v3h2V9Zm2 0v3h2V9h-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRam2Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-ram2fill`, { [`${name}-spin`]: props.spin }]);

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

