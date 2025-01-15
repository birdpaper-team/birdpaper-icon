<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h4l-1-2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l1-2H5Zm11 2h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3l-1 2h4a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-4l1 2Zm-8 6h8v-2H8v2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAlibabaCloudLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-alibaba-cloud-line`, { [`${name}-spin`]: props.spin }]);

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

