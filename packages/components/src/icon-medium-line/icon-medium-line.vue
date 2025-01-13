<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M8 7a5 5 0 1 0 0 10A5 5 0 0 0 8 7Zm0-2a6.993 6.993 0 0 1 5.804 3.086l.034-.069C14.343 7.007 15.227 6 16.5 6c1.181 0 2.027.866 2.547 1.798.038-.05.079-.1.12-.147.29-.325.737-.651 1.333-.651s1.044.326 1.332.65c.29.327.505.743.665 1.17.323.863.503 1.987.503 3.18s-.18 2.317-.503 3.18c-.16.427-.375.843-.665 1.17-.288.324-.736.65-1.332.65-.596 0-1.044-.326-1.332-.65a2.634 2.634 0 0 1-.121-.148C18.527 17.134 17.68 18 16.5 18c-1.273 0-2.157-1.006-2.662-2.017a7.273 7.273 0 0 1-.034-.069A7 7 0 1 1 8 5Zm12 7c0 .913.08 1.933.5 2.764.42-.83.5-1.85.5-2.764 0-.913-.08-1.933-.5-2.764-.42.83-.5 1.85-.5 2.764Zm-2 0c0-.76-.213-4-1.5-4S15 11.24 15 12c0 .76.213 4 1.5 4s1.5-3.24 1.5-4Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({
  name: "IconMediumLine",
});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  rotate: { type: Number },
  spin: { type: Boolean },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-zcool-line`, { [`${name}-spin`]: props.spin }]);

const innerStyle = computed(() => {
  const styles: CSSProperties = {};
  props.size && (styles.width = props.size);
  props.size && (styles.height = props.size);
  props.rotate && (styles.transform = `rotate(${props.rotate}deg)`);

  return styles;
});

const onClick = (ev: MouseEvent) => emits("click", ev);
</script>

