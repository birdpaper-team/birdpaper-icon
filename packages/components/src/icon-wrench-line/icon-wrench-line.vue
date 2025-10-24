<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M19.038 6.378a1 1 0 0 1 1.608.276 7.002 7.002 0 0 1-8.129 9.78l-3.844 3.845a3.5 3.5 0 0 1-4.95-4.95l3.845-3.845a7.002 7.002 0 0 1 9.78-8.129 1 1 0 0 1 .275 1.609l-2.586 2.587a1 1 0 0 0 1.414 1.414l2.587-2.587Zm-1.173 4.001a3 3 0 1 1-4.243-4.242l1.415-1.415a5.002 5.002 0 0 0-5.397 6.693 1 1 0 0 1-.23 1.054l-4.273 4.274a1.5 1.5 0 0 0 2.121 2.122l4.274-4.274a1 1 0 0 1 1.055-.23 5.002 5.002 0 0 0 6.693-5.397l-1.415 1.415Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconWrenchLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-wrench-line`, { [`${name}-spin`]: props.spin }]);

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

