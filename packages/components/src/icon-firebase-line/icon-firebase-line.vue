<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m9.223 8.707-2.312 4.334 1.09-6.715 1.222 2.381Zm1.145-2.148L7.695 1.353a.5.5 0 0 0-.938.148L4 18.5l1.748 1.093 5.192 3.244a2 2 0 0 0 2.12 0L20 18.5 18.142 5.961a.5.5 0 0 0-.841-.287l-2.735 2.637-2.125-3.984a.5.5 0 0 0-.882 0l-1.19 2.232Zm2.701 3.196L8.667 14 12 7.75l1.07 2.005Zm-5.837 8.407 9.36-9.025 1.238 8.36L12 21.143l-4.768-2.98Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconFirebaseLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-firebase-line`, { [`${name}-spin`]: props.spin }]);

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

