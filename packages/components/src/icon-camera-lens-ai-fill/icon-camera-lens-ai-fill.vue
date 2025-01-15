<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m20.467 8.694.246-.566a4.363 4.363 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.366 4.366 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.366 4.366 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.363 4.363 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0ZM14.309 14l-4.482 7.763c.7.155 1.427.237 2.173.237 2.18 0 4.198-.698 5.841-1.883L14.31 14ZM2.458 15a10.029 10.029 0 0 0 5.432 6.119L11.423 15H2.458ZM2 12c0 .338.017.671.05 1h7.063l-4.48-7.761A9.964 9.964 0 0 0 2 12ZM12 2c-2.18 0-4.198.698-5.841 1.883L9.69 10l4.482-7.763C13.473 2.082 12.746 2 12 2Zm10 10c0-.338-.017-.671-.05-1h-7.063l4.48 7.761A9.964 9.964 0 0 0 22 12Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCameraLensAiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-camera-lens-ai-fill`, { [`${name}-spin`]: props.spin }]);

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

