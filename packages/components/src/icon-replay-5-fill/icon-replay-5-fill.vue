<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M22 12c0-5.523-4.477-10-10-10a9.977 9.977 0 0 0-7.553 3.446L2 3v6h6L5.865 6.865A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10Zm-7.5-2V8.5h-5v4.25h3.125a.625.625 0 1 1 0 1.25H9.5v1.5h3.125a2.125 2.125 0 0 0 0-4.25H11V10h3.5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconReplay5Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-replay5fill`, { [`${name}-spin`]: props.spin }]);

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

