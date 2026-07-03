<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M15.49 3.33a4 4 0 0 1 4.899 2.83l2.459 9.175a4.501 4.501 0 0 1-8.694 2.329 4.519 4.519 0 0 1-.148-.957 7 7 0 0 1-4.01 0 4.501 4.501 0 0 1-5.66 4.14 4.5 4.5 0 0 1-3.182-5.512l2.46-9.176a4 4 0 0 1 7.86.87 5.047 5.047 0 0 1 1.053 0A4.003 4.003 0 0 1 15.49 3.33ZM5.501 14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm13 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBinocularsFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-binoculars-fill`, { [`${name}-spin`]: props.spin }]);

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

