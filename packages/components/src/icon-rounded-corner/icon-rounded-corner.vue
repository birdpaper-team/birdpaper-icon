<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M21 19v2h-2v-2h2Zm-4 0v2h-2v-2h2Zm-4 0v2h-2v-2h2Zm-4 0v2H7v-2h2Zm-4 0v2H3v-2h2Zm16-4v2h-2v-2h2ZM5 15v2H3v-2h2Zm0-4v2H3v-2h2Zm11-8a5.002 5.002 0 0 1 4.995 4.783L21 8v5h-2V8a3.01 3.01 0 0 0-2.824-2.995L16 5h-5V3h5ZM5 7v2H3V7h2Zm0-4v2H3V3h2Zm4 0v2H7V3h2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconRoundedCorner"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-rounded-corner`, { [`${name}-spin`]: props.spin }]);

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

