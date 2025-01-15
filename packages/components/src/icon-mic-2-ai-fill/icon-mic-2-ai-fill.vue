<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="m20.467 7.694.246-.566a4.363 4.363 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319A4.366 4.366 0 0 1 20.724.931L20.47.32a.506.506 0 0 0-.942 0l-.253.61a4.366 4.366 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.363 4.363 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0Zm-6.08-2.355c.274.434.649.754 1.124.961l.565.247c.38.166.689.398.924.698V12a5 5 0 0 1-10 0V6a5 5 0 0 1 7.996-4.003c-.24.18-.443.401-.61.664A2.458 2.458 0 0 0 14 4c0 .484.129.93.387 1.339ZM2.192 13.96l1.962-.392a8.003 8.003 0 0 0 15.692 0l1.962.392C20.896 18.545 16.852 22 12 22c-4.851 0-8.896-3.455-9.808-8.039Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconMic2AiFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-mic2ai-fill`, { [`${name}-spin`]: props.spin }]);

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

