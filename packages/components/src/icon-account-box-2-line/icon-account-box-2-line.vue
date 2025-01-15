<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M4.995 3A1.995 1.995 0 0 0 3 4.995v14.01C3 20.107 3.893 21 4.995 21h14.01A1.995 1.995 0 0 0 21 19.005V4.995A1.995 1.995 0 0 0 19.005 3H4.995ZM5 19V5h14v14H5Zm7-11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 3a2 2 0 0 0-2 2H8a4 4 0 0 1 8 0h-2a2 2 0 0 0-2-2Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAccountBox2Line"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-account-box2line`, { [`${name}-spin`]: props.spin }]);

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

