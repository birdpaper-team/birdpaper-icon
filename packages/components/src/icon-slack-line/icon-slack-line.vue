<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M14.501 3a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 1.5-1.5Zm-10 10h1.5v1.5a1.5 1.5 0 1 1-1.5-1.5Zm8.5 5h1.5a1.5 1.5 0 1 1-1.5 1.5V18Zm1.5-5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 1 1 0-3Zm5-5a1.5 1.5 0 0 1 0 3h-1.5V9.5a1.5 1.5 0 0 1 1.5-1.5Zm-15 0h5a1.5 1.5 0 1 1 0 3h-5a1.5 1.5 0 0 1 0-3Zm5-5a1.5 1.5 0 0 1 1.5 1.5V6h-1.5a1.5 1.5 0 1 1 0-3Zm0 10a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 1.5-1.5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSlackLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-slack-line`, { [`${name}-spin`]: props.spin }]);

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

