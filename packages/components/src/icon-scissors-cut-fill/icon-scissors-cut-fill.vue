<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.879 11.997 7.562 9.68A4 4 0 1 1 9.683 7.56L12 9.875l6.374-6.374a2 2 0 0 1 2.829 0l.707.707L9.683 16.435a4 4 0 1 1-2.121-2.121l2.317-2.317ZM6 7.997a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm9.535-6.587 6.375 6.375-.707.707a2 2 0 0 1-2.829 0l-4.96-4.96 2.12-2.122ZM16 10.997h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-14 0h2v2H6v-2Zm-4 0h2v2H2v-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconScissorsCutFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-scissors-cut-fill`, { [`${name}-spin`]: props.spin }]);

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

