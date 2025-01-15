<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M12 3.232a6.514 6.514 0 0 1 3.266 4.034 1 1 0 0 0 1.928-.532A8.505 8.505 0 0 0 14.5 2.519c.165-.013.332-.019.5-.019 2.007 0 3.68.728 4.83 2.11C20.963 5.967 21.5 7.846 21.5 10c0 3.097-.514 5.865-1.395 7.898-.84 1.938-2.208 3.602-4.105 3.602-1.1 0-1.787-.652-2.195-1.36-.362-.63-.578-1.423-.752-2.062-.207-.76-.366-1.328-.592-1.72C12.275 16.035 12.15 16 12 16c-.15 0-.275.035-.461.358-.226.392-.385.96-.592 1.72-.174.639-.39 1.433-.752 2.062C9.787 20.848 9.1 21.5 8 21.5c-1.897 0-3.265-1.664-4.105-3.602C3.015 15.865 2.5 13.098 2.5 10c0-2.154.538-4.033 1.67-5.39C5.32 3.228 6.992 2.5 9 2.5h.028A6.475 6.475 0 0 1 12 3.232Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconToothFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-tooth-fill`, { [`${name}-spin`]: props.spin }]);

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

