<template>
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" :class="cls" :style="innerStyle" :fill="fill" @click="onClick"><path d="M6.964 3h10.072a3.5 3.5 0 0 0 4.445 2.86A3.5 3.5 0 0 1 18 9H6a3.5 3.5 0 0 1-3.481-3.14A3.5 3.5 0 0 0 6.964 3Zm16.015 8.111a2.999 2.999 0 0 1-4.077-1.11H5.098a2.999 2.999 0 0 1-4.078 1.11A3.5 3.5 0 0 0 3 14.663V21h6v-2a3 3 0 0 1 6 0v2h6v-6.336a3.5 3.5 0 0 0 1.979-3.553Z"></path></svg>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";

defineOptions({ name: "IconAncientGateFill"});
const props = defineProps({
  size: { type: String, default: "18px" },
  fill: { type: String, default: "#595959" },
  spin: { type: Boolean, default: false },
  rotate: { type: Number },
});
const emits = defineEmits(["click"]);

const name = "bp-icon";
const cls = computed(() => [name, `${name}-icon-ancient-gate-fill`, { [`${name}-spin`]: props.spin }]);

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

