<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M8 1.5a1 1 0 0 0-2 0v1.018c.004.044.005.063-.207.275l-.02.02C5.506 3.079 5 3.583 5 4.5v1a1 1 0 0 0 2 0V4.482c-.004-.044-.005-.063.207-.275l.02-.02C7.494 3.921 8 3.417 8 2.5v-1ZM2 9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1c0 4.1-2.468 7.625-6 9.168V20a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.832A10.002 10.002 0 0 1 2 10V9ZM18 .5a1 1 0 0 1 1 1v1c0 .916-.506 1.42-.773 1.687l-.02.02c-.212.212-.21.231-.208.275L18 4.5v1a1 1 0 1 1-2 0v-1c0-.916.506-1.42.773-1.687l.02-.02c.212-.212.21-.231.208-.275L17 2.5v-1a1 1 0 0 1 1-1Zm-4.5 1a1 1 0 1 0-2 0v1.018c.004.044.005.063-.207.275l-.02.02c-.267.266-.773.77-.773 1.687v1a1 1 0 1 0 2 0V4.482c-.004-.044-.005-.063.207-.275l.02-.02c.267-.266.773-.77.773-1.687v-1Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconBowlFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-bowl-fill`, { [`${name}-spin`]: props.spin }]);

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

