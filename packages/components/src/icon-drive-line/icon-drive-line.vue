<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.097 6.15 4.31 14.443l1.755 3.032 4.785-8.289L9.097 6.15Zm-1.3 12.324h9.568l1.751-3.034H9.55l-1.752 3.034Zm11.314-5.034-4.786-8.29H10.83l4.787 8.29h3.495ZM8.52 3.15h6.96L22 14.444l-3.48 6.03H5.49L2 14.444 8.52 3.15Zm3.485 8.036-1.302 2.254h2.603l-1.301-2.254Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconDriveLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-drive-line`, { [`${name}-spin`]: props.spin }]);

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

