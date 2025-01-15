<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m5.735 2 5.695 5.247V2.012h1.109v5.259L18.259 2v5.983h2.349v8.629h-2.342v5.327l-5.727-5.032v5.09h-1.11V16.99L5.742 22v-5.388H3.393v-8.63h2.342V2Zm4.86 7.078H4.5v6.439H5.74v-2.031l4.854-4.408ZM6.85 13.972v5.585l4.58-4.034V9.81l-4.58 4.16Zm5.72 1.497 4.588 4.03v-2.887h-.006v-2.646l-4.582-4.16v5.663Zm5.696.048H19.5v-6.44h-6.047l4.814 4.363v2.077Zm-1.115-7.534V4.519l-3.76 3.464h3.76Zm-6.548 0-3.76-3.464v3.464h3.76Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPerplexityFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-perplexity-fill`, { [`${name}-spin`]: props.spin }]);

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

