<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M10.52 19.863a9.948 9.948 0 0 1 .826-3.395 6.977 6.977 0 0 1-4.013-1.753l1.334-1.49a4.977 4.977 0 0 0 3.854 1.246 9.987 9.987 0 0 1 7.342-3.951 8 8 0 1 0-9.343 9.343Zm8.503-7.227a8.008 8.008 0 0 0-6.387 6.387l6.387-6.387ZM22 12c0 .168-.004.334-.012.5L12.5 21.988A10.11 10.11 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-12-2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconEmojiStickerLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-emoji-sticker-line`, { [`${name}-spin`]: props.spin }]);

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

