<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m10 10.497 1.039-3.635a1 1 0 0 1 1.922 0L14 10.497v1.5h.72a1 1 0 0 1 .97.757l1.361 5.447a8 8 0 1 0-10.102 0l1.362-5.447a1 1 0 0 1 .97-.757H10v-1.5Zm2 9.5a7.951 7.951 0 0 0 3.265-.694l-1.327-5.306h-3.876l-1.327 5.305a7.948 7.948 0 0 0 3.265.695Zm0 2c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMarkupLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-markup-line`, { [`${name}-spin`]: props.spin }]);

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

