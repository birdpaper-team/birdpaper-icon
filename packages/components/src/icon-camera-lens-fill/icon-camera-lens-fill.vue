<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.827 21.763 14.31 14l3.532 6.117A9.955 9.955 0 0 1 12 22c-.746 0-1.473-.082-2.173-.237ZM7.89 21.12A10.029 10.029 0 0 1 2.458 15h8.965L7.89 21.119ZM2.05 13a9.964 9.964 0 0 1 2.583-7.761L9.112 13H2.05Zm4.109-9.117A9.955 9.955 0 0 1 12 2c.746 0 1.473.082 2.173.237L9.69 10 6.159 3.883ZM16.11 2.88A10.028 10.028 0 0 1 21.542 9h-8.965l3.533-6.119ZM21.95 11a9.964 9.964 0 0 1-2.583 7.761L14.888 11h7.064Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconCameraLensFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-camera-lens-fill`, { [`${name}-spin`]: props.spin }]);

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

