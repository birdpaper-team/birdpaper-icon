<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M14.434 3a2 2 0 0 1 1.714.97l.773 1.287a.5.5 0 0 0 .429.243H19a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8.5a3 3 0 0 1 3-3h1.65a.5.5 0 0 0 .43-.243l.772-1.286A2 2 0 0 1 9.566 3h4.868ZM12.47 9.317a.506.506 0 0 0-.942 0l-.253.612a4.366 4.366 0 0 1-2.25 2.326l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.364 4.364 0 0 1 2.22 2.251l.245.565c.18.415.753.415.934 0l.247-.565a4.363 4.363 0 0 1 2.219-2.251l.76-.338a.53.53 0 0 0 0-.963l-.718-.32a4.367 4.367 0 0 1-2.251-2.325l-.253-.612Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCameraAi2Fill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-camera-ai2fill`, { [`${name}-spin`]: props.spin }]);

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

