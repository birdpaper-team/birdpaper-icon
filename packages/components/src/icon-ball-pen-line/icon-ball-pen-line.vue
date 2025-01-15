<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m17.85 11.698-.708-.707-9.9 9.9H3v-4.243L14.314 5.334l5.657 5.657a1 1 0 0 1 0 1.414l-7.072 7.072-1.414-1.415 6.364-6.364Zm-2.122-2.121-1.414-1.414L5 17.477v1.414h1.414l9.314-9.314Zm2.828-7.071 2.829 2.828a1 1 0 0 1 0 1.415L19.97 8.163 15.728 3.92l1.414-1.414a1 1 0 0 1 1.414 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBallPenLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-ball-pen-line`, { [`${name}-spin`]: props.spin }]);

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

