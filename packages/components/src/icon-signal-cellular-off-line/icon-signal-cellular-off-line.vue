<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m22.207 20.793-1.414 1.414L19.586 21H16v-3.586l-1-1V21H9V10.414L1.793 3.207l1.414-1.414 19 19ZM8 21H2v-8h6v8Zm-4-2h2v-4H4v4Zm7 0h2v-4.586l-2-2V19Zm11-1.242-2-2V5h-2v8.758l-2-2V3h6v14.758Zm-7-7L12.242 8H15v2.758Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSignalCellularOffLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-signal-cellular-off-line`, { [`${name}-spin`]: props.spin }]);

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

