<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M16 1a1 1 0 0 1 1 1v.999L22 3v6l-2.02-.001 2.767 7.596A4 4 0 1 1 15.127 19h-4.253a4.002 4.002 0 0 1-7.8-.227A1.998 1.998 0 0 1 2 17v-5h9a1 1 0 0 0 .883.993L12 13h2a1 1 0 0 0 .993-.883L15 12V3h-3V1h4ZM7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM10 3a1 1 0 0 1 1 1v7H2V4a1 1 0 0 1 1-1h7Zm10 2h-3v2h3V5ZM9 5H4v1h5V5Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconTakeawayFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-takeaway-fill`, { [`${name}-spin`]: props.spin }]);

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

