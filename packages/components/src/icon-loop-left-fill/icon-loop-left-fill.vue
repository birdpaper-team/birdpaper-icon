<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 4a7.986 7.986 0 0 0-6.357 3.143L8 9.5H2v-6l2.219 2.219A9.982 9.982 0 0 1 12 2c5.523 0 10 4.477 10 10h-2a8 8 0 0 0-8-8Zm-8 8a8 8 0 0 0 14.357 4.857L16 14.5h6v6l-2.219-2.219A9.982 9.982 0 0 1 12 22C6.477 22 2 17.523 2 12h2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconLoopLeftFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-loop-left-fill`, { [`${name}-spin`]: props.spin }]);

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

