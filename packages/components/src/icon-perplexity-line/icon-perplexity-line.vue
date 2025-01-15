<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M7.173 3.26 5.5 1.74V7.5H3V17h2.5v5.26l1.673-1.52L11 17.26V22h2v-4.74l3.827 3.48 1.673 1.52V17H21V7.5h-2.5V1.74l-1.673 1.52L13 6.74V2h-2v4.74L7.173 3.26ZM16.5 7.5h-1.363L16.5 6.26V7.5Zm-7.637 0H7.5V6.26L8.863 7.5Zm1.1 2-4.136 3.76-.327.298V15H5V9.5h4.963Zm4.074 0H19V15h-.5v-1.442l-.327-.298-4.136-3.76ZM7.5 14.442l3.5-3.181v3.297l-3.5 3.181v-3.297Zm5.5-3.181 3.5 3.181v3.297L13 14.558V11.26Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPerplexityLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-perplexity-line`, { [`${name}-spin`]: props.spin }]);

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

