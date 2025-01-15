<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 1c-1.557 0-3.178-.357-4.629-.929l-.742 1.857c1.076.43 2.228.719 3.37.902 0 .87.086 1.764-.316 2.567l-1.578 3.156 1.79.894 1.552-3.105a.618.618 0 0 1 1.106 0l1.552 3.105 1.79-.894-1.578-3.156C13.915 13.094 14 12.2 14 11.33a16.45 16.45 0 0 0 3.359-.897c.025-.01-.73-1.862-.733-1.86-1.453.566-3.067.927-4.626.927Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAccessibilityLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-accessibility-line`, { [`${name}-spin`]: props.spin }]);

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

