<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M5 15v2c0 1.054.95 2 2 2h3v2H7a4 4 0 0 1-4-4v-2h2Zm13-5 4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2Zm-1 2.885L15.753 16h2.492L17 12.885ZM3 3h6a3 3 0 0 1 2.235 5A3 3 0 0 1 9 13H3V3Zm6 6H5v2h4a1 1 0 1 0 0-2Zm8-6a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3ZM9 5H5v2h4a1 1 0 0 0 0-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAB"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-ab`, { [`${name}-spin`]: props.spin }]);

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

