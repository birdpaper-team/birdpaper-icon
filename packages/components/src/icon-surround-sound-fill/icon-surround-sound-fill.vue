<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm4.05 4.121A6.978 6.978 0 0 0 5 12.071c0 1.933.784 3.683 2.05 4.95l1.414-1.414A4.984 4.984 0 0 1 7 12.07c0-1.38.56-2.63 1.464-3.535L7.05 7.12Zm9.9 0-1.414 1.415A4.984 4.984 0 0 1 17 12.07c0 1.38-.56 2.63-1.464 3.536l1.414 1.414A6.978 6.978 0 0 0 19 12.07a6.978 6.978 0 0 0-2.05-4.95ZM12 15.071a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconSurroundSoundFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-surround-sound-fill`, { [`${name}-spin`]: props.spin }]);

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

