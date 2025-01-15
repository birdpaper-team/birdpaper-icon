<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M22 12c0-5.523-4.477-10-10-10a9.985 9.985 0 0 0-8 4V3.5H2v6h6v-2H5.385A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10ZM10.777 8.518l4.599 3.066a.5.5 0 0 1 0 .832l-4.599 3.066a.5.5 0 0 1-.777-.416V8.934a.5.5 0 0 1 .777-.416Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMemoriesLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-memories-line`, { [`${name}-spin`]: props.spin }]);

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

