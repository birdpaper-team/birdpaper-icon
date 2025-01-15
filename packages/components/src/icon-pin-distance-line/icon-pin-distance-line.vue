<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M9.975 8.975a3.5 3.5 0 1 0-4.95 0L7.5 11.45l2.475-2.475ZM7.5 14.278 3.61 10.39a5.5 5.5 0 1 1 7.78 0L7.5 14.28ZM7.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm9 12.45 2.475-2.475a3.5 3.5 0 1 0-4.95 0L16.5 20.45Zm3.89-1.06-3.89 3.888-3.89-3.889a5.5 5.5 0 1 1 7.78 0ZM16.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconPinDistanceLine"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-pin-distance-line`, { [`${name}-spin`]: props.spin }]);

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

