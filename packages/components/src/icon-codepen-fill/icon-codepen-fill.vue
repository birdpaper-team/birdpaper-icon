<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 10.202 9.303 12 12 13.798 14.697 12 12 10.202Zm4.5.596L19.197 9 13 4.869v3.596l3.5 2.333Zm3.5.07L18.303 12 20 13.132v-2.264Zm-3.5 2.334L13 15.535v3.596L19.197 15 16.5 13.202ZM11 8.465V4.869L4.803 9 7.5 10.798 11 8.465ZM4.803 15 11 19.131v-3.596l-3.5-2.333L4.803 15Zm.894-3L4 10.868v2.264L5.697 12ZM2 9a1 1 0 0 1 .445-.832l9-6a1 1 0 0 1 1.11 0l9 6A1 1 0 0 1 22 9v6a1 1 0 0 1-.445.832l-9 6a1 1 0 0 1-1.11 0l-9-6A1 1 0 0 1 2 15V9Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCodepenFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-codepen-fill`, { [`${name}-spin`]: props.spin }]);

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

