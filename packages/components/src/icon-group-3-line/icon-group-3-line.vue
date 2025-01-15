<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M8.5 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM9 16.5a2.5 2.5 0 0 0-5 0V19h5v-2.5Zm2 4.5H2v-4.5a4.5 4.5 0 1 1 9 0V21Zm8.5-14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm6.5 9.5a2.5 2.5 0 0 0-5 0V19h5v-2.5ZM13 19v-2.5a4.5 4.5 0 1 1 9 0V21h-9v-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconGroup3Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-group3line`, { [`${name}-spin`]: props.spin }]);

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

