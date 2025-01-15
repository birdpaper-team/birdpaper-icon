<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M6 5.914 3.707 8.207 2.293 6.793 7 2.086l4.707 4.707-1.414 1.414L8 5.914V11H6V5.914ZM17 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm4.707 5.707-1.414-1.414L18 18.086V13h-2v5.086l-2.293-2.293-1.414 1.414L17 21.914l4.707-4.707ZM5 19h4v-4H5v4Zm5-6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSwap3Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-swap3line`, { [`${name}-spin`]: props.spin }]);

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

