<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m4.256 5.672 3.58 3.577A2.5 2.5 0 0 0 10 13h3.999l.09.008A.5.5 0 0 1 14 14H8.5v2H11v2h2v-2h1c.182 0 .359-.02.53-.056l3.798 3.8A9.958 9.958 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.4.846-4.604 2.256-6.328ZM12 2c5.523 0 10 4.477 10 10 0 2.4-.846 4.604-2.256 6.328l-3.579-3.577A2.5 2.5 0 0 0 14 11h-4l-.09-.01A.5.5 0 0 1 10 10h5.5V8H13V6h-2v2h-1c-.181 0-.358.02-.529.056l-3.799-3.8A9.959 9.959 0 0 1 12 2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCreativeCommonsNcFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-creative-commons-nc-fill`, { [`${name}-spin`]: props.spin }]);

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

